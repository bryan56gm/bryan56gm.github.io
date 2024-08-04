import React from 'react';
// ShortID
import { generate as id } from 'shortid';
// Styled Components
import { ArticleTitle, ArticleList, ArticleIcon, ArticleIconContainer } from './Article.styled';

const Article = ({title, images}) => {
    const iconshadowColors = {
        HTML: '#EF652A',
        CSS: '#1572B6',
        Pug: '#A86454',
        SASS: '#CC6699',
        C: '#A8B9CC',
        Java: '#007396',
        Python: '#3776AB',
        JavaScript: '#F7DF1E',
        NodeJS: '#339933',
        Flask: '#000000',
        React: '#61DAFB',
        Gulp: '#DB4446',
        SQL: '#003B57',
        MySQL: '#4479A1',
        Git: '#F05032',
        GitHub: '#0c0c0c',
        AdobeXD: '#FF61F6',
        Figma: '#F24E1E',
        Illustrator: '#FF9A00',
        Photoshop: '#31A8FF'
    };

    return(
        <article>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleList>
                {images.map((image) => (
                    <li key={id()}>
                        <ArticleIconContainer $shadowcolor={iconshadowColors[image]}>
                            <ArticleIcon src={`/assets/icons/${image}.svg`} alt={`Icon ${image}`} />
                        </ArticleIconContainer>
                    </li>
                ))}
            </ArticleList>
        </article>
    )
}

export default Article;
