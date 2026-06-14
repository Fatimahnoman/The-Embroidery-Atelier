"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const Shop = () => {
  const { addToCart } = useCart();
  const router = useRouter();

   const romalItems = [
  { id: 1, name: 'Whispered Petals', price: 1200, image: '/r1.webp' },
  { id: 2, name: 'Threaded Blossom', price: 1300, image: '/r12.jpg' },
  { id: 3, name: 'Silken Scent', price: 1500, image: '/r9.jpg' },
  { id: 4, name: 'Velvet Bloom', price: 1400, image: '/r4.webp' },
  { id: 5, name: 'Pearl Whisper', price: 1250, image: '/r5.jpg' },
  { id: 6, name: 'Lace Whisper', price: 1350, image: '/r6.avif' },
  { id: 7, name: 'Serene Threads', price: 1600, image: '/r7.jpg' },
  { id: 8, name: 'Name on Cloud', price: 1550, image: '/r8.jpg' },
  { id: 9, name: 'Blushing Grace', price: 1450, image: '/r3.jpg' },
  { id: 10, name: 'Rose Dust', price: 1300, image: '/r10.jpg' },
  { id: 11, name: 'Embroidered Essence', price: 1700, image: '/r11.jpg' },
  { id: 12, name: 'Heirloom Stitch', price: 1800, image: '/r2.jpg' },
];

  const handleBuyNow = (item: any) => {
    addToCart(item);
    router.push('/checkout');
  };

  return (
    <div data-aos="fade-down">
      <div className="romal">
        {romalItems.map((item) => (
          <div key={item.id} className="romalcard" data-aos="flip-up">
            <Image 
              src={item.image.trim()} 
              alt={item.name} 
              width={150}
              height={150} 
            />
            <h3>{item.name}</h3>
            <div>Rs {item.price}</div>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => handleBuyNow(item)}>Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
