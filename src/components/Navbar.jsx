import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="relative">
            <nav className="absolute left-0 pl-4">
                <ul className="font-semibold text-gray-500">
                    <li>
                        <Link to="/counter">1 - Counter</Link>
                    </li>
                    <li>
                        <Link to="/dynamic-list">2 - Dynamic List of Items with Strikethrough</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;