import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'; // Import icons
import '../style/Header.css';  // Updated path

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PETS CREW</div>
      <nav className="nav">
        <a href="/">Shop</a>
        <a href="/book-appointment">Book Appointment</a>
        <a href="/check-appointment">Check Appointment</a>
        <a href="/our-story">Our Story</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="icons">
        <a href="/account">
          <FontAwesomeIcon icon={faUser} className="icon profile-icon" />
        </a>
        <a href="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="icon cart-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
