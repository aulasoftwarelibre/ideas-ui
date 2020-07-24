import Head from "next/head";
import { NextPage } from "next";

import { NavBar } from "../components/NavBar/NavBar";
import { getSession } from "next-auth/client";
import { Session } from "../model/user/auth";

interface Props {
  session: Session;
}

const Home: NextPage<Props> = ({ session }) => {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar session={session}></NavBar>
      <main></main>
    </div>
  );
};

Home.getInitialProps = async (context) => {
  return {
    session: await getSession(context),
  };
};

export default Home;
