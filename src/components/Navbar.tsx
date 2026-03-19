import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
            <defs>
              <linearGradient id="gold" x1="0" y1="0" x2="24" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4AF37" />
                <stop offset="1" stopColor="#F5D67B" />
              </linearGradient>
            </defs>
            <path d="M4 12 L16 4 L16 10 L4 18 Z" fill="url(#gold)" />
            <path d="M4 22 L16 14 L16 36 L4 36 Z" fill="url(#gold)" />
          </svg>
          <div className="logo-text">
            <span className="logo-title">IYRO</span>
            <span className="logo-subtitle">— AGENCY —</span>
          </div>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle btn" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="btn btn-primary nav-cta">Get Started</a>
        </div>
      </div>
    </nav>
  );
}
