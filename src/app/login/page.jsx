"use client";

import { useAuth } from "@/context/AuthContext";
import { HOME_PATH, REGISTER_PATH } from "@/utils/constants";
import { IconLoader2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function page() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Por favor completa todos los campos");
      setLoading(false);
      return;
    }

    const res = await login(email, password);
    if (res.code) {
      toast.error(res.code);
      setLoading(false);
      return;
    }

    router.push(HOME_PATH);
    toast.success("Bienvenido");
  };

  return (
    <section className="w-full h-[calc(100vh-5rem)] flex justify-center items-center bg-red-50">
      <div className="w-1/3 h-full bg-red-500 hidden md:block"></div>
      <div className="w-full md:w-2/3">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-2xl ">
                Inicia Sesión
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="name@company.com"
                    required={true}
                    onChange={handleChange}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-black "
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required={true}
                    onChange={handleChange}
                    value={password}
                  />
                </div>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500">
                        Recuerdame
                      </label>
                    </div>
                  </div> */}
                  <a
                    href="#"
                    className="text-sm font-medium text-red-600 hover:underline "
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading ? (
                    <IconLoader2 className="animate-spin" />
                  ) : (
                    "Iniciar Sesión"
                  )}
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Aun no tienes cuenta?{" "}
                  <a
                    href={REGISTER_PATH}
                    className="font-medium text-primary-600 hover:underline text-red-500"
                  >
                    Registrate
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
