import React from "react";
import DesktopMenu from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const NavBar: React.FunctionComponent = () => {
  return (
    <div className="relative bg-white">
      <DesktopMenu></DesktopMenu>
      <MobileMenu></MobileMenu>
    </div>
  );
};

export default NavBar;
