/**
 * @file hooks/use-media-query.js
 * @brief React hook used to match a media query.
 */

// Imports
import { useState, useEffect } from "react";

/**
 * @function useMediaQuery
 * @brief React hook used to watch for a media query.
 * @param {String} query A string representing the CSS media query.
 * @return True if the viewport matches the media query.
 * @source https://bit.ly/3sr2nhO
 */
export const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  return matches;
};
