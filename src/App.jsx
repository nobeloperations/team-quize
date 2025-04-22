import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalityQuiz from './component/PersonalityQuiz';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './styles/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="content-wrapper">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="theme-toggle"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <h1>Nobel Teams Assessment</h1>
        <p className="intro-text">
          Find your perfect team match at Nobel! Take this quick assessment to discover
          which teams align best with your skills, interests, and goals.
        </p>

        <PersonalityQuiz />
      </div>
    </div>
  );
}

export default App;
