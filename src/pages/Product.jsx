import React from "react";
import { IconShoppingCart } from "@tabler/icons-react";

export default function Product({ item }) {
  return (
    <main className="min-h-0">
    <section className="w-full px-10 md:px-40 py-10 md:py-48 flex flex-col justify-center items-center gap-10 min-h-0 ">
      <div className="columns-1 flex flex-wrap sm:flex-nowrap sm:gap-24	">
        <div className="columns-1 pb-5 sm:pb-0 sm:min-h-978px sm:w-6/12">
          <img
            src={item.img}
            alt=""
            className="w-full h-[70%] object-initial"
            draggable="false"
          />
          <h2 className="text-1xl text-center md:text-2xl font-medium mt-4">
            Todo hecho por expertos, Dulce Tentación está hecho para tus
            momentos de placer
          </h2>
          <h2 className="text-1xl sm:text-5xl text-red-500 text-center md:text-2xl font-medium mt-4">
            DOMICILIO GRATIS
          </h2>
        </div>
        <div className="columns-1 min-h-978px sm:w-6/12">
          <h2 className="text-2xl md:text-5xl font-medium pb-4 sm:pb-4">{item.name} {item.id}</h2>
          <h1 className="text-red-500 text-xl text-4xl text-left pb-4 sm:pb-6">
          {item.price} COP
        </h1>
        <p className="text-gray-700 text-xl font-medium text-left pb-5 sm:pb-7">
          {item.description}
        </p>
        <button className="justify-center bg-red-500 hover:bg-red-600 text-white px-10 py-4 flex gap-2 w-full rounded-lg">
        <IconShoppingCart /> + Añadir
        </button>
        </div>
      </div>
    </section></main>
  );
}
