import React, { useState, useEffect } from "react";

const TextAnimation = () => {
  // State to control the opacity of the text (initially 0.1, will increase to 1)
  const [opacity, setOpacity] = useState(0.1);

  // State to control the vertical position of the text (initially 100px, will move up to 0px)
  const [yPosition, setYPosition] = useState(100);

  useEffect(() => {
    // Function that gradually increases opacity and moves text upward
    const intervalId = setInterval(() => {
      setOpacity((prev) => Math.min(prev + 0.02, 1)); // Increases opacity but ensures it doesn't exceed 1
      setYPosition((prev) => Math.max(prev - 2, 0)); // Moves text up but ensures it doesn't go below 0px
    }, 50); // Runs every 50 milliseconds

    return () => clearInterval(intervalId); // Cleanup function to stop the interval when the component unmounts
  }, []); // Empty dependency array ensures the effect runs only once after component mounts

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <p
        style={{
          opacity, // Dynamic opacity applied to text
          transform: `translateY(${yPosition}px)`, // Moves text upwards
          transition: "opacity 0.2s linear, transform 0.2s ease-out", // Smooth animation
        }}
      >
        Text Animation
      </p>
    </div>
  );
};

export default TextAnimation;
