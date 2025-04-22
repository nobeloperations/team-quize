import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ isDarkMode, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${!visible ? 'navbar-hidden' : ''} ${isOpen ? 'nav-open' : ''}`}>
      <div className="navbar-container">
        {/* <div className="navbar-brand">
          <img src="/nobel-logo.png" alt="Nobel Logo" className="navbar-logo" />
          <span>Nobel Teams</span>
        </div> */}
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
          <a href="/" className="nav-link home-link" onClick={() => setIsOpen(false)}>
            <FaHome />
            <span>Home</span>
          </a>
          <button
            onClick={() => {
              onThemeToggle();
              setIsOpen(false);
            }}
            className="theme-toggle"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;