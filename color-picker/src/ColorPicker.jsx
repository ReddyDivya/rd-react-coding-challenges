// Importing React and the useState hook from React library
import React, { useState } from "react";

const ColorPicker = () => {
  // Defining state 'selectedColor' with an initial value of white ("#ffffff")
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  // Function to handle color change from input
  const handleSelectedColor = (event) => {
    setSelectedColor(event.target.value); // Updates state with selected color's hex code
  };

  return (
    <div>
      {/* Displaying the currently selected color's hex code */}
      <h3>Selected Color's Hex code: {selectedColor}</h3>

      {/* Color input field that allows users to pick a color */}
      <input
        type="color" // Displays a color picker
        value={selectedColor} // Binds the input value to the state
        // ✅ Correct: Passing function reference, React will call it with event object
        onChange={handleSelectedColor}

        /*
        ❌ Incorrect: onChange={() => handleSelectedColor}
        - This creates an arrow function that only returns handleSelectedColor but doesn't execute it.
        - The function does NOT receive the event object, causing unexpected behavior.
        
        ✅ Correct Alternative: onChange={(event) => handleSelectedColor(event)}
        - This explicitly calls handleSelectedColor with the event parameter.
        */
      />
    </div>
  );
};

// Exporting the ColorPicker component for use in other parts of the application
export default ColorPicker;
