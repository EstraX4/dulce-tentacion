"use client";

import React from "react";
import Product from "../Product";

const products = [
  {
    name: "Producto 1",
    price: 100,
    img: "/images/products/product1.png",
  },
  {
    name: "Producto 2",
    price: 100,
    img: "/images/products/product1.png",
  },
  {
    name: "Producto 3",
    price: 100,
    img: "/images/products/product1.png",
  },
  {
    name: "Producto 4",
    price: 100,
    img: "/images/products/product1.png",
  },
];
export default function Popular() {
  return (
    <section className="w-full px-10 md:px-40 py-10 md:py-20 flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-medium">Popular</h2>
        <p className="text-base">Nuestros productos mas vendidos</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-8">
        {products.map((product) => (
          <Product key={product.name} item={product} />
        ))}
      </div>
    </section>
  );
}
