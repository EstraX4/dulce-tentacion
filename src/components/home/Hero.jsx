import Image from "next/image";
import React from "react";
import HotEmoji from "../emojis/HotEmoji";

export default function Hero() {
  return (
    <section className="w-full bg-red-500 h-[calc(90vh-5rem)] relative flex justify-center items-center">
      <Image
        src="/images/bg-image.png"
        alt="hero"
        width={1440}
        height={720}
        draggable={false}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        priority
      />
      <div className="bg-white/70 flex flex-col gap-10 justify-center items-center px-8 md:px-40 py-8 md:py-20 relative z-[1] backdrop-blur-sm">
        <HotEmoji width={120} height={120} />
        <div className="flex justify-center items-center flex-col">
          <p className="font-bold uppercase text-xl md:text-5xl">
            La mejor experiencia
          </p>
          <p className="text-xs md:text-base">
            Todos los productos hechos con la mejor calidad
          </p>
        </div>
        <button className="bg-red-500 text-white px-10 py-2 ">
          Ver productos
        </button>
      </div>
    </section>
  );
}
