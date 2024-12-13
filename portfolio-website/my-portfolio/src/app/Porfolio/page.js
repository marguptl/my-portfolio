'use client'

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

import Link from 'next/link';

const Portfolio = () => {
    const projects = [
        {
          id: 1,
          title: 'Pets Crew Website',
          image: '/images/dog-working-laptop.avif',
          link: '/PetsCrew',
        },
        {
          id: 2,
          title: 'Company Portfolio Website',
          image: '/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
          link: '/Company',
        },
        {
          id: 3,
          title: 'Unit Convertor',
          image: '/images/calculator.jpg',
          link: '/Calculator',
        },
        {
            id: 4,
            title: 'Share Prompt',
            image: '/images/share.png',
            link: '/SharePrompt',
        },
      ];
  
  
  const [isClient, setIsClient] = useState(false);
    useEffect(() => {
    setIsClient(true);
    }, []);

  return (
    <>
    <Header />
    <PortfolioSection>
       <Overlay />
      <Content>
        <SectionTitle>
          <span>02</span> PORTFOLIO
        </SectionTitle>
        <Subtitle>My Latest Work. </Subtitle>
        <ProjectsContainer>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
            <Link href={project.link}>
                <ProjectImage src={project.image} alt={project.title} />
                
            </Link>
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectCard>
          ))}
        </ProjectsContainer>
      </Content>
    </PortfolioSection>
    </>
  );
};

export default Portfolio;

// Styled Components
const PortfolioSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 100vh;
  background-image: url('/images/download.png'); /* Path to the background image */
  background-size: cover;
  background-attachment: fixed; /* Makes the background continuous */
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
// Overlay
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
  z-index: 1;
`;

// Content Wrapper
const Content = styled.div`
  position: relative;
  z-index: 2; /* Place content above the overlay */
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-left: 42%;
  margin-top: 1rem;

  span {
    color: #5ff542; /* Neon green for the section number */
    font-weight: bold;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  margin-left: 42%;
  font-family: 'Playfair Display', serif;

  a {
    color: #5ff542;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #28a745; /* Slightly different green on hover */
    }
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  transition: transform 0.3s ease-in-out;
`;

const ProjectTitle = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  width: 100%;
  text-align: center;
 
  color: white;
  font-weight: bold;
  padding: 1rem 0;
  font-size: 1.2rem;
  
`;