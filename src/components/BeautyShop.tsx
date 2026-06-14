"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const beautyProducts = [
  {
    id: 101,
    name: "Rose Glow Serum",
    price: 1800,
    image: "/r1.webp", // Hum placeholder images use karenge ya aap baad mein change kar sakti hain
    description: "Hydrating serum for a natural radiant glow."
  },
  {
    id: 102,
    name: "Velvet Matte Lipstick",
    price: 1200,
    image: "/r2.jpg",
    description: "Long-lasting matte finish in classic rose."
  },
  {
    id: 103,
    name: "Silk Foundation",
    price: 2500,
    image: "/r3.jpg",
    description: "Flawless coverage with a silky smooth feel."
  },
  {
    id: 104,
    name: "Crystal Cleanser",
    price: 1500,
    image: "/r4.webp",
    description: "Deep cleaning for fresh and clear skin."
  },
  {
    id: 105,
    name: "Midnight Recovery Cream",
    price: 2200,
    image: "/r5.jpg",
    description: "Overnight hydration for tired skin."
  },
  {
    id: 106,
    name: "Ethereal Palette",
    price: 3000,
    image: "/r6.avif",
    description: "12 shimmering shades for every occasion."
  }
];

const BeautyShop = () => {
  const { addToCart } = useCart();

  return (
    <section className="shop-section" style={{ backgroundColor: '#fff9f9' }}>
      <div className="container">
        <h2 className="shop-title" style={{ color: '#d48166' }}>Beauty Collection</h2>
        <p className="shop-description">Enhance your natural beauty with our premium cosmetics.</p>
        <div className="shop-grid">
          {beautyProducts.map((product) => (
            <div key={product.id} className="shop-card" style={{ border: '1px solid #fce4ec' }}>
              <div className="shop-image-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="shop-image"
                />
              </div>
              <div className="shop-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category" style={{color: '#d48166'}}>{product.description}</p>
                <p className="product-price">Rs {product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart"
                  style={{ backgroundColor: '#d48166' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyShop;
