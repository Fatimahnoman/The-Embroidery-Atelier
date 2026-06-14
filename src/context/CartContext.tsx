"use client";
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type ToastType = {
  show: boolean;
  message: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
  toast: ToastType;
  updateQuantity: (id: number, delta: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<ToastType>({ show: false, message: "" });
  const isInitialMount = useRef(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('threaded_grace_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes, but skip the first run
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    try {
      localStorage.setItem('threaded_grace_cart', JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart]);

  const addToCart = (item: Product) => {
    try {
      setCart((prevCart) => {
        const existingItem = prevCart.find((i) => i.id === item.id);
        if (existingItem) {
          return prevCart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prevCart, { ...item, quantity: 1 }];
      });

      setToast({ show: true, message: `${item.name} added to cart! ✨` });
      
      setTimeout(() => {
        setToast({ show: false, message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('threaded_grace_cart');
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, totalPrice, toast, updateQuantity }}>
      {children}
      
      {toast.show && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'rgb(175, 48, 109)',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          zIndex: 9999,
          pointerEvents: 'none',
          animation: 'slideIn 0.5s ease-out',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{fontSize: '20px'}}>🛍️</span> {toast.message}
          <style>{`
            @keyframes slideIn {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
