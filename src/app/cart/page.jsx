"use client";
"use Auth"
import { useCart } from "@/context/CartContext";
// import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { formatPrice } from "@/utils/functions";

export default function Page() {
  const { user } = useAuth()
  const { cart, removeFromCart, total } = useCart();

  return (
    <section className="w-full px-10 md:px-40 py-10 md:py-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-5">Tu carrito</h1>
      <Link href="/catalogue">
        <p className="text-red-500">Seguir comprando</p>
      </Link>
      {cart.length > 0 ? (
        <MagicMotion>
          <div className="w-full mt-10 flex flex-col gap-5">
            <div className="w-full flex">
              <div className="w-[80%]">
                <p>Producto</p>
              </div>
              <div className="w-[20%]">
                <p>Precio</p>
              </div>
            </div>
            <hr />
            <div className="w-full overflow-x-auto flex flex-col gap-5">
              {cart.map((item) => (
                <div key={item.id} className="w-full flex">
                  <div className="w-[80%] flex gap-5">
                    <img
                      src={item.image}
                      alt=""
                      className="w-1/4 md:w-1/6 aspect-square object-cover"
                    />
                    <div className="flex flex-col gap-2 justify-start items-start">
                      <p className="font-medium text-base md:text-3xl">
                        {item.name}
                      </p>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="text-red-500"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                  <div className="w-[20%]">
                    <p className="text-base md:text-xl">{formatPrice(item.price)} COP</p>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div className="w-full flex justify-end gap-5 items-center">
              <div className="flex flex-col items-end">
                <p className="text-xl font-medium">Sub-Total: {formatPrice(total)} COP</p>
                <p className="text-black/50 text-xs">
                  Los impuestos y gastos de envío se calcularán posteriormente
                </p>
              </div>
              <Link href={user ? "/details" : "/login"} className="bg-red-500 text-white px-8 py-2 rounded-lg">
                Pedido
              </Link>
            </div>
          </div>
        </MagicMotion>
      ) : (
        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 24 24"
          >
            <path
              fill="#e11d48"
              d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
            />
          </svg>
          <h1 className="text-2xl font-bold">Tu carrito esta vacio</h1>
          <p className="text-gray-500">
            Parece que aún no has añadido nada a tu carrito
          </p>
        </div>
      )}
    </section>
  );
}
