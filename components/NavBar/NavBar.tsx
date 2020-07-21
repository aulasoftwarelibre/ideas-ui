import React from "react";
import DesktopMenu from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const NavBar: React.FunctionComponent = () => {
  const [hideMenu, setMenu] = React.useState(true);
  const [hideProfile, setProfile] = React.useState(true);

  return (
    <nav className="bg-white">
      <DesktopMenu
        hideMenu={hideMenu}
        hideProfile={hideProfile}
        closeMenuHandler={() => setMenu(!hideMenu)}
        closeProfileHandler={() => setProfile(!hideProfile)}
      ></DesktopMenu>
      <MobileMenu
        hideMenu={hideMenu}
        closeMenuHandler={() => setMenu(!hideMenu)}
      ></MobileMenu>
    </nav>
  );
};

export default NavBar;
