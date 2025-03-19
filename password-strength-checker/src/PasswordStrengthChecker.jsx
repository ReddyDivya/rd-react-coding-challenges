import React, { useState, useEffect } from "react";

const PasswordStrengthChecker = () => {
  // State to store the password input value
  const [password, setPassword] = useState("");
  // State to store the evaluated strength of the password
  const [strength, setStrength] = useState("");

  // Function to evaluate password strength based on length
  const evaluatePasswordStrength = () => {
    if (password.length < 8)
      setStrength("Weak"); // Passwords shorter than 8 characters are weak
    else if (password.length > 8 && password.length <= 12)
      setStrength("Medium");
    // Passwords between 8 and 12 characters are medium strength
    else setStrength("Strong"); // Passwords longer than 12 characters are strong
  };

  useEffect(() => {
    // Debounce effect: Delays execution to improve performance
    const timerID = setTimeout(() => {
      evaluatePasswordStrength();
    }, 500); // 500ms delay before evaluating strength

    return () => clearTimeout(timerID); // Cleanup function to prevent unnecessary executions
  }, [password]); // Runs whenever password changes

  return (
    <div className="password-container">
      <input
        className="password-input"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Updates password state on input change
      />
      {/* Displays password strength message with dynamic class for styling */}
      <p className={`strength-message ${strength.toLowerCase()}`}>
        {strength === "Weak" && "Password is weak."}
        {strength === "Medium" && "Password is medium."}
        {strength === "Strong" && "Password is strong."}
      </p>
    </div>
  );
};

export default PasswordStrengthChecker;
