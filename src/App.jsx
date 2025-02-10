import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalityQuiz from './component/PersonalityQuiz';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing icons from react-icons

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // State to toggle dark mode

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#1D2A35' : '#8CA6C0', // Dark mode background color
        color: isDarkMode ? '#8CA6C0' : '#000000', // Light/dark text color
        height: '100vh',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Aligns content vertically
      }}
    >
      
      <button
        onClick={() => setIsDarkMode(!isDarkMode)} // Toggle dark mode
        style={{
          padding: '10px 10px',
          backgroundColor: isDarkMode ?  '#1D2A35':'#ffffff' , // Button background color
          color: isDarkMode ?  '#ffffff':'#1D2A35' , // Button text color
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          marginTop: '20px', // Spacing between quiz and button
          display: 'flex',
          alignItems: 'center', // Center the icon and text
        }}
      >
        {isDarkMode ? (
          <FaSun style={styling.modeBox} /> // Sun icon when dark mode is enabled
        ) : (
          <FaMoon style={styling.modeBox} /> // Moon icon when light mode is enabled
        )}
      </button>

      <PersonalityQuiz />

    </div>
  );
}

const styling = {
  modeBox :{

  }
}

export default App;
