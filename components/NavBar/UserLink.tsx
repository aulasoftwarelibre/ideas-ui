import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  title: string;
  path: string;
}

export const UserLink: React.FunctionComponent<Props> = ({ title, path }) => {
  const router = useRouter();

  const isActive: boolean = router.pathname == path;

  if (isActive) {
    return (
      <span
        className="block px-4 py-2 text-sm leading-5 font-black text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
      >
        {title}
      </span>
    );
  }

  return (
    <Link href={path}>
      <a
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
      >
        {title}
      </a>
    </Link>
  );
};

export default UserLink;
