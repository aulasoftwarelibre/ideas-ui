import Head from 'next/head';
import React from 'react';

import { Session } from '../../model/user/auth';
import NavBar from '../NavBar/NavBar';

interface Props {
  session: Session;
}

export const Layout: React.FunctionComponent<Props> = ({
  session,
  children,
}) => {
  return (
    <>
      <NavBar session={session} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
