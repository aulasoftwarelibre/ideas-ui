import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

interface Props {
  label: string;
  path: string;
  router: NextRouter;
}

const DesktopLink: React.FunctionComponent<Props> = ({
  label,
  path,
  router,
}) => {
  const isActive: boolean = router.pathname === path;

  if (isActive) {
    return (
      <span className="ml-4 px-3 py-2 text-sm font-medium leading-5 text-ideaOrange border-b-2 border-ideaOrange">
        {label}
      </span>
    );
  }

  return (
    <Link href={path}>
      <a className="ml-4 px-3 py-2 text-sm font-medium leading-5 text-ideaOrange border-b-2 border-transparent hover:border-ideaOrange">
        {label}
      </a>
    </Link>
  );
};

export default withRouter(DesktopLink);
