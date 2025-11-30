import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
      }
    } else {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Projects' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="navbar">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="glass-panel navbar-content"
      >
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="nav-underline"
                />
              )}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
