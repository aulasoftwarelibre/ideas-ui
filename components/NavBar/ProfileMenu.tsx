import classnames from 'classnames';
import React from 'react';

import { profileLinks } from '../../config/links';
import { Session } from '../../model/user/auth';
import ProfileLink from './ProfileLink';

export interface Props {
  session: Session;
  hideMenu: boolean;
  onClick: () => void;
}

export const ProfileMenu: React.FunctionComponent<Props> = ({
  session,
  hideMenu,
  onClick,
}) => {
  return (
    <>
      {session && (
        <div
          className="absolute z-10 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          data-testid="profile-menu"
        >
          <div className="relative">
            <div>
              <button
                className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                id="user-menu"
                aria-label="User menu"
                aria-haspopup="true"
                onClick={onClick}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={session?.user?.image ?? '/avatar.svg'}
                  alt={session?.user?.name}
                />
              </button>
            </div>
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
              <div
                className={classnames('py-1 rounded-md bg-white shadow-xs', {
                  hidden: hideMenu,
                })}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                data-testid="profile-menu-box"
              >
                {profileLinks.map((link) => (
                  <ProfileLink
                    key={link.path}
                    path={link.path}
                    label={link.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
