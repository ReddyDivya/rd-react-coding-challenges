import React, { useState } from "react"; // Importing React and useState hook

const Counter = () => {
  // Declaring a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1); // Updating state using the previous value
  };

  // Function to decrement the count (but not below 0)
  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // Prevents negative values
  };

  return (
    <div>
      {/* Display the current count */}
      <h3>{count}</h3>

      {/* Button to increase count */}
      <button onClick={handleIncrement}>Increment</button>

      {/* Button to decrease count */}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter; // Exporting the Counter component for use in other files
