"use client";

import { AuthProvider } from "@/context/AuthContext";
import React from "react";
import { Toaster } from "sonner";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { CartProvider } from "@/context/CartContext";

export default function Providers({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Toaster richColors />
          {children}
        </CartProvider>
      </AuthProvider>
    </>
  );
}
