import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img 
              src="/iyro logo.jpeg" 
              alt="IYRO Agency" 
              className="footer-logo-img" 
              style={{ height: '80px', width: 'auto', objectFit: 'contain', marginBottom: '16px', mixBlendMode: 'lighten' }} 
            />
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
