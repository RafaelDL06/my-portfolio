import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <h1>Contact</h1>
      <p>If you'd like to get in touch, please fill out the form below.</p>
      
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
