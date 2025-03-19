import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // State to track the countdown timer, initialized to 10 seconds
  const [timer, setTimer] = useState(10);

  // State to ensure the audio plays only once when the timer reaches 0
  const [playAudio, setPlayAudio] = useState(false);

  useEffect(() => {
    // If the timer reaches 0, play the audio and stop the countdown
    if (timer === 0) {
      handlePlayAudio();
      return; // Exit the effect to prevent further execution
    }

    // Start the countdown timer with an interval of 500ms (0.5 seconds)
    const intervalID = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1); // Decrement the timer by 1
    }, 500);

    // Cleanup function to clear the interval when the component unmounts
    // or the timer updates, preventing memory leaks
    return () => {
      clearInterval(intervalID);
    };
  }, [timer]); // Dependency array ensures the effect runs when `timer` updates

  // Function to play the audio when the timer reaches 0
  const handlePlayAudio = () => {
    // Check if audio has already played to avoid multiple plays
    if (!playAudio) {
      const audio = new Audio("/assets/Kurchi-Madathapetti.mp3"); // Ensure the file is in the `public/assets/` folder
      audio.play(); // Play the audio file
      setPlayAudio(true); // Set state to prevent repeated playback
    }
  };

  return (
    <div className="countdown-container">
      {/* Display the countdown timer */}
      <h4>Countdown: {timer}</h4>

      {/* Show a message when the countdown reaches 0 */}
      {timer === 0 && <p>Time is up!</p>}
    </div>
  );
};

export default CountdownTimer;
