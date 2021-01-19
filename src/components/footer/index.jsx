/**
 * @file components/footer/index.jsx
 * @brief Displays the footer at the end of the page.
 */

// Imports
import React from "react";
import Logo from "../svg/logo";
import IconFacebook from "../svg/icon-facebook";
import IconTwitter from "../svg/icon-twitter";
import IconPinterest from "../svg/icon-pinterest";
import IconInstagram from "../svg/icon-instagram";
import "./index.scss";

// Component
const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <Logo className="footer__logo" />
      <div className="footer__social-links">
        <a
          href="#"
          className="footer__social-link footer__social-link--facebook"
          aria-label="Facebook"
          title="Facebook"
        >
          <IconFacebook className="footer__social-icon" />
        </a>
        <a
          href="#"
          className="footer__social-link footer__social-link--twitter"
          aria-label="Twitter"
          title="Twitter"
        >
          <IconTwitter className="footer__social-icon" />
        </a>
        <a
          href="#"
          className="footer__social-link footer__social-link--pinterest"
          aria-label="Pinterest"
          title="Pinterest"
        >
          <IconPinterest className="footer__social-icon" />
        </a>
        <a
          href="#"
          className="footer__social-link footer__social-link--instagram"
          aria-label="Instagram"
          title="Instagram"
        >
          <IconInstagram className="footer__social-icon" />
        </a>
      </div>
      <nav className="footer__links">
        <a href="#" className="footer__link">
          About
        </a>
        <a href="#" className="footer__link">
          Careers
        </a>
        <a href="#" className="footer__link">
          Events
        </a>
        <a href="#" className="footer__link">
          Products
        </a>
        <a href="#" className="footer__link">
          Support
        </a>
      </nav>
      <p className="text footer__text">
        &copy; 2021 Loopstudios. All Rights Reserved.
        <br />
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="footer__fm-link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://dgdev1024.com"
          className="footer__fm-link"
          target="_blank"
        >
          Dennis Griffin
        </a>
      </p>
    </div>
  </footer>
);

// Export
export default Footer;
