import React, { useContext, useEffect } from 'react';
// Components
import Address from '../components/address/Address';
import Form from '../components/form/Form';
// Styled Components
import styled from 'styled-components';
import { Section } from '../styles/base/Section.styled'
// Responsive
import device from '../styles/responsive/breakpoints';
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'; 

const SectionContact = styled(Section)`
  max-width: 1000px; 
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 4rem 3rem;
  padding-bottom: 0;
  margin-bottom: 30px;
  min-height: calc(100vh - var(--header-height));

  ${device.laptop`
    flex-direction: row-reverse;
    margin-bottom: 0;
    width: 90%;
`}
`
const Contact = () => {
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    document.title = languageData.title?.contact;
  }, [languageData]);

  return(
    <main>
      <SectionContact>
        <Address />
        <Form />
      </SectionContact>
    </main>
  )
}

export default Contact;