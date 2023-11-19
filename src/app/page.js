import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Popular from "@/components/home/Popular";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import { db } from "@/firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

export default async function Home() {
  const getProduct = async () => {
    const q = query(collection(db, "products"), where("stock", ">", 0 ));

    const querySnapshot = await getDocs(q);
    const _products = [];
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        image: doc.data().image,
        description: doc.data().description,
        stock: doc.data().stock,
      };
      _products.push(data);
    });

    return _products;
  };

  const products = await getProduct();

  return (
    <>
      <Hero />
      <Products products={products} />
      <Features />
      <Testimonials />
      <Popular products={products} />
    </>
  );
}
