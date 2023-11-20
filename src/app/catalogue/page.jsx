"use client";

import React from "react";
import { db } from "@/firebase";
import { collection, query, getDocs, where } from "firebase/firestore";
import Product from "@/components/Product";

export default function page() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getProduct = async () => {
    const q = query(collection(db, "products"), where("stock", ">", 0));

    const querySnapshot = await getDocs(q);
    const _products = [];
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        image: doc.data().image,
      };
      _products.push(data);
    });

    return _products;
  };

  React.useEffect(() => {
    getProduct().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="px-40 py-10">
      <h1 className="font-bold mb-5 sm:text-3xl">Catálogo</h1>
      <div className="grid grid-cols-4 gap-5">
        {loading ? (
          <p>Espera...</p>
        ) : products.length > 0 ? (
          products.map((product) => <Product key={product.id} item={product} />)
        ) : (
          <p>No hay productos</p>
        )}
      </div>
    </div>
  );
}
