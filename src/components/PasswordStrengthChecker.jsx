import { useState } from "react";

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    const handleChangePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        calculatePasswordStrength(newPassword);
    };

    const calculatePasswordStrength = (password) => {
        let score = 0; // Track the password strength

        // Check if the password length is greater than 8 characters
        if (password.length > 8) score += 2;

        // Check if the password contains at least one uppercase letter
        if (/[A-Z]/.test(password)) score += 1;

        // Check if the password contains at least one lowercase letter
        if (/[a-z]/.test(password)) score += 1;

        // Check if the password contains at least one digit
        if (/\d/.test(password)) score += 1;

        // Check if the password contains at least one special character
        // Special characters are any characters that are not a-z, A-Z, or 0-9
        if (/[^a-zA-Z0-9]/.test(password)) score += 1;

        // Update the strength state with the calculated score
        setStrength(score);
    };

    const getProgressBarColor = () => {
        if (strength < 3) return 'bg-red-500';
        if (strength < 6) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const getStrengthLabel = () => {
        if (strength < 3) return 'Weak';
        if (strength < 6) return 'Moderate';
        return 'Strong';
    };

    return (
        <div className="max-w-sm mx-auto bg-white p-6 shadow-lg rounded-lg mt-12">
            <h1 className="text-2xl font-semibold text-blue-500 mb-4">4 - Password Strength Checker</h1>

            <label htmlFor="password" className="block text-lg text-gray-600 font-semibold mb-2">Enter the Password</label>
            <input 
                type="password"
                id="password"
                value={password}
                placeholder="Enter the password"
                onChange={handleChangePassword}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="mt-4">
                <div className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
                    <div 
                        className={`h-full ${getProgressBarColor()}`} 
                        style={{ width: `${(strength / 6) * 100}%` }}
                    ></div>
                </div>
                <span className="font-semibold text-gray-700">{getStrengthLabel()}</span>
            </div>
        </div>
    );
};

export default PasswordStrengthChecker;
