import React from "react";
import { CardsContainer, CardsItem, Plans, PlansContainer } from "../styles";

const cards_arr = [
  {
    text: "TV Shows",
    subtext: "Past & Current Seasons",
    img: "/img-1.jpg",
  },
  {
    text: "Movie",
    subtext: "New & Classic",
    img: "/img-2.jpg",
  },
  {
    text: "Hulu Originals",
    subtext: "Groundbreaking",
    img: "/img-3.jpg",
  },
  {
    text: "Premium",
    subtext: "Addon",
    img: "/img-4.jpg",
  },
];

const Cards = () => {
  return (
    <CardsContainer>
      {cards_arr.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          text={card.text}
          subtext={card.subtext}
        />
      ))}
    </CardsContainer>
  );
};

const PlansSection = () => {
  return (
    <Plans>
      <PlansContainer>
        <header>
          <h4>INCLUDED IN ALL PLANS</h4>
          <h1>All The TV You Love</h1>
          <p>
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </header>
        <br />
        <br />
        <Cards />
      </PlansContainer>
    </Plans>
  );
};
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Card = ({ img, text, subtext }) => {
  return (
    <CardsItem>
      <div className="overlay"></div>
      <div className="float">
        <h2>{subtext}</h2>
        <h1>{text}</h1>
      </div>
      <img src={img} alt="" />
    </CardsItem>
  );
};

export default PlansSection;
