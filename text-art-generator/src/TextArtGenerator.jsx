import React, { useState, useEffect } from "react"; // Import React and necessary hooks

// Functional component for generating text art
const TextArtGenerator = () => {
  // State to store the user input
  const [input, setInput] = useState("");

  // State to store the generated text art
  const [textArt, setTextArt] = useState("");

  // Handles user input change and updates the input state
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to generate text art from user input
  const generateTextArt = () => {
    // Convert input string into an array of characters
    const text = input.split("");

    // Map over each character and wrap it in a span with an increasing font size
    const art = text.map((char, index) => (
      <span key={index} style={{ fontSize: (index + 1) * 10 }}>
        {char}
      </span>
    ));

    // Update the textArt state with the generated spans
    setTextArt(art);
  }; // End of generateTextArt function

  // useEffect runs generateTextArt whenever `input` state changes
  useEffect(() => {
    generateTextArt();
  }, [input]); // Dependency array ensures it runs only when `input` changes

  return (
    <div>
      {/* Input field for user to type text */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)} // Updates `input` state on change
        placeholder="Type something..." // Placeholder text for better UX
      />
      {/* Container to display generated text art */}
      <div className="textArt">{textArt}</div>
    </div>
  );
};

export default TextArtGenerator; // Export component for use in other files
