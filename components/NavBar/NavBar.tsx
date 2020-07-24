import React from "react";
import DesktopMenu from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { useSession } from "next-auth/client";

import { Session } from "../../model/user/auth";
import GradientButton from "../GradientButton";
import UserMenu from "./UserMenu";
import Link from "next/link";

interface Props {
  session: Session;
}

export const NavBar: React.FunctionComponent<Props> = ({ session }) => {
  const [hideMenu, setMenu] = React.useState(true);
  const [hideProfile, setProfile] = React.useState(true);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <DesktopMenu
            hideMenu={hideMenu}
            closeMenuHandler={() => setMenu(!hideMenu)}
          ></DesktopMenu>
          {!session && (
            <Link href="/api/auth/signin">
              <GradientButton>Iniciar sesión</GradientButton>
            </Link>
          )}
          {session && (
            <>
              <UserMenu
                session={session}
                hideMenu={hideProfile}
                onClick={() => setProfile(!hideProfile)}
              />
              <GradientButton>Añadir idea</GradientButton>
            </>
          )}
        </div>
      </div>
      <MobileMenu
        hideMenu={hideMenu}
        closeMenuHandler={() => setMenu(!hideMenu)}
      ></MobileMenu>
    </nav>
  );
};

export default NavBar;
