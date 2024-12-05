import './App.css';

// Importing necessary components from React Router for navigation.
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Accordion from './components/Accordion';

const App = () => {
  return (
    // The outer div element with some margin (m-4)
    <div className="m-4">
      
      {/* Title of the page with custom styling: */}
      <h1 className="text-3xl text-blue-600 font-semibold text-center">React Coding Challenges</h1>
      
      {/* Navbar component for navigation */}
      <Navbar/>

      {/* Setting up routes for navigation */}
      <BrowserRouter>
        {/* The Routes component is used to define the available routes in the application */}
        <Routes>
          {/* Route for the Accordion page. When the path is '/accordion', it renders the Accordion component */}
          <Route path="/accordion" element={<Accordion/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
