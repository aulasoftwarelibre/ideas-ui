import '../styles/index.css';

import { getSession, Provider } from 'next-auth/client';
import App from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout/Layout';
import { NavBarProvider } from '../state/navbar/NavBarProvider';

function MyApp({ Component, session, pageProps }) {
  return (
    <Provider options={{ site: process.env.SITE }} session={pageProps.session}>
      <NavBarProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout session={pageProps.session}>
          <Component {...pageProps} />
        </Layout>
      </NavBarProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, session: await getSession(appContext) };
};

export default MyApp;
