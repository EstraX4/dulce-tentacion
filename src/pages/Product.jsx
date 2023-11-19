"use client";

import React, { useState } from "react";
import { IconShoppingCart, IconShoppingCartCopy } from "@tabler/icons-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/functions";

export default function Product({ item }) {
  // const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const add = () => {
    setAdded(true);
    // addToCart(item);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <main className="min-h-0">
      <section className="w-full px-10 md:px-40 py-10 md:py-48 flex flex-col justify-center items-center gap-10 min-h-0 ">
        <div className="columns-1 flex flex-wrap sm:flex-nowrap sm:gap-24	">
          <div className="columns-1 pb-5 sm:pb-0 sm:min-h-978px sm:w-6/12">
            {item && (
              <img
                src={item.image}
                alt=""
                className="w-full h-[70%] object-cover"
                draggable="false"
              />
            )}
            <h2 className="text-1xl text-center md:text-2xl font-medium mt-0 sm:mt-4">
              Todo hecho por expertos, Dulce Tentación está hecho para tus
              momentos de placer
            </h2>
            <h2 className="text-1xl sm:text-5xl text-red-500 text-center md:text-2xl font-medium mt-4 pb-12 sm:pb-0">
              DOMICILIO GRATIS
            </h2>
          </div>
          <div className="columns-1 min-h-978px sm:w-6/12">
            <h2 className="text-2xl md:text-5xl font-medium pb-4 sm:pb-4">
              {item && item.name}
            </h2>
            <p className="mb-5 opacity-50">{item && item.id}</p>
            <h1 className="text-red-500 text-xl md:text-4xl text-left pb-4 sm:pb-6">
              {item && formatPrice(item.price)} COP
            </h1>
            <p className="text-gray-700 text-xl font-medium text-left pb-5 sm:pb-7">
              {item && item.description}
            </p>
            <button
              onClick={add}
              disabled={added}
              className="justify-center bg-red-500 hover:bg-red-600 text-white px-10 py-4 flex gap-2 w-full rounded-lg disabled:bg-red-500/90 transition duration-300 ease-in-out"
            >
              {added ? (
                <>
                  <IconShoppingCartCopy /> Añadido
                </>
              ) : (
                <>
                  <IconShoppingCart /> Añadir
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
