import React, { useContext } from 'react';
// Components
import Project from '../components/project/Project';
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'; 
import useDocumentTitle from '../hooks/useDocumentTitle';

const Projects = () => {
  const { languageData } = useContext(LanguageContext);
  useDocumentTitle(languageData.title?.projects);

  return(
    <main>
        <Project />
    </main>
  )
}

export default Projects;