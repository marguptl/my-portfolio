'use client'

import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title>
          I'M <Highlight>MARGIL</Highlight> PATEL<span></span>
        </Title>
        <Subtitle>UX/UI Designer & Web Developer</Subtitle>
      </Content>
      <ImageContainer>
        {/* Replace with your image URL */}
        <Image src="/images/background.png" alt="Robert Caro" />
      </ImageContainer>
    </HeroSection>
  );
};

export default Hero;

// Styled Components
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  height: 100vh;
  background-color: #2d2d2d; /* Dark background matching the header */
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  font-family: 'Playfair Display', serif;

  span {
    color: #5ff542; /* Neon green dot */
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Highlight = styled.span`
  color: #5ff542; /* Neon green for the name */
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px; /* Optional for rounded corners */
  filter: grayscale(50%); /* Optional for grayscale effect */
`;
