import React from 'react';
import '../style/EmailSignup.css'; // Custom styles for this section

const EmailSignup = () => {
    return (
      <div className="email-signup-section">
        <h2>Make Your Pet Happy Now</h2>
        <p>Don’t miss a thing. Sign up to receive news and updates.</p>
        <form className="email-form">
          <input type="email" placeholder="Email Address" className="email-input" />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    );
  };

export default EmailSignup;
