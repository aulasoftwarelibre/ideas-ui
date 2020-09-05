import classnames from 'classnames';
import Link from 'next/link';
import React from 'react';

import { Session } from '../../model/user/auth';
import useNavBar from '../../state/navbar/useNavBar';
import GradientButton from '../GradientButton';
import DesktopMenu from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import ProfileMenu from './ProfileMenu';

export interface Props {
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
    <nav className="bg-white" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary focus:outline-none focus:bg-primary focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={changeMenuVisibility}
            >
              <svg
                data-testid="close-menu"
                className={classnames(
                  'h-6 w-6',
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
                data-testid="open-menu"
                className={classnames(
                  'h-6 w-6',
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
            <DesktopMenu />
          </div>
          {!session && (
            <Link href="/api/auth/signin">
              <a>
                <GradientButton>Iniciar sesión</GradientButton>
              </a>
            </Link>
          )}
          {session && (
            <>
              <ProfileMenu
                session={session}
                hideMenu={hideProfile}
                onClick={() => changeProfileVisibility()}
              />
              <span className="hidden sm:block">
                <Link href="/idea/add" passHref>
                  <a>
                    <GradientButton>Añadir idea</GradientButton>
                  </a>
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
      <MobileMenu hideMenu={hideMenu}></MobileMenu>
    </nav>
  );
};

export default NavBar;
