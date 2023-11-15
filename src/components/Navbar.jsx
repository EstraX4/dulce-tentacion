"use client";

import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import User from "./User";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const links = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Catálogo",
      href: "/catalogue",
    },
    {
      name: "Contactanos",
      href: "/contact",
    },
  ];

  const { cart } = useCart();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white sticky w-full z-20 top-0 start-0">
        <div className=" flex flex-wrap items-center justify-between mx-auto px-10 md:px-40 py-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo.png"
              className="h-16 rounded-full"
              alt="Logo"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex justify-center items-center gap-4 text-gray-500 ">
              <User />
              <Link href="/cart" className="relative">
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-white text-xs px-1">
                    {cart.length}
                  </span>
                )}
                <div className="text-gray-500 hover:text-black transition duration-300 ease-in-out">
                  <IconShoppingCart />
                </div>
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-expanded="false"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              !navbarOpen && "hidden"
            }
            transition-all duration-300 ease-in-out
            `}
          >
            <ul className="flex flex-col gap-6 p-4 md:p-0 mt-4 font-medium border rounded-lg bg-white md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-500  rounded md:bg-transparent hover:text-black"
                    aria-current="page"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
