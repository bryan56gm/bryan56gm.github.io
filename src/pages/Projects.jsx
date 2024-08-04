import React, { useContext, useEffect } from 'react';
// Components
import Project from '../components/project/Project';
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'; 

const Projects = () => {
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    document.title = languageData.title?.projects;
  }, [languageData]);

  return(
    <main>
        <Project></Project>
    </main>
  )
}

export default Projects;