import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export const Layout: React.FC<{ children?: JSX.Element }> = (props) => {
  return (
    <>
      <main>
        <Navbar />
        <>{props.children}</>
        <Footer />
      </main>
    </>
  );
};
