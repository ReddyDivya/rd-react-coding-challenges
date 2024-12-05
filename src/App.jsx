import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';

const App = () => {
  return (
    <div className="m-4">
      <BrowserRouter>
        <h1 className="text-3xl text-blue-600 font-semibold text-center">React Coding Challenges</h1>
        
        <Navbar/>
        <Routes>
            <Route path="/accordion" element={<Accordion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
