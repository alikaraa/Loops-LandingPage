/**
 * @file components/about-section/index.jsx
 * @brief The page's about section.
 */

// Imports
import React, { useRef } from "react";
import { useOnScreen } from "../../hooks/use-on-screen";
import "./index.scss";

// Component
const AboutSection = () => {
  const sectionRef = useRef();
  const sectionOnScreen = useOnScreen(sectionRef);

  return (
    <section className={`about ${sectionOnScreen && "about--animate"}`}>
      <div className="container about__container">
        <div className="about__image" ref={sectionRef}></div>
        <div className="about__caption">
          <h2 className="heading about__heading">
            The Leader in Interactive VR
          </h2>
          <p className="text about__text">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-wining creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

// Export
export default AboutSection;
