import React from 'react';
// React Router DOM
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// Normalize
import './styles/normalize.css';
// Global Styled Componets
import { GlobalStyles } from './styles/base/Global.styled';
// Components
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import NoMatch from './components/noMatch/NoMatch';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// Language Context
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <LanguageProvider>
          <Header />
          <Navigation />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </LanguageProvider>
      </Router>
    </>
  );
};

export default App;
