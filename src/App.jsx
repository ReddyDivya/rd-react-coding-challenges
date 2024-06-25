import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import DynamicList from './components/DynamicList';

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="text-3xl text-blue-500">React Coding Challenges</h1>
      <Navbar/>
      
      <Routes>
          <Route path="/counter" element ={<Counter/>}/>
          <Route path="/dynamic-list" element={<DynamicList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
