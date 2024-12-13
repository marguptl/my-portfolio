'use client';

import styled from 'styled-components';
import Header from '../components/Header';


const Contact = () => {
  return (
    <>
    <Header />
    <ContactSection>
      <Overlay />
      <Content>
        <SectionTitle>ABOUT ME</SectionTitle>
        <ContactText>
        Computer Science student seeking a full-time position in IT to enhance technical skills and contribute to organizational goals. Proficient in hardware/software configuration, automation scripting, and technical support. Strong communicator with effective team collaboration abilities. Experienced in developing dynamic websites that drive customer engagement and achieve business objectives. Knowledgeable in design standards and user preferences.
        </ContactText>
        <ContactInfo>
          
          <p>Tel: +1 437-557-5703</p>
        </ContactInfo>
        <SocialIcons>
            <a href="https://www.linkedin.com/in/margil-patel-41760a224/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
            </a>
        </SocialIcons>
      </Content>
    </ContactSection>
    </>
  );
};

export default Contact;

// Styled Components
const ContactSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 100vh;
  background-image: url('/images/about.png'); /* Replace with your image path */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  span {
    color: #5ff542; /* Neon green for the section number */
    font-weight: bold;
  }
`;

const ContactText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.2rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

const SocialIcons = styled.div`
  i {
    margin: 0 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #5ff542;
    }
  }
`;
