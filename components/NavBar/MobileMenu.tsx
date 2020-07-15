import React from "react";
import GradientButton from "../GradientButton";

export const MobileMenu: React.FunctionComponent = () => {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/logotipo-completo-degradado.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav className="grid row-gap-8">
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="text-base leading-6 font-medium text-gray-900">
                    Inicio
                  </div>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="text-base leading-6 font-medium text-gray-900">
                    Organizaciones
                  </div>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="text-base leading-6 font-medium text-gray-900">
                    Ayuda
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="space-y-6">
              <GradientButton>Iniciar sesión</GradientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
