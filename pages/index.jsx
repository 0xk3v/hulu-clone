import React from "react";
import Head from "next/head";
import { BillboardSection, HeroSection, PlansSection } from "../components";

const Home = () => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
      `}</style>
      <Head>
        <title>Hulu Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroSection />
      <PlansSection />
      <BillboardSection />
    </>
  );
};

export default Home;
