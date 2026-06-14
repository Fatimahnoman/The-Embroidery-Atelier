"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const ThankYouPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart when the user successfully reaches this page
    clearCart();
  }, [clearCart]);

  return (
    <div className="thank-container">
      <h1 className="thank-title">Thank You!</h1>
      <p className="thank-message">
        Your order has been placed successfully. I’ll get back to you soon! 💌
      </p>
      <Link href="/" className="thank-link">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
