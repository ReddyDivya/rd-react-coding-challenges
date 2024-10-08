import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="fixed top-12 left-10 w-full bg-white shadow-md z-10">
            <nav className="absolute">
                <ul className="font-semibold text-gray-500">
                    <li>
                        <Link to="/counter">1 - Counter</Link>
                    </li>
                    <li>
                        <Link to="/dynamic-list">2 - Dynamic List of Items with Strikethrough</Link>
                    </li>
                    <li>
                        <Link to="/color-picker">3 - Color Picker with Hex Code Display</Link>
                    </li>
                    <li>
                        <Link to="/password-strength">4 - Password Strength Checker</Link>
                    </li>
                    <li>
                        <Link to="/countdown-timer-audio">5 - Countdown Timer with Audio</Link>
                    </li>
                    <li>
                        <Link to="/text-animation">5 - text-animation</Link>
                    </li>
                    <li>
                        <Link to="/dynamic-movies">6 - Dynamic Movie List with Filtering and Sorting</Link>
                    </li>
                    <li>
                        <Link to="/receipe-generator">7 -  Receipe Generator</Link>
                    </li>
                    <li>
                        <Link to="/meme-generator">8 - Meme Generator</Link>
                    </li>
                    <li>
                        <Link to="/text-art-generator">9 - Dynamically Generated Text Art</Link>
                    </li>
                    <li>
                        <Link to="/quiz-with-multiple-choice">10 - Simple Quiz App with Multiple Choice</Link>
                    </li>
                    <li>
                        <Link to="/file-explorer">11 - File Explorer</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;