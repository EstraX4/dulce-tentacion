'use client'

import { AuthProvider } from "@/context/AuthContext";
import React from "react";
import { Toaster } from "sonner";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Providers({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <>
        <AuthProvider>
          <Toaster richColors />
          {children}
        </AuthProvider>
    </>
  );
}
