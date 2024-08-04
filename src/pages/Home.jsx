import React, { useContext, useEffect } from 'react';
// Components
import Hero from '../components/hero/Hero';
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'; 

const Home = () => {
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    document.title = languageData.title?.home;
  }, [languageData]);

  return(
    <main>
        <Hero />
    </main>
  )
}

export default Home;