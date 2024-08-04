import React, {useContext} from 'react'
// Styled Component
import { Container } from '../../styles/base/Container.styled';
import { Section, SectionTitleH1 } from "../../styles/base/Section.styled";
import { DescriptionText } from './Description.styled';
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext';

const Description = () => {
  const { languageData } = useContext(LanguageContext);

  return(
    <Section>
        <Container>
            <SectionTitleH1>{languageData.description?.title}</SectionTitleH1>
            <DescriptionText>{languageData.description?.text1}</DescriptionText>
            <DescriptionText>{languageData.description?.text2}</DescriptionText>
        </Container>
    </Section>
  )
}

export default Description;