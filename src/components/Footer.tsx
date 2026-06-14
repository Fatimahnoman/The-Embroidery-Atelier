import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>The Embroidery Atelier</h2>
          <p>Where your name meets elegance — thread by thread.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 The Embroidery Atelier. All Rights Reserved.</p>
          <p>Made with 💖 by Fatimah Noman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
