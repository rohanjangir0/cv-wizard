import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1 className="contact-title">
          Get in <span className="highlight">Touch</span>
        </h1>
        <p className="contact-subtitle">
          Have questions about CV Wizard? Need help with your resume? We’re here to help you succeed in your career journey.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Email Us</h3>
              <p>Send us an email and we’ll respond within 24 hours</p>
              <div className="info-email">
                <strong>cvwizardcjj2002.com</strong><br />
                <small>For general inquiries</small><br /><br />
                <strong>premium@cvwizard.com</strong><br />
                <small>For premium support</small>
              </div>
            </div>

            <div className="info-card">
              <h3>Call Us</h3>
              <p>Speak directly with our support team</p>
              <div className="info-call">
                <strong>+91 81071714**</strong><br />
                <small>Mon–Fri, 9am–6pm EST</small>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <p>Fill out the form below and we’ll get back to you as soon as possible.</p>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Tell us how we can help you..." rows="5" required></textarea>
              <button type="submit">
                <span className="send-icon">📨</span> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
