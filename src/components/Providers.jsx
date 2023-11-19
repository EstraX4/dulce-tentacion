"use client";

import { AuthProvider } from "@/context/AuthContext";
import React from "react";
import { Toaster } from "sonner";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { CartProvider } from "@/context/CartContext";
import { Next13ProgressBar } from 'next13-progressbar';

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
          <Next13ProgressBar height="4px" color="red" options={{ showSpinner: false }} showOnShallow />
        </CartProvider>
      </AuthProvider>
    </>
  );
}
