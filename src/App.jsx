import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import DynamicList from './components/DynamicList';
import ColorPicker from './components/ColorPicker';

const App = () => {
  return (
    <div className="m-4">
      <BrowserRouter>
        <h1 className="text-3xl text-blue-600 font-semibold text-center">React Coding Challenges</h1>
        
        <Navbar/>
        <Routes>
            <Route path="/counter" element ={<Counter/>}/>
            <Route path="/dynamic-list" element={<DynamicList/>}/>
            <Route path="/color-picker" element={<ColorPicker/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
