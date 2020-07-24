import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import { NextPage } from "next";
import { getSession } from "next-auth/client";
import { Session } from "../model/user/auth";

interface Props {
  session: Session;
}

const Help: NextPage<Props> = ({ session }) => {
  return (
    <div>
      <Head>
        <title>Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar session={session}></NavBar>
      <main>Help</main>
    </div>
  );
};

Help.getInitialProps = async (context) => {
  return {
    session: await getSession(context),
  };
};

export default Help;
