import React from "react";
import { NavBar } from ".";
import { Button, Hero, HeroContainer } from "../styles";

const HeroSection = () => {
  return (
    <Hero>
      <NavBar />
      <HeroContainer>
        <h4>Bundle With Any Hulu Plan & Save</h4>
        <img src="/hulu-logos.png" alt="Logos" />
        <div className="text-wrapper">
          <h1>
            Get endless entertainment, live sports, and the shows and movies you
            love.
          </h1>
        </div>
        <Button btnStyle="primary" btnSize="lg">
          Get The Disney Bundle
        </Button>
        <div className="mute">
          <strong>What&apos;s included</strong>&nbsp; See <u>Bundle terms</u>
        </div>
        <a href="#" title="Sign Up">
          Sign up for Hulu Only
        </a>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;
