"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-title"
        >
          Contact Me
        </motion.h2>

        <p className="contact-description">
          Feel free to reach out if you have a project idea, want to collaborate,
          or just say hello. I’m always open to new opportunities and meaningful conversations.
        </p>

        <motion.form
          action="https://formsubmit.co/54a26aec8427fd5ea0c290f18365eb68"
          method="POST"
          whileHover={{ scale: 1.01 }}
          className="contact-form"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
           <input
            type="hidden"
            name="_next"
            value="https://the-embroidery-atelier.vercel.app/thankpage"
         />


          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="input-field"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input-field full-width"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className="textarea-field"
          ></textarea>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
