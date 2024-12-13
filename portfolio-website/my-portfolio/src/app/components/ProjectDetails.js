'use client';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProjectDetails = () => {
  const { id } = useParams();

  // Add project data or fetch dynamically if needed
  const projectData = {
    '1': { title: 'Pets Crew Website', description: 'Description for Pets Crew Website', image: '/images/dog-working-laptop.avif' },
    '2': { title: 'Company Portfolio Website', description: 'Description for Company Portfolio Website', image: '/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg' },
    '3': { title: 'Project 03', description: 'Description for Project 03', image: '/images/dog-working-laptop.avif' },
  };

  const project = projectData[id];

  return (
    <ProjectPage>
      <Overlay />
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Image src={project.image} alt={project.title} />
      </Content>
    </ProjectPage>
  );
};

export default ProjectDetails;

// Styled Components for the details page
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
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
`;
