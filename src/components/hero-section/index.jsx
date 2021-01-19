/**
 * @file components/hero-section/index.jsx
 * @brief Presents the hero section at the top of the page.
 */

// Imports
import React, { useRef } from "react";
import { useOnScreen } from "../../hooks/use-on-screen";
import IconChevronDown from "../svg/chevron-down";
import "./index.scss";

// Component
const HeroSection = ({ onIntersectChange }) => {
  const headingRef = useRef();
  const sectionRef = useRef();
  const _ = useOnScreen(headingRef, onIntersectChange);
  const sectionOnScreen = useOnScreen(sectionRef);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__notch" ref={headingRef}></div>
      <div className="container hero__container">
        <h1
          className={`heading hero__heading ${
            sectionOnScreen && "hero__heading--animate"
          }`}
        >
          Immersive Experiences That Deliver
        </h1>
      </div>
      <IconChevronDown className="hero__icon" />
    </section>
  );
};

// Exports
export default HeroSection;
