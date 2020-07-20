import React from "react";
import GradientButton from "../GradientButton";
import Link from "next/link";
import DesktopLink from "./DesktopLink";

interface Props {
  clickHandler: any;
}

export const DesktopMenu: React.FunctionComponent<Props> = ({
  clickHandler,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <Link href="/">
            <a className="flex">
              <img
                className="h-8 w-auto sm:h-16"
                src="/logotipo-completo-degradado.svg"
                alt="Workflow"
              />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            onClick={clickHandler}
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
          <DesktopLink title="Inicio" path="/"></DesktopLink>
          <DesktopLink title="Grupos" path="/groups"></DesktopLink>
          <DesktopLink title="Ayuda" path="/help"></DesktopLink>
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <GradientButton>Iniciar sesión</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
