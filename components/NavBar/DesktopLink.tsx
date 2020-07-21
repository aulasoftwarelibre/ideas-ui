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

  if (isActive) {
    return (
      <span className="ml-4 px-3 py-2 text-sm font-medium leading-5 text-ideaOrange border-b-2 border-ideaOrange">
        {title}
      </span>
    );
  }

  return (
    <Link href={path}>
      <a className="ml-4 px-3 py-2 text-sm font-medium leading-5 text-ideaOrange border-b-2 border-white hover:border-ideaOrange">
        {title}
      </a>
    </Link>
  );
};

export default DesktopLink;
