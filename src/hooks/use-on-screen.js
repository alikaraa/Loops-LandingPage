/**
 * @file hooks/use-on-screen.js
 * @brief React hook checking to see if a referenced DOM element is on screen.
 * @source https://stackoverflow.com/a/65008608/2868302
 *
 * The following code is derived from a solution by StackOverflow user 'Creaforge',
 * which is licensed under the Creative Commons BY-SA 4.0 License:
 *  https://creativecommons.org/licenses/by-sa/4.0/
 */

// Imports
import { useState, useEffect } from "react";

/**
 * @function useOnScreen
 * @brief React hook to check to see if the referenced DOM element is onscreen.
 * @param {React.Ref} reference The reference to the DOM element to watch.
 * @param {Function} onIntersect A function to call once the element enters the screen.
 * @see React.Ref
 * @see React.useRef
 */
export const useOnScreen = (reference, onIntersectChange = () => {}) => {
  // Flag to determine if the referenced DOM element is intersecting with the
  // client bounding rectangle - if the element is on screen.
  const [intersecting, setIntersecting] = useState(false);

  // Use an intersection observer (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
  // to check to see if the referenced element has entered the viewport.
  const observer = new IntersectionObserver(([entry]) => {
    onIntersectChange(entry.isIntersecting);
    setIntersecting(entry.isIntersecting);
  });

  // Have the observer begin observing the referenced component inside of an effect hook, so the observer
  // can be removed when the component unmounts.
  useEffect(() => {
    observer.observe(reference.current);
    return () => observer.disconnect();
  }, []);

  // Return true if the referenced element is on screen.
  return intersecting;
};
