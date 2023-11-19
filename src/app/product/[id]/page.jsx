import React from "react";
import Product from "@/pages/Product";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function page({ params }) {
  const getProduct = async () => {
    const docRef = doc(db, "products", params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        name: docSnap.data().name,
        price: docSnap.data().price,
        image: docSnap.data().image,
        description: docSnap.data().description,
        stock: docSnap.data().stock,
      };
    } else {
      return null;
    }
  };

  const product = await getProduct();
  return <Product item={product} />;
}
