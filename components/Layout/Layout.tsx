import { useSession } from 'next-auth/client';
import React from 'react';

import { menuLinks } from '../../config/links';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export const Layout: React.FunctionComponent = ({ children }) => {
  const [session] = useSession();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar session={session} />
      <main className="flex flex-col flex-grow overflow-hidden">
        {children}
      </main>
      <Footer links={menuLinks} />
    </div>
  );
};

export default Layout;
