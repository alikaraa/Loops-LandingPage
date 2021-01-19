/**
 * @file index.jsx
 * @brief The entry point for our application.
 */

// Imports
import React from "react";
import { render } from "react-dom";
import App from "./app";

// Render to root node.
const appRoot = document.querySelector(".app-root");
render(<App />, appRoot);
