'use client'

import { useAuth } from "@/context/AuthContext";
import { LOGIN_PATH } from "@/utils/constants";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import HotEmoji from "./emojis/HotEmoji";
import SmirkingFace from "./emojis/SmirkingFace";

export default function User() {
  const links = [
    {
      name: "Gana dinero",
      href: "/",
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, logout } = useAuth();

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleBlur = (e) => {
    // Detener la propagación del evento si se hace clic en los elementos del menú
    if (e.relatedTarget && e.relatedTarget.closest(".user-menu")) {
      return;
    }

    setDropdownOpen(false);
  };

  return (
    <>
      {user ? (
        <div className="relative user-menu" onBlur={handleBlur}>
          <button
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="flex text-sm bg-gray-400 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="sr-only">Open user menu</span>
            {/* <img
              className="w-8 h-8 rounded-full"
              src="/images/testimonials/testimonial1.png"
              alt="user photo"
            /> */}
            <div className="w-8 h-8 rounded-full flex justify-center items-center">
              <SmirkingFace />
            </div>
          </button>

          <div
            id="dropdownAvatar"
            className={`shadow-xl absolute z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 origin-top-right -translate-x-[80%] translate-y-2 ${
              dropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="px-4 py-3 text-sm text-gray-900 ">
              <div>{user.name}</div>
              <div className="font-medium truncate">{user.email}</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 "
              aria-labelledby="dropdownUserAvatarButton"
            >
              {links.map((link) => (
                <li key={link.name} onClick={() => setDropdownOpen(false)}>
                  <Link href={link.href}>
                    <p className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                      {link.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-2">
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  logout();
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Link href={LOGIN_PATH}>
            <IconUser />
          </Link>
        </div>
      )}
    </>
  );
}
