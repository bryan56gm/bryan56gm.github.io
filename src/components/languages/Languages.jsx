import React from 'react';
// Styled Componets
import { LanguageBox, LanguageCurrent, LanguageFlag, LanguageArrow, LanguageText, LanguageList, LanguageItem, LanguageItemText } from './Languages.styled';
// Hooks
import useLanguage from '../../hooks/useLanguage';

const Languages = () => {
    const { selectedLanguage, changeLanguage } = useLanguage();

    const handleLanguageItemClick = (language) => {
        changeLanguage(language);
    };

    return (
        <LanguageBox>
            <LanguageCurrent>
                <LanguageFlag src={`/assets/icons/flag-${selectedLanguage}.svg`} alt={`Icon flag ${selectedLanguage}`} />
                <LanguageText>{selectedLanguage === 'es' ? 'Esp' : 'Ing'}</LanguageText>
                <LanguageArrow src="/assets/icons/arrow-down.svg" alt="Icon arrow down" />
            </LanguageCurrent>

            <LanguageList>
                <LanguageItem onClick={() => handleLanguageItemClick('es')}>
                    <LanguageFlag src="/assets/icons/flag-es.svg" alt="Icon flag es" />
                    <LanguageItemText>Esp</LanguageItemText>
                </LanguageItem>
                <LanguageItem onClick={() => handleLanguageItemClick('en')}>
                    <LanguageFlag src="/assets/icons/flag-en.svg" alt="Icon flag en" />
                    <LanguageItemText>Ing</LanguageItemText>
                </LanguageItem>
            </LanguageList>
        </LanguageBox>
    );
};

export default Languages;
