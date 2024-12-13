'use client';

import styled from 'styled-components';

const Experience = () => {
  const experiences = [
    {
      year: ' 01/2021- 12/2021',
      company: 'Royal Technosoft',
      role: 'Front-End Developer',
    },
    {
      year: '01/2020 - 02/2020',
      company: 'Hackathon DA-IICT',
      role: 'Freelancer',
    },
    {
      year: ' 01/2023 - 12/2023',
      company: 'Seneca Polytechnic',
      role: 'Tutor and welfare volunteer',
    },
    {
      year: '01/2023 - 12/2023',
      company: 'Seneca Polytechnic',
      role: 'Student Representative',
    },
  ];

  return (
    <TimelineSection>
      <Overlay />
      <Content>
        <SectionTitle>
          <span>03</span> EXPERIENCE
        </SectionTitle>
        <TimelineContainer>
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <Dot />
              <ContentBox>
                <Year>{experience.year}</Year>
                <Company>{experience.company}</Company>
                <Role>{experience.role}</Role>
              </ContentBox>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Content>
    </TimelineSection>
  );
};

export default Experience;

// Styled Components
const TimelineSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex; /* Use flexbox to center content */
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  background-image: url('/images/download.png'); 
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
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
  margin-bottom: 2rem;

  span {
    color: #5ff542; /* Neon green for the section number */
    font-weight: bold;
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid #5ff542;

  @media (max-width: 768px) {
    padding-left: 1rem;
    margin: 0 auto; /* Ensure proper alignment on smaller screens */
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const Dot = styled.div`
  position: absolute;
  left: -11px;
  top: 10px;
  width: 16px;
  height: 16px;
  background-color: #5ff542;
  border-radius: 50%;
  border: 2px solid white;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #2c2c2c;
  padding: 1rem;
  border-radius: 8px;
`;

const Year = styled.h3`
  font-size: 1rem;
  color: #5ff542;
  font-weight: bold;
  margin: 0;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

const Role = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
`;
