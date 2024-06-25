import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }; // handleIncrement

  const handleDecrement = () => {
    setCount(count - 1);
  }; // handleDecrement

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">1 - Simple Counter App</h2>
      
      <div className="flex items-center justify-between mb-6">
        <button
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
          onClick={handleIncrement}
        >
          +
        </button>
        
        <span className="text-2xl font-semibold">{count}</span>
        
        <button
          className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
