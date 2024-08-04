import React, { createContext, useState, useCallback, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [languageData, setLanguageData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selected-language') || (navigator.language.split('-')[0] === 'es' ? 'es' : 'en')
    );

    const changeLanguage = useCallback(async (language) => {
        setIsLoading(true); // Comienza la carga
        const requestJson = await fetch(`/assets/languages/${language}.json`);
        const texts = await requestJson.json();
        setLanguageData(texts);
        setSelectedLanguage(language);
        localStorage.setItem('selected-language', language);
        setIsLoading(false); // Finaliza la carga
    }, []);

    useEffect(() => {
        changeLanguage(selectedLanguage);
    }, [changeLanguage, selectedLanguage]);

    return (
        <LanguageContext.Provider value={{ languageData, selectedLanguage, changeLanguage, isLoading }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };
