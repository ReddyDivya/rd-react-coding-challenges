import { useState } from 'react';

// TextArtGenerator component
const TextArtGenerator = () => {
  // State to store user input
  const [input, setInput] = useState('');
  // State to store generated text art
  const [textArt, setTextArt] = useState([]);

  // Function to generate text art based on input
  const generateTextArt = (text) => {
    // Split the input text into individual characters
    // Map each character to a span element with increasing font size
    const art = text.split('').map((char, index) => (
      <span key={index} style={{ fontSize: (index + 1) * 10 }}>{char}</span>
    ));
    // Update the text art state
    setTextArt(art);
  };

  // Handle input change
  const handleInputChange = (event) => {
    // Get the value from the input field
    const text = event.target.value;
    // Update the input state
    setInput(text);
    // Generate text art based on the updated input
    generateTextArt(text);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
        Text Art Generator
      </h1>
      <input
        // Bind input value to input state
        value={input}
        // Call handleInputChange on input change
        onChange={handleInputChange}
        // Tailwind CSS classes for styling the input field
        className="p-3 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        // Placeholder text for the input field
        placeholder="Enter your text here"
      />
      <div className="flex flex-wrap">
        {/* Render the generated text art */}
        {textArt}
      </div>
    </div>
  );
};

export default TextArtGenerator;

/*
focus:outline-none: Removes the default browser outline when the input is focused.
focus:ring-2: Adds a 2-pixel wide ring around the input when focused.
focus:ring-blue-500: Sets the color of the focus ring to a specific shade of blue.
*/