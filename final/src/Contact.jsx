import React from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="overlay">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-subheading">
          We’d love to hear from you! Reach out with any questions or suggestions.
        </p>

        <div className="contact-wrapper">

          {/* Contact Info Box */}
          <div className="contact-info-box">
            <h2>Get in Touch</h2>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                1234 Street Name, City, State, 12345
              </li>
              <li>
                <i className="fas fa-phone"></i>
                (123) 456-7890
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                info@yourcompany.com
              </li>
              <li>
                <i className="fas fa-clock"></i>
                Mon - Fri: 9am - 5pm
              </li>
            </ul>
          </div>

          {/* Contact Form Box */}
          <div className="contact-form-box">
            <h2>Send a Message</h2>
            <form>
              <input type="text" name="name" placeholder="Your name" required />
              <input type="tel" name="phone" placeholder="Your mobile number" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea rows="5" name="message" placeholder="Write your suggestion..." required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
