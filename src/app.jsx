/**
 * @file app.jsx
 * @brief The application's top-level component.
 */

// Imports
import React, { useState } from "react";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import CreationsSection from "./components/creations-section";
import Footer from "./components/footer";
import "./app.scss";

// Component
const App = () => {
  const [headerBackgroundSolid, setHeaderBackgroundSolid] = useState(false);
  const onIntersectChange = (intersecting) =>
    setHeaderBackgroundSolid(!intersecting);

  return (
    <main className="main">
      <Header solid={headerBackgroundSolid} />
      <HeroSection onIntersectChange={onIntersectChange} />
      <AboutSection />
      <CreationsSection />
      <Footer />
    </main>
  );
};

// Export
export default App;
