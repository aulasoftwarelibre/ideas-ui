import React from "react";
import GradientButton from "../GradientButton";

export const DesktopMenu: React.FunctionComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <a href="#" className="flex">
            <img
              className="h-8 w-auto sm:h-10"
              src="/logotipo-completo-degradado.svg"
              alt="Workflow"
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-10">

          <a
            href="#"
            className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Organizaciones
          </a>
          <a
            href="#"
            className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Ayuda
          </a>
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <GradientButton>
            Iniciar sesión
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
