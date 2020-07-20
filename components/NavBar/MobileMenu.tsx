import React from "react";
import GradientButton from "../GradientButton";
import classnames from "classnames";
import MobileLink from "./MobileLink";
import Link from "next/link";

interface Props {
  hideMenu: boolean;
  clickHandler: any;
}

export const MobileMenu: React.FunctionComponent<Props> = ({
  hideMenu,
  clickHandler,
}) => {
  let state = classnames(
    "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
    { hidden: hideMenu }
  );

  React.useEffect(() => {
    state = classnames(
      "absolute top-0 inset-x-0 p-2 transition transform origin-top-right"
    );
    console.debug(state);
  }, [hideMenu, state]);

  return (
    <div className={state}>
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="flex items-center justify-between">
              <Link href="/">
                <a>
                  <img
                    className="h-8 w-auto sm:h-16"
                    src="/logotipo-completo-degradado.svg"
                    alt="Workflow"
                  />
                </a>
              </Link>
              <div className="-mr-2">
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav className="grid row-gap-8">
                <MobileLink title="Inicio" path="/"></MobileLink>
                <MobileLink title="Grupos" path="/groups"></MobileLink>
                <MobileLink title="Ayuda" path="/help"></MobileLink>
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
