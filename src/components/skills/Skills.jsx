import React, { useContext } from 'react'
// ShortID
import { generate as id } from 'shortid';
// Styled Component
import { Section, SectionTitleH2 } from "../../styles/base/Section.styled";
import { Container } from '../../styles/base/Container.styled';
// Component
import { SkillsArticles } from './Skills.styled';
import Article from './Article';
// Context 
import { LanguageContext } from '../../contexts/LanguageContext';

const Skills = () => {
    const { languageData } = useContext(LanguageContext);

    const articles = [
        {   
            title: languageData.skills?.subtitle1, 
            images: ["HTML", "CSS", "Pug", "SASS"] 
        },
        {   
            title: languageData.skills?.subtitle2, 
            images: ["C", "Java", "Python", "JavaScript"] 
        },
        {   
            title: languageData.skills?.subtitle3, 
            images: ["NodeJS", "Flask", "React", "Gulp"] 
        },
        {   
            title: languageData.skills?.subtitle4, 
            images: ["SQL", "MySQL"] 
        },
        {   
            title: languageData.skills?.subtitle5, 
            images: ["Git", "GitHub"] 
        },
        {
            title: languageData.skills?.subtitle6, 
            images: ["AdobeXD", "Figma", "Illustrator", "Photoshop"] 
        },
    ]

    return(
        <Section>
            <Container>
                <SectionTitleH2>{languageData.skills?.title}</SectionTitleH2>
                <SkillsArticles>
                    {
                        articles.map((article)  => (
                            <Article key={id()} title={article.title} images={article.images} />
                        ))
                    }
                </SkillsArticles>
            </Container>
        </Section>
    )
}

export default Skills;
