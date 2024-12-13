"use client"

import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo>
        <span>M</span>
      </Logo>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/Experience">Experience</a>
        <a href="/Porfolio">Portfolio</a>
        <a href="/About">About</a>
      </NavLinks>
    </Nav>
  );
};

export default Header;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2d2d2d; /* Dark background as per UI */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #5ff542; /* Neon green logo */
  span {
    display: inline-block;
    border: 2px solid #5ff542;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Playfair Display', serif; /* Use Playfair Display for the logo font */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    font-size: 1rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #5ff542; /* Neon green on hover */
    }
  }
`;
