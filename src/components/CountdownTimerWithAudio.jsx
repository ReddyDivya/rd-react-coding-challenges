import { useState, useEffect } from "react";
import Timer from "../assets/Timer.mp3";

const CountdownTimerWithAudio = () => {
  const initialTimer = 10;//initial timer
  const [timer, setTimer] = useState(initialTimer);//current timer value
  const [playAudio, setPlayAudio] = useState(false);//audio playback
  const [intervalId, setIntervalId] = useState(null);//interval ID

  // Function to update the timer every second
  const handleTimerUpdate = () => {
    setTimer((prevTimer) => {
      if (prevTimer === 0) {
        setPlayAudio(true); // Set playAudio to true when timer reaches 0
        clearInterval(intervalId);//Clear the interval when timer reaches 0
        return 0; //Ensure the timer doesn't go below 0
      }
      return prevTimer - 1; // Decrease the timer by 1 second
    });
  };

  // Function to start the timer
  const handleStartTimer = () => {
    //Update the timer every second
    const id = setInterval(handleTimerUpdate, 1000);
    setIntervalId(id); // Store the interval ID in state
    return () => clearInterval(id);//Clean up function clears the interval
  };

  // Function to refresh the timer
  const handleRefreshTimer = () => {
    setTimer(initialTimer); //Reset timer to initial value
    setPlayAudio(false); //Reset playAudio state
    clearInterval(intervalId); //Clear any existing interval
  };

  // Effect to play audio when `playAudio` state changes to true
  useEffect(() => {
    if (playAudio) {
      const audio = new Audio(Timer);
      audio.play().catch(error => console.error('Failed to play audio: ' + error.message));
    }
  }, [playAudio]);

  return (
    <div className="max-w-sm mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 w-full">
      <h1 className="text-xl text-blue-500 font-semibold mb-4">Countdown Timer With Audio</h1>
      <div className="text-center mb-4">
        <p className="text-4xl font-bold text-gray-800">{timer}</p>
      </div>
      <div className="flex justify-center">
        {!playAudio && (
          <button
            onClick={handleStartTimer}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none mr-2"
          >
            Start Timer
          </button>
        )}
        {playAudio && (
          <button
            onClick={handleRefreshTimer}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Refresh Timer
          </button>
        )}
      </div>
    </div>
  );
};

export default CountdownTimerWithAudio;
