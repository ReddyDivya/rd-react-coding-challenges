import React, { useRef, useState, useEffect } from "react";

const TextAnimationOptimized = () => {
  // State to control the opacity of the text (initially 0, will increase to 1)
  const [opacity, setOpacity] = useState(0);

  // State to control the vertical position of the text (initially 100px, will move up to 0px)
  const [yPosition, setYPosition] = useState(100);

  // useRef to store the animation frame ID (helps manage requestAnimationFrame)
  const animationRef = useRef(null);

  useEffect(() => {
    // Function to gradually increase opacity and move text upwards
    const animateText = () => {
      setOpacity((prev) => (prev < 1 ? prev + 0.02 : 1)); // Increase opacity but ensure it doesn’t exceed 1
      setYPosition((prev) => (prev > 0 ? prev - 1 : 0)); // Move text up but ensure it doesn't go below 0px

      // Continue the animation until the text is fully visible and in position
      if (opacity < 1 || yPosition > 0) {
        // requestAnimationFrame synchronizes animations with the browser's refresh rate (usually 60FPS),
        // making animations smoother and more efficient compared to setInterval or setTimeout.
        animationRef.current = requestAnimationFrame(animateText);
      }
    };

    // Start the animation using requestAnimationFrame
    animationRef.current = requestAnimationFrame(animateText);

    // Cleanup function to cancel animation when component unmounts
    return () => cancelAnimationFrame(animationRef.current);
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <p
        style={{
          opacity, // Dynamic opacity applied to text
          transform: `translateY(${yPosition}px)`, // Moves text upwards
          transition: "opacity 0.5s, transform 0.5s", // Smooth animation
        }}
      >
        Text Animation Optimized
      </p>
    </div>
  );
};

export default TextAnimationOptimized;
