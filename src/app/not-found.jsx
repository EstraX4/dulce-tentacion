import HotEmoji from "@/components/emojis/HotEmoji";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="w-full h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
      <HotEmoji width={384} height={384} />

      <h2 className="text-3xl text-gray-500">Página no encontrada</h2>
      <p className="text-gray-400">
        La página que buscas no existe o no está disponible
      </p>

      <a href="/" className="text-gray-500 hover:text-gray-600 hover:underline mt-5">
        Volver al inicio
      </a>
    </div>
  );
}
