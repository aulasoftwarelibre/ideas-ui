import React from "react";
import DesktopMenu from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const NavBar: React.FunctionComponent = () => {
  const [hideMenu, setMenu] = React.useState(true);

  return (
    <div className="relative bg-white">
      <DesktopMenu clickHandler={() => setMenu(!hideMenu)}></DesktopMenu>
      <MobileMenu
        hideMenu={hideMenu}
        clickHandler={() => setMenu(!hideMenu)}
      ></MobileMenu>
    </div>
  );
};

export default NavBar;
