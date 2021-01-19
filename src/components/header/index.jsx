/**
 * @file components/header/index.jsx
 * @brief Presents the header at the top of the viewport.
 */

// Imports
import React, { useState } from "react";
import Logo from "../svg/logo";
import IconHamburger from "../svg/icon-hamburger";
import IconClose from "../svg/icon-close";
import "./index.scss";

// Component
const Header = ({ solid }) => {
  const [shown, setShown] = useState(false);

  return (
    <header
      className={`header ${solid && "header--solid"} ${
        shown && "header--shown"
      }`}
    >
      <div className="container header__container">
        <Logo className="header__logo" />
        <button
          className="header__toggle"
          aria-label={shown === false ? "Reveal Menu" : "Close Menu"}
          title={shown === false ? "Reveal Menu" : "Close Menu"}
          onClick={() => setShown(!shown)}
        >
          {shown === false ? (
            <IconHamburger className="header__toggle-icon" />
          ) : (
            <IconClose className="header__toggle-icon" />
          )}
        </button>
        <nav className="header__nav">
          <a href="#" className="header__nav-link">
            About
          </a>
          <a href="#" className="header__nav-link">
            Careers
          </a>
          <a href="#" className="header__nav-link">
            Events
          </a>
          <a href="#" className="header__nav-link">
            Products
          </a>
          <a href="#" className="header__nav-link">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
};

// Export
export default Header;
