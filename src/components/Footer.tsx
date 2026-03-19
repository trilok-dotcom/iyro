import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo">
              <defs>
                <linearGradient id="gold-footer" x1="0" y1="0" x2="24" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D4AF37" />
                  <stop offset="1" stopColor="#F5D67B" />
                </linearGradient>
              </defs>
              <path d="M4 12 L16 4 L16 10 L4 18 Z" fill="url(#gold-footer)" />
              <path d="M4 22 L16 14 L16 36 L4 36 Z" fill="url(#gold-footer)" />
            </svg>
            <h2>IYRO</h2>
            <p>Building brands that stand out.</p>
          </div>
          <div className="footer-links">
            <div className="link-col">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="link-col">
              <h4>Social</h4>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>IYRO Agency © 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
