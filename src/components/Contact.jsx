import React, { useState } from "react";
import Footer from "./Footer";
import "./contact.css";

const Contact = () => {
  // ─── Local state ────────────────────────────────────────────
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ─── Build a mailto link and launch mail client ─────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailto = `mailto:pathakmansi608@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailto;          // opens default mail app
  };

  return (
    <div className="contact">
      <h1 className="contact-main-heading">Get in Touch</h1>

      <div className="left-contact">
        <div className="lets-talk-text">Let's talk!</div>

        <p className="statement-text">
          Connect with me via e‑mail:&nbsp;
          <a
            href="mailto:pathakmansi608@gmail.com"
            className="e-mail-detail"
          >
            pathakmansi608@gmail.com
          </a>
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Your e‑mail *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your e‑mail"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <label htmlFor="message">Your message *</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            placeholder="Write your message…"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Optional illustration / image area */}
      <div className="right-contact" />

      
    </div>
  );
};

export default Contact;
