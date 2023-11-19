import { formatPrice } from "@/utils/functions";
import Link from "next/link";
import React from "react";

export default function Product({ item }) {
  return (
    <Link
      href={`/product/${item.id}`}
      className="w-full shadow-md flex flex-col aspect-square"
      scroll={true}
    >
      <img
        src={item.image}
        alt=""
        className="w-full h-[70%] object-cover"
        draggable="false"
        loading="lazy"
      />
      <div className="flex flex-col h-[30%] justify-center p-4">
        <h3 className="font-medium text-left text-lg">{item.name}</h3>
        <p className="text-red-500 text-xl font-medium text-right">
          {formatPrice(item.price)} COP
        </p>
      </div>
    </Link>
  );
}
