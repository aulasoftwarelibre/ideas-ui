import React from "react";
import classnames from "classnames";
import GradientButton from "../GradientButton";
import Link from "next/link";
import DesktopLink from "./DesktopLink";

interface Props {
  hideMenu: boolean;
  hideProfile: boolean;
  closeMenuHandler: any;
  closeProfileHandler: any;
}

export const DesktopMenu: React.FunctionComponent<Props> = ({
  hideMenu,
  hideProfile,
  closeMenuHandler,
  closeProfileHandler,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-ideaOrange hover:text-white hover:bg-ideaOrange focus:outline-none focus:bg-ideaOrange focus:text-white transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
            onClick={closeMenuHandler}
          >
            <svg
              className={classnames(
                "h-6 w-6",
                { block: hideMenu },
                { hidden: !hideMenu }
              )}
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
            <svg
              className={classnames(
                "h-6 w-6",
                { hidden: hideMenu },
                { block: !hideMenu }
              )}
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
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0">
            <img
              className="block lg:hidden h-8 w-auto"
              src="/ideas-isotipo-naranja.svg"
              alt="Workflow logo"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src="/ideas-imagotipo-naranja.svg"
              alt="Workflow logo"
            />
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex">
              <DesktopLink title="Inicio" path="/"></DesktopLink>
              <DesktopLink title="Organizaciones" path="/groups"></DesktopLink>
              <DesktopLink title="Ayuda" path="/help"></DesktopLink>
            </div>
          </div>
        </div>
    </>
  );
};

export default DesktopMenu;
