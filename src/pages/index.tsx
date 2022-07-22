import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/layout/hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicolas Southern</title>
        <meta
          name="description"
          content="I am a software engineer, programmer, and a project manager by trade. I do IT consulting and in the spare time I like to cook, fly, and explore."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center p-4">
        <Hero />
      </main>
    </>
  );
};

export default Home;
