"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="thank-container">
        <h2 className="thank-title">Your Cart is Empty</h2>
        <p className="thank-message">Please add some items to your cart before checking out.</p>
        <button onClick={() => router.push('/shop')} className="thank-link" style={{border: 'none', cursor: 'pointer'}}>
          Go to Shop
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // FormSubmit handles the email, we just clear the cart on success
    // In a real scenario, you might want to preventDefault, send via fetch, then redirect
    // But for simplicity with FormSubmit, we'll let it redirect to thankpage
    // and we clear the cart there or just before it redirects.
    // clearCart(); 
  };

  return (
    <div className="contact-section">
      <div className="container" style={{maxWidth: '900px'}}>
        <h2 className="contact-title">Checkout</h2>
        <p className="contact-description">Enter your details to complete your order.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }} className="form-row">
          {/* Order Summary */}
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', color: 'black' }}>
            <h3 style={{marginBottom: '15px'}}>Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                <span>{item.name} (x{item.quantity})</span>
                <span>Rs {item.price * item.quantity}</span>
              </div>
            ))}
            <div style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
              <span>Total:</span>
              <span>Rs {totalPrice}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <form 
            action="https://formsubmit.co/54a26aec8427fd5ea0c290f18365eb68" 
            method="POST"
            className="contact-form"
            onSubmit={() => {
                // Clear cart locally when submitting
                setTimeout(() => clearCart(), 1000);
            }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://the-embroidery-atelier.vercel.app/thankpage" />
            <input type="hidden" name="Order Details" value={cart.map(i => `${i.name} x${i.quantity}`).join(', ')} />
            <input type="hidden" name="Total Amount" value={`Rs ${totalPrice}`} />

            <input type="text" name="name" placeholder="Full Name" required className="input-field" />
            <input type="email" name="email" placeholder="Email Address" required className="input-field" />
            <input type="text" name="phone" placeholder="Phone Number" required className="input-field" />
            <textarea name="address" placeholder="Shipping Address" rows={4} required className="textarea-field" style={{color: 'black'}}></textarea>

            <button type="submit" className="submit-button">
              Place Order (COD)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
