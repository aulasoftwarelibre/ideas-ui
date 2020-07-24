import '../styles/index.css';

import { Provider } from 'next-auth/client';

import { NavBarProvider } from '../state/navbar/NavBarProvider';

function MyApp({ Component, pageProps }) {
  return (
    <Provider options={{ site: process.env.SITE }} session={pageProps.session}>
      <NavBarProvider>
        <Component {...pageProps} />
      </NavBarProvider>
    </Provider>
  );
}

export default MyApp;
