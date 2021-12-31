import React from "react";
import Head from "next/head";
import { HeroSection, PlansSection } from "../components";

const Home = () => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
      `}</style>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <HeroSection />
      <PlansSection />
    </>
  );
};

export default Home;
