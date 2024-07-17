import { useEffect, useState } from "react";

const TextAnimation = () => {
  const [opacity, setOpacity] = useState(0);//opacity
  const [yPosition, setYPosition] = useState(20);//Y position
  const [movingUp, setMovingUp] = useState(true);//direction of movement (true for up, false for down)

  // Function to animate the text
  const animateText = () => {
    // Gradually increase the opacity to a maximum of 1
    setOpacity((prevOpacity) => Math.min(prevOpacity + 0.1, 1));
    // Adjust the Y position of the text
    setYPosition((prevYPosition) => {
      // If Y position is less than or equal to -20, change direction to down
      if (prevYPosition <= -20) {
        setMovingUp(false);//move down
      } 
      
      // If Y position is greater than or equal to 20, change direction to up
      else if (prevYPosition >= 20) {
        setMovingUp(true);//move up
      }

      // Move the text up or down based on the current direction
      return movingUp ? prevYPosition - 1 : prevYPosition + 1;
    });
  };

  useEffect(() => {
    // Set up an interval to animate the text every 50 milliseconds
    const animationInterval = setInterval(animateText, 50);
    // Clean up the interval when the component unmounts
    return () => clearInterval(animationInterval);
  }, [movingUp]);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-2xl text-blue-500 font-semibold mb-4">Text Animation</h1>
      <p style={{
        opacity,
        transform: `translateY(${yPosition}px)`,
        transition: `opacity 0.5s, transform 0.5s`
      }}>
        Text Animation
      </p>
    </div>
  );
};

export default TextAnimation;
