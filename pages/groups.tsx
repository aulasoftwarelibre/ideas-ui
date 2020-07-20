import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";


export default function Home() {
  return (
    <div className="container mx-auto ">
      <Head>
        <title>Groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main>
      Groups
      </main>
    </div>
  );
}
