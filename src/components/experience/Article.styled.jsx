import styled from "styled-components";

const ArticleBox = styled.div`
    display: grid;
    row-gap: .5rem;
    border-bottom: 1px dashed var(--first-color);
    padding-block: 2rem;

    a{
        width: max-content;
    }

    p{
        margin: 0;
    }
`

const ArticleTitle = styled.h3`
    color: var(--first-color);
    font-weight: 600;
    font-size: 1.3rem;
`

const ArticleText = styled.p`

`

const ArticleTime = styled.p`
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;


`

const ArticleTimeSpan = styled.span`
    color: var(--first-color);
`

export { ArticleBox, ArticleTitle, ArticleText, ArticleTime, ArticleTimeSpan }
