"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

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

  return (
    <div className="contact-section">
      <div className="container" style={{maxWidth: '900px'}}>
        <h2 className="contact-title">Checkout</h2>
        <p className="contact-description">Enter your details to complete your order.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }} className="form-row">
          {/* Order Summary */}
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', color: 'black', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '20px', borderBottom: '2px solid #rgb(175, 48, 109)', paddingBottom: '10px' }}>Order Summary</h3>
            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{item.name}</span>
                    <span style={{ color: '#666', fontSize: '0.9rem' }}>Quantity: {item.quantity}</span>
                  </div>
                  <span style={{ fontWeight: 'bold' }}>Rs {item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', fontSize: '1.3rem', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #eee', paddingTop: '15px' }}>
              <span>Total Bill:</span>
              <span style={{ color: 'rgb(175, 48, 109)' }}>Rs {totalPrice}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <form 
            action="https://formsubmit.co/54a26aec8427fd5ea0c290f18365eb68" 
            method="POST"
            className="contact-form"
            onSubmit={() => {
                setTimeout(() => clearCart(), 1000);
            }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://the-embroidery-atelier.vercel.app/thankpage" />

            {/* Detailed Order List for Email */}
            <input 
              type="hidden" 
              name="Items Ordered" 
              value={cart.map(item => `${item.name} (Qty: ${item.quantity})`).join(' | ')} 
            />
            <input type="hidden" name="Total Payable" value={`Rs ${totalPrice}`} />

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
