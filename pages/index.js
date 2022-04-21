import Link from "next/link";
import Head from "next/head";
import Main from "../layout/main/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ole Jørgen</title>
      </Head>
      <Main>
        <h1>Ole Jørgen</h1>
          <p>Produktdesigner i <Link href={"https://www.detsombetyrnoe.no/"}>NAV IT</Link>. CV på <Link href={"https://no.linkedin.com/in/ole-jorgen-bakken"}>LinkedIn</Link>.</p>
      </Main>
    </>
  );
}
