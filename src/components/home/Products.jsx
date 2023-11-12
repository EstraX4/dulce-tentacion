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
  {
    name: "Producto 5",
    price: 100,
    img: "/images/products/product1.png",
  },
  {
    name: "Producto 6",
    price: 100,
    img: "/images/products/product1.png",
  },
  {
    name: "Producto 7",
    price: 100,
    img: "/images/products/product1.png",
  },
  {
    name: "Producto 8",
    price: 100,
    img: "/images/products/product1.png",
  },
];
export default function Products() {
  return (
    <section className="w-full px-10 md:px-40 py-10 md:py-20 flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-medium">Productos</h2>
        <p className="text-base">
          Pídelo para ti o para tus seres queridos
        </p>
      </div>
      <div className="md:grid grid-cols-1 md:grid-cols-4 w-full gap-8 hidden">
        {products.map((product) => (
          <Product key={product.name} item={product} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-8 md:hidden">
        {products.slice(0, 4).map((product) => (
          <Product key={product.name} item={product} />
        ))}
      </div>
    </section>
  );
}
