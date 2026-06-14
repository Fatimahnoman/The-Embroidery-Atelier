import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>The Embroidery Atelier</h2>
          <p>Where your name meets elegance — thread by thread.</p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
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
