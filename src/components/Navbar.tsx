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
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="/iyro logo.jpeg" 
            alt="IYRO Agency" 
            className="logo-img" 
            style={{ height: '56px', width: 'auto', objectFit: 'contain', mixBlendMode: 'lighten' }} 
          />
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
