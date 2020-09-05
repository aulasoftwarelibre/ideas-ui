import '../styles/index.css';

import { Provider } from 'next-auth/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ReactElement } from 'react';
import Moment from 'react-moment';

import Layout from '../components/Layout/Layout';
import { NavBarProvider } from '../state/navbar/NavBarProvider';

Moment.globalLocale = 'es';
Moment.globalFormat = 'llll';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider session={pageProps.session}>
      <NavBarProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NavBarProvider>
    </Provider>
  );
}

export default MyApp;
