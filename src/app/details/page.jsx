"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/functions";

export default function Page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();
  const { cart, total } = useCart();

  /*
    1: Detalles
    2: Envio
    3: Pago
  */
  const [step, setStep] = useState(1);
  const [detailsData, setDetailsData] = useState(null);

  const handleStep = (info) => {
    if (step == 1) {
      setDetailsData({
        email: user.email,
        country: info.country,
      });
    }

    setStep(step + 1);
  };

  return (
    <div className="flex w-full min-h-[calc(100vh-5rem)]">
      <div className="bg-white w-full md:w-1/2 px-10 md:pl-40 md:pr-20 flex flex-col relative py-10">
        <Navegation setStep={setStep} step={step} />
        {step == 1 && <FormDeatils handleStep={handleStep} />}
        {step == 2 && (
          <FormShipping
            handleStep={handleStep}
            data={detailsData}
            setStep={setStep}
          />
        )}
        {step == 3 && (
          <FormPayment
            handleStep={handleStep}
            data={detailsData}
            setStep={setStep}
          />
        )}
      </div>
      <div className="hidden md:flex flex-col pt-20 gap-4 bg-gray-100 w-1/2 px-10 md:pl-20 md:pr-40">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <div className="w-1/2 aspect-square relative">
              {cart.slice(0, 3).map((item, index) => (
                <img
                  className="w-full h-full object-cover absolute"
                  src={item.image}
                  alt="producto"
                  style={{
                    zIndex: cart.length - index,
                    left: `${index}rem`,
                    top: `${index}rem`,
                  }}
                />
              ))}
            </div>
            <div className="flex flex-col">
              <h2 className="text-black-500 text-xl text-right md:text-2xl">
                  {cart[0]?.name}
              </h2>
              {cart.length > 1 && (
                <p className="text-black-500 text-right opacity-60">{`y ${
                  cart.length - 1
                } más`}</p>
              )}

              <h1 className="text-black-500 text-xl text-right md:text-2xl mt-5 pb-4 sm:pb-6">
                {formatPrice(total)} COP
              </h1>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <p>Subtotal</p>
            <p>{formatPrice(total)} COP</p>
          </div>
          <div className="flex justify-between">
            <p>Envío</p>
            <p>Calculado en el siguente paso</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <h2>{formatPrice(total)} COP</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navegation({ step, setStep }) {
  return (
    <nav className="flex absolute top-0 md:left-40 mt-10" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/cart"
            className={`inline-flex items-center text-sm font-medium ${
              step >= 1 ? "text-red-500 font-bold" : "text-gray-700"
            }`}
          >
            <IconShoppingCart />
            Carrito
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            {step >= 2 ? (
              <p
                onClick={() => {
                  setStep(1);
                }}
                className={`ms-1 text-sm font-medium ${
                  step >= 2 ? "text-red-500 font-bold" : "text-black"
                } cursor-pointer`}
              >
                Detalles
              </p>
            ) : (
              <p
                className={`ms-1 text-sm font-medium ${
                  step === 1 ? "font-bold text-black" : "text-gray-700"
                }`}
              >
                Detalles
              </p>
            )}
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            {step >= 3 ? (
              <p
                onClick={() => {
                  setStep(2);
                }}
                className={`ms-1 text-sm font-medium ${
                  step >= 3
                    ? "text-red-500 font-bold cursor-pointer"
                    : "text-black"
                }`}
              >
                Envío
              </p>
            ) : (
              <p
                className={`ms-1 text-sm font-medium ${
                  step === 2 ? "font-bold text-black" : "text-gray-700"
                }`}
              >
                Envío
              </p>
            )}
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              className={`ms-1 text-sm font-medium ${
                step < 3 && "text-gray-500"
              }`}
            >
              Pago
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

function FormDeatils({ handleStep }) {
  const [countries, setCountries] = useState([]);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [shippingNote, setShippingNote] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleStep({
      name,
      lastName,
      address,
      email,
      shippingNote,
      country,
    });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Error fetching countries");
        }

        const data = await response.json();
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <form className="flex flex-col gap-4 w-full mt-20" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold leading-tight tracking-tight text-black-500 md:text-2xl">
        Dirección de Envío
      </h2>
      <div className="flex gap-7">
        <input
          placeholder="Nombre"
          className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Apellido"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input
          className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Dirección y Número"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <input
          className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Nota de envío (opcional)"
          value={shippingNote}
          onChange={(e) => setShippingNote(e.target.value)}
        />
      </div>
      <div className="flex">
        <select
          required
          defaultValue=""
          defaultChecked=""
          className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value={""} disabled>
            País
          </option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between items-center pt-5">
        <Link className="text-red-500 underline decoration-1" href="/cart">
          Regresar al carrito
        </Link>
        <button
          type="submit"
          className="w-[40%] flex justify-center items-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Ir al envío
        </button>
      </div>
    </form>
  );
}

function FormShipping({ handleStep, setStep, data }) {
  return (
    <div className="flex flex-col gap-4 w-full mt-20">
      <div className="border rounded-xl border-[#B15C5733] p-5 flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <p className="text-[#818181]">Contacto</p>
            <p>{data.email}</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <p className="text-[#818181]">Enviar</p>
            <p>{data.country}</p>
          </div>

          <button
            className="text-red-500 underline decoration-1"
            onClick={() => setStep(1)}
          >
            Editar
          </button>
        </div>
      </div>
      <h2 className="text-xl font-bold leading-tight tracking-tight text-black-500 md:text-2xl mt-10">
        Forma de envío
      </h2>
      <div className="border rounded-xl border-[#B15C5733] p-5 flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <input
              type="radio"
              value={true}
              checked={true}
              className="text-red-500 focus:ring-red-500"
            />
            <p className="text-[#818181]">Envío estándar</p>
          </div>
          <p className="font-bold">Gratis</p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-5">
        <button
          className="text-red-500 underline decoration-1"
          onClick={() => setStep(1)}
        >
          Regresar a detalles
        </button>
        <button
          type="button"
          className="w-[40%] flex justify-center items-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleStep}
        >
          Ir al pago
        </button>
      </div>
    </div>
  );
}

function FormPayment({ handleStep, setStep, data }) {
  return (
    <div className="flex flex-col gap-4 w-full mt-20">
      {/* Secion 1 */}
      <div className="border rounded-xl border-[#B15C5733] p-5 flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <p className="text-[#818181]">Contacto</p>
            <p>{data.email}</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <p className="text-[#818181]">Enviar</p>
            <p>{data.country}</p>
          </div>

          <button
            className="text-red-500 underline decoration-1"
            onClick={() => setStep(1)}
          >
            Editar
          </button>
        </div>
        <hr />
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <p className="text-[#818181]">Método</p>
            <p>Envío estándar - GRATIS</p>
          </div>

          <button
            className="text-red-500 underline decoration-1"
            onClick={() => setStep(2)}
          >
            Editar
          </button>
        </div>
      </div>

      {/* Secion 2 */}
      <h2 className="text-xl font-bold leading-tight tracking-tight text-black-500 md:text-2xl mt-10">
        Método de pago
      </h2>
      <div>
        <div className="flex gap-4 flex-row border border-[#B15C5733] p-3 rounded-t-lg bg-gradient-to-r from-red-200 to-gray-200">
          <IconCreditCard className="text-red-500" />
          <h1 className="text-red-500 font-semibold">Tarjeta de Credito</h1>
        </div>
        <div className="flex gap-4 flex-col border border-[#B15C5733] p-3 rounded-b-lg">
          <input
            placeholder="Número de la tarjeta"
            type="number"
            className="bg-white border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
          />
          <input
            placeholder="Nombre"
            className="bg-white border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
            type="text"
          />
          <div className="flex justify-between">
            <input
              placeholder="Expiración"
              className="bg-white border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-red-600 focus:border-red-600 block w-[48%] p-2.5"
              type="number"
            />
            <input
              placeholder="CVV"
              className="bg-white border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-red-600 focus:border-red-600 block w-[48%] p-2.5"
              type="number"
            />
          </div>
        </div>
      </div>

      {/* Secion 3 */}
      <h2 className="text-xl font-bold leading-tight tracking-tight text-black-500 md:text-2xl mt-10">
        Dirección de facturación
      </h2>
      <div className="border rounded-xl border-[#B15C5733] p-5 flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <input
              type="radio"
              value={true}
              checked={true}
              className="text-red-500 focus:ring-red-500"
            />
            <p className="text-[#818181]">La misma que la dirección de envío</p>
          </div>
        </div>
      </div>

      {/* Secion Final */}
      <div className="flex justify-between items-center pt-5">
        <button
          className="text-red-500 underline decoration-1"
          onClick={() => setStep(1)}
        >
          Regresar a detalles
        </button>
        <button
          type="button"
          className="w-[40%] flex justify-center items-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleStep}
        >
          Ir al pago
        </button>
      </div>
    </div>
  );
}
