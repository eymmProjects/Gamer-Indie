import Head from "next/head";
import React from "react";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="" />
      </Head>
      <NavBar />
      <main>
        <h1>Hello blog</h1>
      </main>
    </>
  );
}

export default HomePage;
