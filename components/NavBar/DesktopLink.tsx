import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  title: string;
  path: string;
}

export const DesktopLink: React.FunctionComponent<Props> = ({
  title,
  path,
}) => {
  const router = useRouter();

  const isActive: boolean = router.pathname == path;
  const activeClass = "border-solid border-b-2 border-orange";
  const linkClass =
    "text-base text-orange leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150";

  if (isActive) {
    return <span className={`${activeClass} ${linkClass}`}>{title}</span>;
  }

  return (
    <Link href={path}>
      <a className={`${linkClass}`}>{title}</a>
    </Link>
  );
};

export default DesktopLink;
