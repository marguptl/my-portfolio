'use client';

import styled from 'styled-components';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';

const Project1 = () => {
  const router = useRouter();

  // Sample images for the grid
  const projects = [
    { id: 1, title: 'Project 1', image: '/images/portfolio2.jpg' },
    { id: 2, title: 'Project 2', image: '/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg' },
    { id: 3, title: 'Project 3', image: '/images/portfolio.jpg' },
  ];

  return (
    <>
      <Header />
      <ProjectPage>
        <Overlay />
        <Content>
          <BackButton onClick={() => router.back()}>← Back</BackButton>
          <Title>Company Portfolio Website</Title>
          <Description>
          I developed a responsive and user-friendly website for my portfolio to showcase my skills, projects, and professional achievements. This project features a modern design with smooth navigation, a fully functional contact form, and dynamic sections highlighting my work. The website is built using React, CSS, and JavaScript, incorporating a robust backend with Node.js and Express to handle email submissions for user inquiries. Each section is designed with a focus on aesthetics and functionality, including an interactive slider for featured projects and a detailed about-me section. This project demonstrates my proficiency in full-stack development, UI/UX design, and responsiveness for seamless accessibility across devices.          
          </Description>
          <GitHubLink href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </GitHubLink>
          <GridPage>
        <GridContainer>
          {projects.map((project) => (
            <GridItem key={project.id} onClick={() => router.push(`/project/${project.id}`)}>
              <GridImage src={project.image} alt={project.title} />
              
            </GridItem>
          ))}
        </GridContainer>
      </GridPage>
        </Content>
      </ProjectPage>
    </>
  );
};

export default Project1;

// Styled Components
const ProjectPage = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #1e1e2f;
  color: white;
  padding: 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1e1e2f;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const BackButton = styled.button`
  position: absolute;
  
  left: 2rem;
  padding: 0.5rem 1rem;
  background-color: #5ff542;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: #4ade3d;
  }
`;

const Title = styled.h1`
  margin-top: 5%;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-top: 2%;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

// Styled Components
const GridPage = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #1e1e2f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const GitHubLink = styled.a`
  display: inline-block;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #24292e;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #333;
  }
`;
