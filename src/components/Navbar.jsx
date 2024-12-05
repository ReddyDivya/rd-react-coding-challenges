import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="fixed top-12 left-10 w-full bg-white shadow-md z-10">
            <nav className="absolute">
                <ul className="font-semibold text-gray-500">
                    <li>
                        <Link to="/Accordion">1 - Accordion</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;