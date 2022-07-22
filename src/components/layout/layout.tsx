import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export const Layout: React.FC<{ children?: JSX.Element }> = (props) => {
  const meta = {
    title: "Nicolas Southern - Design, Develop, Distribute",
    description: `Software Engineer, Systems Engineer, Project & Operations Manager`,
    type: "website",
  };
  return (
    <>
      <main className="">
        <Navbar />
        <>{props.children}</>
        <Footer />
      </main>
    </>
  );
};
