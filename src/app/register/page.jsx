"use client";

import { useAuth } from "@/context/AuthContext";
import { HOME_PATH, LOGIN_PATH } from "@/utils/constants";
import { IconLoader2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const { register } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "passwordConfirmation") setPasswordConfirmation(value);
    if (name === "name") setName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password || !passwordConfirmation) {
      toast.error("Por favor completa todos los campos");
      setLoading(false);
      return;
    }

    if (password !== passwordConfirmation) {
      toast.error("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    const res = await register(name, email, password);
    if (res.code) {
      toast.error(res.code);
      setLoading(false);
      return;
    }

    toast.success("Cuenta creada exitosamente");
    router.push(HOME_PATH);
  };

  return (
    <section className="w-full h-[calc(100vh-5rem)] flex justify-center items-center bg-red-50">
      <div className="w-1/3 h-full bg-red-500 hidden md:block"></div>
      <div className="w-full md:w-2/3">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-2xl ">
                Crea tu cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                    placeholder="Juan David Estrada"
                    required={true}
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                    placeholder="name@company.com"
                    required={true}
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black "
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 "
                    required={true}
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="passwordConfirmation"
                    className="block mb-2 text-sm font-medium text-black "
                  >
                    Confirma tu contraseña
                  </label>
                  <input
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 "
                    required={true}
                    value={passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 "
                      required={true}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      Acepto los{" "}
                      <a
                        className="font-medium text-red-600 hover:underline"
                        href="#"
                      >
                        Terminos y Condiciones
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading ? (
                    <IconLoader2 className="animate-spin" />
                  ) : (
                    "Crear cuenta"
                  )}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Ya tienes cuenta?{" "}
                  <a
                    href={LOGIN_PATH}
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Inicia sesión
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
