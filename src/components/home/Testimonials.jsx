import { IconStar, IconStarFilled } from "@tabler/icons-react";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      stars: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quia.",
      name: "Gicela Dominguez",
      img: "/images/testimonials/testimonial1.png",
    },
    {
      stars: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quia.",
      name: "Juan Estrada",
      img: "/images/testimonials/testimonial1.png",
    },
    {
      stars: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quia.",
      name: "Jefry Velez",
      img: "/images/testimonials/testimonial1.png",
    },
  ];
  return (
    <section className="w-full px-10 md:px-40 py-10 md:py-20 flex flex-col justify-center items-center gap-10 bg-red-50">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-medium">Testimonios</h2>
        <p className="text-base">Algunos de nuestros cliente satisfechos</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} item={testimonial} />
        ))}
      </div>
    </section>
  );
}

const Testimonial = ({ item }) => {
  return (
    <div className="w-full bg-white aspect-square shadow-md flex flex-col justify-center items-center p-4 md:p-8">
      <img src={item.img} alt="" className="w-40 rounded-full" draggable="false" />
      <div className="flex gap-2 text-red-500">
        {[...Array(item.stars)].map((star, index) => (
          <IconStarFilled key={`i${index}`} />
        ))}
        {[...Array(5 - item.stars)].map((star, index) => (
          <IconStar stroke="gray" key={`i${index}`} />
        ))}
      </div>
      <p className="mt-5 md:text-2xl text-center">{`"${item.comment}"`}</p>
      <p className="mt-5 md:text-lg text-center text-black/50">{item.name}</p>
    </div>
  );
};
