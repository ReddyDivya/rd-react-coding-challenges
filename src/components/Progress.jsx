import PropTypes from 'prop-types';

const Progress = ({ progress, width }) => {
  // Ensure the progress value is between 0 and 100
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className="bg-gray-200 rounded-lg h-4 overflow-hidden"
      style={{ width: width || '100%' }}
      role="progressbar"
      aria-valuenow={safeProgress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Progress"
    >
      <div
        className="h-full bg-blue-600 rounded-lg transition-all duration-300 ease-in-out"
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
};

// PropTypes for validation
Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  width: PropTypes.string, // Optional width prop to scale the component
};

export default Progress;
