import React, { useContext, useState, useRef, useEffect } from 'react';
// Styled Components
import styled from 'styled-components';
// Components
import Description from '../components/description/Description';
import Button from '../components/button/Button';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';
// Context
import { LanguageContext } from '../contexts/LanguageContext';

const AboutButtons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 3rem;
  padding-block: .5rem;
`;

const About = () => {
  const { languageData } = useContext(LanguageContext);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const dynamicContentRef = useRef(null);

  useEffect(() => {
    document.title = languageData.title?.about;

    if (selectedComponent) {
      dynamicContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }, [languageData, selectedComponent]);

  const handleButtonClick = (component) => {
    setSelectedComponent(prevComponent => prevComponent === component ? null : component);
    setTimeout(() => setSelectedComponent(component) , 0);
  };

  return (
    <main>
      <Description />

      <AboutButtons>
        <Button icon='experience' onClick={() => handleButtonClick('experience')}>
          {languageData.buttons?.text1}
        </Button>
        <Button icon='skills' onClick={() => handleButtonClick('skills')}>
          {languageData.buttons?.text2}
        </Button>
      </AboutButtons>

      <div ref={dynamicContentRef}>
        {selectedComponent === 'experience' && <Experience />}
        {selectedComponent === 'skills' && <Skills />}
      </div>
    </main>
  );
};

export default About;
