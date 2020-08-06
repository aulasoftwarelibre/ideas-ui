import { useSession } from 'next-auth/client';
import React from 'react';

import { Session } from '../../model/user/auth';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

interface Props {
  session: Session;
}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const [session] = useSession();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar session={session} />
      <main className="pt-16 flex flex-col flex-grow overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
