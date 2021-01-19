/**
 * @file components/creation-card/index.jsx
 * @brief A card showing a portfolio item in the 'Our Creations' section.
 */

// Imports
import React, { useRef } from "react";
import { useOnScreen } from "../../hooks/use-on-screen";
import "./index.scss";

// Component
const CreationCard = ({ text, imageFile, desktop }) => {
  const elementRef = useRef();
  const elementOnScreen = useOnScreen(elementRef);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          to ${
            desktop ? "bottom" : "left"
          }, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)
        ), url(${imageFile})`,
      }}
      className={`creation-card ${
        elementOnScreen && "creation-card--animate"
      } ${desktop && "creation-card--desktop"}`}
      ref={elementRef}
    >
      <h3 className="heading creation-card__heading">{text}</h3>
    </div>
  );
};

// Export
export default CreationCard;
