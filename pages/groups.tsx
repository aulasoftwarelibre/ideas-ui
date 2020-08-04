import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import { NextPage } from "next";
import { getSession } from "next-auth/client";
import { Session } from "../model/user/auth";

interface Props {
  session: Session;
}

const Groups: NextPage<Props> = ({ session }) => {
  return (
    <div>
      <Head>
        <title>Groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar session={session}></NavBar>
      <main>Groups</main>
    </div>
  );
};

Groups.getInitialProps = async (context) => {
  return {
    session: await getSession(context),
  };
};

export default Groups;
