import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import DynamicList from './components/DynamicList';
import ColorPicker from './components/ColorPicker';
import PasswordStrengthChecker from './components/PasswordStrengthChecker';
import CountdownTimerWithAudio from './components/CountdownTimerWithAudio';
import TextAnimation from './components/TextAnimation';
import DynamicMovieList from './components/DynamicMovieList';
import RecipeGenerator from './components/RecipeGenerator';
import MemeGenerator from './components/MemeGenerator';

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
            <Route path="/password-strength" element={<PasswordStrengthChecker/>}/>
            <Route path="/countdown-timer-audio" element={<CountdownTimerWithAudio/>}/>
            <Route path="/text-animation" element={<TextAnimation/>}/>
            <Route path="/text-animation" element={<TextAnimation/>}/>
            <Route path="/dynamic-movies" element={<DynamicMovieList/>}/>
            <Route path="/receipe-generator" element={<RecipeGenerator/>}/>
            <Route path="/meme-generator" element={<MemeGenerator/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
