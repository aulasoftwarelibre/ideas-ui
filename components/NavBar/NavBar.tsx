import Link from 'next/link';
import React from 'react';

import { Session } from '../../model/user/auth';
import useNavBar from '../../state/navbar/useNavBar';
import GradientButton from '../GradientButton';
import DesktopMenu from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import UserMenu from './UserMenu';

interface Props {
  session: Session;
}

export const NavBar: React.FunctionComponent<Props> = ({ session }) => {
  const {
    hideMenu,
    hideProfile,
    changeProfileVisibility,
    changeMenuVisibility,
  } = useNavBar();

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <DesktopMenu
            hideMenu={hideMenu}
            closeMenuHandler={() => changeMenuVisibility()}
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
                onClick={() => changeProfileVisibility()}
              />
              <GradientButton>Añadir idea</GradientButton>
            </>
          )}
        </div>
      </div>
      <MobileMenu
        hideMenu={hideMenu}
        closeMenuHandler={() => changeMenuVisibility()}
      ></MobileMenu>
    </nav>
  );
};

export default NavBar;
