import React from 'react';
import Link from 'next/link';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>The Embroidery Atelier</h2>
          <p>Where your name meets elegance — thread by thread.</p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
            <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
              <FaInstagram />
            </a>
            <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
              <FaWhatsapp />
            </a>
          </div>
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
