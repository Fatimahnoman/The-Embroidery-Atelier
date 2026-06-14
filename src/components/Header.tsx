"use client";
import { IoFlowerOutline } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Link from "next/link"
import React from 'react'
import { useCart } from "@/context/CartContext";
 

const Header = () => {
  const { cartCount } = useCart();
   
  return (
     <header className="header">
       
        <h1 className="log" data-aos="zoom-in-right"><IoFlowerOutline style={{fontSize:"25px"}}/>The Embroidery Atelier</h1>
        <nav className="nav"data-aos="zoom-in-left">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Embroidery</Link>
            <Link href="/beauty" style={{ color: '#d48166', fontWeight: 'bold' }}>Beauty Store</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/checkout" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <PiShoppingCartSimpleFill  style={{fontSize: "25px", color: "rgb(175, 48, 109)" }}/>
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: 'white',
                  color: 'rgb(175, 48, 109)',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}>
                  {cartCount}
                </span>
              )}
            </Link>
         </nav>
 
     </header>
  )
}

export default Header 