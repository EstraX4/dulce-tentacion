"use client";

import { AuthProvider } from "@/context/AuthContext";
import React from "react";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";
import { Next13ProgressBar } from 'next13-progressbar';

export default function Providers({ children }) {
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
