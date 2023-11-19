import React from "react";

export default function Footer() {
  const columns = [
    {
      title: "Descubre",
      links: [
        {
          name: "Inicio",
          url: "/",
        },
        {
          name: "Nosotros",
          url: "/",
        },
        {
          name: "Contacto",
          url: "/",
        },
      ],
    },
    {
      title: "Sobre Nosotros",
      links: [
        {
          name: "Nuestra Historia",
          url: "/",
        },
        {
          name: "Nuestros Valores",
          url: "/",
        },
        {
          name: "Nuestro Equipo",
          url: "/",
        },
      ],
    },
    {
      title: "Información",
      links: [
        {
          name: "Política de Privacidad",
          url: "/",
        },
        {
          name: "Términos y Condiciones",
          url: "/",
        },
        {
          name: "Política de Cookies",
          url: "/",
        },
      ],
    },
  ];
  return (
    <footer className="w-full bg-[#272727] flex flex-col ">
      <div className="w-full p-10 md:px-40 md:py-20 text-white ">
        <div className="w-full border-t border-white justify-between items-center flex flex-col md:flex-row gap-10">
          <div className="w-full flex flex-col">
            <img src="/images/logo2.svg" alt="" className="w-32" />
            <p className="w-full md:w-1/2">
              Tu satisfacción es nuestro compromiso
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-full justify-center items-center gap-4">
            {columns.map((column) => (
              <div key={column.title} className="w-full md:w-1/3">
                <p className="text-xl font-bold text-red-500">{column.title}</p>
                <ul className="mt-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center bg-[#E5E5E5] px-10 md:px-40 py-5 text-[#5E6E89]">
        <p className="text-center">
          ©Dulce Tentación, Todos los derechos reservados.
        </p>
        <p className="text-center">Diseñado con ❤️ por UNIAJC</p>
      </div>
    </footer>
  );
}
