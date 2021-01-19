/**
 * @file components/creations-section/index.jsx
 * @brief The page's 'Our Creations' section.
 */

// Imports
import React, { useRef } from "react";
import CreationCard from "../creation-card";
import { useOnScreen } from "../../hooks/use-on-screen";
import { useMediaQuery } from "../../hooks/use-media-query";
import CardImages from "../../images/**/*.jpg";
import "./index.scss";

// An array of creation cards.
const creationCards = [
  { image: "image-deep-earth", text: "Deep Earth" },
  { image: "image-night-arcade", text: "Night Arcade" },
  { image: "image-soccer-team", text: "Soccer Team VR" },
  { image: "image-grid", text: "The Grid" },
  { image: "image-from-above", text: "From Up Above VR" },
  { image: "image-pocket-borealis", text: "Pocket Borealis" },
  { image: "image-curiosity", text: "The Curiosity" },
  { image: "image-fisheye", text: "Make It Fisheye" },
];

// Component
const CreationsSection = () => {
  const sectionRef = useRef();
  const sectionOnScreen = useOnScreen(sectionRef);
  const isOnDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <section
      className={`creations ${sectionOnScreen && "creations--animate"}`}
      ref={sectionRef}
    >
      <div className="container creations__container">
        <h2 className="heading creations__heading">Our Creations</h2>
        <button className="creations__button">See All</button>
        <div className="creations__creation-cards">
          {creationCards.map(({ image, text }, index) => (
            <CreationCard
              key={index}
              imageFile={CardImages[isOnDesktop ? "desktop" : "mobile"][image]}
              desktop={isOnDesktop}
              text={text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export
export default CreationsSection;
