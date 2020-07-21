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

  if (isActive) {
    return (
      <span className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white bg-ideaOrange focus:outline-none focus:text-white focus:bg-ideaOrange transition duration-150 ease-in-out">
        {title}
      </span>
    );
  }

  return (
    <Link href={path}>
      <a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-ideaOrange hover:text-white hover:bg-ideaOrange focus:outline-none focus:text-white focus:bg-ideaOrange transition duration-150 ease-in-out">
        {title}
      </a>
    </Link>
  );
};

export default MobileLink;
