import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  title: string;
  path: string;
}

export const MobileLink: React.FunctionComponent<Props> = ({ title, path }) => {
  const router = useRouter();

  const isActive: boolean = router.pathname == path;
  const activeClass = "text-base text-orange leading-6 font-medium";
  const linkClass = "text-base leading-6 font-medium text-gray-900";

  if (isActive) {
    return (
      <span className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
        <div className={activeClass}>{title}</div>
      </span>
    );
  }

  return (
    <Link href={path}>
      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
        <div className={linkClass}>{title}</div>
      </a>
    </Link>
  );
};

export default MobileLink;
