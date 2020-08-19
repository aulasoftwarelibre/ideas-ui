import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

export interface Props {
  path: string;
  label: string;
  router: NextRouter;
}

export const ProfileLink: React.FunctionComponent<Props> = ({
  path,
  label,
  router,
}) => {
  const isActive = router.pathname === path;

  if (isActive) {
    return (
      <span
        className="block px-4 py-2 text-sm leading-5 font-black text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
        data-testid="active-profile-link"
      >
        {label}
      </span>
    );
  }

  return (
    <Link href={path}>
      <a
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
        data-testid="profile-link"
      >
        {label}
      </a>
    </Link>
  );
};

export default withRouter(ProfileLink);
