import { useState } from 'react';
import Progress from './Progress';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 0)); // Increment by 10 or reset
  };

  const handleDecrement = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0)); // Decrement by 10 but not below 0
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Animated Progress Bar Example</h1>
      <Progress progress={progress} width="80%" />
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
