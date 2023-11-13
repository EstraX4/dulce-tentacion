import React from "react";
import products from "../../../data.json";
import Product from "@/pages/Product";

export default function page({ params }) {
  const product = products.find((product) => product.id === params.id);
  return (
    <Product item={product}/>
  );
}
