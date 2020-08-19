import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

export interface Props {
  label: string;
  path: string;
  router: NextRouter;
}

const MobileLink: React.FunctionComponent<Props> = ({
  label,
  path,
  router,
}) => {
  const isActive: boolean = router.pathname == path;

  if (isActive) {
    return (
      <span
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white bg-primary focus:outline-none focus:text-white focus:bg-primary transition duration-150 ease-in-out"
        data-testid="active-mobile-link"
      >
        {label}
      </span>
    );
  }

  return (
    <Link href={path}>
      <a
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-white hover:bg-primary focus:outline-none focus:text-white focus:bg-primary transition duration-150 ease-in-out"
        data-testid="mobile-link"
      >
        {label}
      </a>
    </Link>
  );
};

export default withRouter(MobileLink);
