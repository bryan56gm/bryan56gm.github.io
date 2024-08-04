import React, { useContext } from 'react';
// ShortID
import { generate as id } from 'shortid';
// Styled Component
import { Section, SectionTitleH2 } from '../../styles/base/Section.styled';
import { Container } from '../../styles/base/Container.styled';
// Components
import Article from './Article'; 
// Context
import { LanguageContext } from '../../contexts/LanguageContext';

const Experience = () => {
    const { languageData } = useContext(LanguageContext);
    const { experience } = languageData;

    const articles = [
        {
            title: "Kreisel Events", 
            link: "https://www.kreiselevents.com/", 
            time: `4 ${experience?.months} - 2024`,
            text: experience?.text1
        },
        {
            title: "Giriga comida Fusión", 
            link: "https://bryan56gm.github.io/giriga/", 
            time: `2 ${experience?.months} - 2023`,
            text: experience?.text2
        },
        {
            title: "Garcinstal Multiservices LTD", 
            link: "https://www.garcinstal.com/", 
            time: `3 ${experience?.months} - 2023`,
            text: experience?.text3
        },
    ]

  return(
    <Section>
        <Container>
            <SectionTitleH2>{experience?.title}</SectionTitleH2>
            {articles.map((article) => (
                <Article 
                    key={id()}
                    title={article.title}
                    link={article.link}
                    duration={experience?.duration}
                    time={article.time}
                    text={article.text}
                />
             ))}
           
        </Container>
    </Section>
  )
}

export default Experience;