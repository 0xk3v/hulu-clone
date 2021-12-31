import React from "react";
import { HeroSection } from "../components";
import PlansSection from "../components/PlansSection";

const Home = () => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
      `}</style>
      <HeroSection />
      <PlansSection />
    </>
  );
};

export default Home;
