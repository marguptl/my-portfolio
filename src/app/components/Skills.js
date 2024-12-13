'use client'

import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Skills = () => {
  const skills = [
    { name: 'Python', level: '75%' },
    { name: 'JAVA', level: '70%' },
    { name: 'Microsoft SQL Server', level: '95%' },
    { name: 'Data Structures and Algorithm', level: '85%' },
    { name: 'Git', level: '80%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'HTML & CSS', level: '80%' },
  ];

  return (
    <SkillsSection>
      <Overlay />
      <Content>
        <SectionTitle>
          <span>01</span> PROFESSIONAL
        </SectionTitle>
        <Subtitle>My Knowledge Level in Software</Subtitle>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillName>{skill.name}</SkillName>
              <ProgressBar>
                <Progress level={skill.level}></Progress>
              </ProgressBar>
            </Skill>
          ))}
        </SkillsContainer>
      </Content>
    </SkillsSection>
  );
};

export default Skills;

// Styled Components
const SkillsSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 100vh; /* Ensure the section spans the full viewport height */
  display: flex; /* Enable flexbox */
  justify-content: center; /* Horizontally center content */
  align-items: center; /* Vertically center content */
  background-image: url('/images/background.png'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  color: white;

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
  z-index: 2; /* Place content above the overlay */
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    color: #5ff542; /* Neon green for the section number */
    font-weight: bold;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillName = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  width: 12 0%;
  height: 8px;
  background-color: #444;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.level}; /* Transient prop */
  height: 100%;
  background-color: #5ff542;
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`;
