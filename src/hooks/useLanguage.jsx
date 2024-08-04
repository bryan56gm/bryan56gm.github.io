import { useContext } from 'react';
// Language Context
import { LanguageContext } from '../contexts/LanguageContext';

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
