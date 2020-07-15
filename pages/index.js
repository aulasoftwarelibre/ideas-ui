import Head from "next/head";

import { NavBar } from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
