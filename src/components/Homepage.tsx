'use client';
import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url(heroo.jpg)" }}>
        <div data-aos="zoom-in-up">
          <h1 className="hed">Welcome to My</h1>
          <h2>The Embroidery Atelier</h2>
          <p className="p1">Where your name meets elegance — thread by thread.</p>
          <p className="p1">Crafted by hand, made for hearts</p>

          <Link href="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
