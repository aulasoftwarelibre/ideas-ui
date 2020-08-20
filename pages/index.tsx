import { NextPage } from 'next';
import Head from 'next/head';

import Hero from '../components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inicio</title>
      </Head>
      <main>
        <Hero />
      </main>
      Inicio
    </div>
  );
};

export default Home;
