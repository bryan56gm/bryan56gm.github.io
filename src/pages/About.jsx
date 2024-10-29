import React, { useState, useRef } from 'react';
// Components
import Description from '../components/description/Description';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';
import AboutButtons from '../components/aboutButtons/AboutButtons';

const About = () => {
  const dynamicContentRef = useRef(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <main>
      <Description />
      <AboutButtons dynamicContentRef={dynamicContentRef} setSelectedComponent={setSelectedComponent} />

      <div ref={dynamicContentRef}>
        {selectedComponent === 'experience' && <Experience />}
        {selectedComponent === 'skills' && <Skills />}
      </div>
    </main>
  );
};

export default About;
