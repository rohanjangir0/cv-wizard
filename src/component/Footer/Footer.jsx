import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>CV Wizard</h3>
          <p>Helping you create professional resumes with ease.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="GitHub">🐙</a>
            <a href="#" aria-label="Email">✉️</a>
          </div>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Templates</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CV Wizard. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
