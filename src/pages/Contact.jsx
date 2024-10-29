import React, { useContext } from 'react';
// Components
import Address from '../components/address/Address';
import Form from '../components/form/Form';
// Styled Components
import { Touch } from '../components/touch/Touch.styled';
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'; 
// Hooks
import useDocumentTitle from '../hooks/useDocumentTitle';

const Contact = () => {
  const { languageData } = useContext(LanguageContext);
  useDocumentTitle(languageData.title?.contact);

  return(
    <main>
      <Touch>
        <Address />
        <Form />
      </Touch>
    </main>
  )
}

export default Contact;