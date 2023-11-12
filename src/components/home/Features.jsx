import { IconCircleCheck } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function Features() {
  const features = [
    "Productos de calidad",
    "El mejor Servicio de transporte",
    "Creados para darte la mejor satisfacciòn",
    "Altamente duraderos",
  ];

  return (
    <section className="w-full bg-[#F7F8FA] p-10 md:p-40 flex flex-col-reverse gap-10 md:gap-0 md:flex-row">
      <div className="w-full flex flex-col gap-5 justify-center">
        <h2 className="font-medium text-3xl md:text-5xl 2xl:text-8xl">Lo mejor de la ciudad</h2>
        <p className="text-red-500 text-lg md:text-xl 2xl:text-2xl">Hechos para ti y su disfrute</p>
        <ul className="flex flex-col gap-2 mt-5">
          {features.map((feature) => (
            <li key={feature}>
              <h3 className="flex items-center text-lg md:text-lg 2xl:text-xl gap-2">
                <IconCircleCheck />
                {feature}
              </h3>
            </li>
          ))}
        </ul>
        <Link
          href={"/products"}
          className="bg-red-500 w-fit px-10 py-2 text-white mt-10 text-lg md:text-xl"
        >
          Ver productos
        </Link>
      </div>
      <div className="w-full flex justify-center items-center">
        <img
          src="/images/feature.png"
          alt="feature"
          className="w-full object-cover"
          draggable={false}
        />
      </div>
    </section>
  );
}
