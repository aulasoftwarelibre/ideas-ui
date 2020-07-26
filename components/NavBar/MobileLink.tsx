import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

interface Props {
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
      <span className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white bg-ideaOrange focus:outline-none focus:text-white focus:bg-ideaOrange transition duration-150 ease-in-out">
        {label}
      </span>
    );
  }

  return (
    <Link href={path}>
      <a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-ideaOrange hover:text-white hover:bg-ideaOrange focus:outline-none focus:text-white focus:bg-ideaOrange transition duration-150 ease-in-out">
        {label}
      </a>
    </Link>
  );
};

export default withRouter(MobileLink);
