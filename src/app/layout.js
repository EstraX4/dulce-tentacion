import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dulce Tentación | La mejor experiencia | Jugetería para adultos",
  description:
    "Tu satisfacción, nuestro compromiso: Bienvenidos a la tienda del placer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="min-h-[calc(100vh-5rem)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
