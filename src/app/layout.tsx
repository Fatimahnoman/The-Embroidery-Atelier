import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { FaWhatsapp } from 'react-icons/fa';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Embroidery Atelier | Handcrafted Elegance",
  description: "Custom hand-embroidered handkerchiefs made with care by Fatimah Noman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header/>
          {children}
          <Footer/>
          
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/923182781890?text=Hi%20Fatimah!%20I%20want%20to%20order%20a%20customized%20embroidery%20design."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              backgroundColor: '#25d366',
              color: 'white',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
              zIndex: 9998,
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaWhatsapp />
          </a>
        </CartProvider>
      </body>
    </html>
  );
}
