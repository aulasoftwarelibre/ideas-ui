import React from "react";
import classnames from "classnames";

import { Session } from "../../model/user/auth";
import UserLink from "./UserLink";

interface Props {
  session: Session;
  hideMenu: boolean;
  onClick: () => void;
}

export const UserMenu: React.FunctionComponent<Props> = ({
  session,
  hideMenu,
  onClick,
}) => {
  return (
    <>
      {session && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                  src={session.user.image}
                  alt={session.user.name}
                />
              </button>
            </div>
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
              <div
                className={classnames("py-1 rounded-md bg-white shadow-xs", {
                  hidden: hideMenu,
                })}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <UserLink title="Editar perfil" path="/user/profile" />
                <UserLink title="Actividades" path="/user/activities" />
                <UserLink title="Salir" path="/api/auth/signout" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
