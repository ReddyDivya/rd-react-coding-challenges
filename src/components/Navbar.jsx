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
                        <Link to="/dynamic-list">3 - Color Picker with Hex Code Display</Link>
                    </li>
                    <li>
                        <Link to="/dynamic-list">4 - Password Strength Checker</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;