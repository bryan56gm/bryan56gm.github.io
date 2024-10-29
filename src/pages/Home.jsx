import React, { useContext } from 'react';
// Components
import Hero from '../components/hero/Hero';
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'; 
// Hooks
import useDocumentTitle from '../hooks/useDocumentTitle';

const Home = () => {
  const { languageData } = useContext(LanguageContext);
  useDocumentTitle(languageData.title?.home);

  return(
    <main>
        <Hero />
    </main>
  )
}

export default Home;