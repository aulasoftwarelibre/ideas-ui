import React from "react";
import GradientButton from "../GradientButton";
import classnames from "classnames";
import MobileLink from "./MobileLink";
import Link from "next/link";

interface Props {
  hideMenu: boolean;
  closeMenuHandler: any;
}

export const MobileMenu: React.FunctionComponent<Props> = ({
  hideMenu,
  closeMenuHandler: clickHandler,
}) => {
  let state = classnames(
    "sm:hidden",
    { hidden: hideMenu },
    { block: !hideMenu }
  );

  return (
    <div className={state}>
      <div className="px-2 pt-2 pb-3 bg-white">
        <MobileLink title="Inicio" path="/"></MobileLink>
        <MobileLink title="Organizaciones" path="/groups"></MobileLink>
        <MobileLink title="Ayuda" path="/help"></MobileLink>
      </div>
    </div>
  );
};

export default MobileMenu;
