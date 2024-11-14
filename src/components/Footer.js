import React from 'react';
import '../style/Footer.css'; // Custom styles for the footer

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Pets Crew</h3>
            <div className="footer-links">
              <a href="/shop">Shop</a>
              <a href="/our-story">Our Story</a>
              <a href="/book-appointment">Book Appointment</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div className="footer-right">
            <div className="social-media-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
export default Footer;
