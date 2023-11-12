import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Popular from "@/components/home/Popular";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <Popular />
    </>
  );
}
