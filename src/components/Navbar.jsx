// Importing the Link component from react-router-dom to handle navigation between routes
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        // Navbar container with fixed position. It stays in place when you scroll.
        // 'top-12' positions it 12 units from the top of the page.
        // 'left-10' places it 10 units from the left edge of the page.
        // 'w-full' ensures the navbar spans the full width of its container.
        // 'z-10' ensures the navbar stays above other elements (higher stacking context).
        <div className="fixed top-12 left-10 w-full bg-white shadow-md z-10">
            <nav className="absolute">
                <ul className="font-semibold text-gray-500">
                    {/* Link tag used for navigation, replaces a traditional <a> tag */}
                    {/* 'to="/Accordion"' specifies the route to navigate to when clicked */}
                    <li>
                        <Link to="/Accordion">1 - Accordion</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;  // Exports the Navbar component for use in other parts of the app
