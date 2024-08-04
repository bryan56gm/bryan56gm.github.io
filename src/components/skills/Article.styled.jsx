import styled from "styled-components";

const ArticleTitle = styled.h3`
    margin-bottom: 1rem;
    color: var(--first-color);
    font-weight: bold;
    font-size: 18px;
`;

const ArticleList = styled.ul`
    display: flex;
    gap: 1rem;  /* Espacio entre los íconos */
`;

const ArticleIconContainer = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    box-shadow: 0 0 35px 12px ${({ $shadowcolor }) => $shadowcolor || 'transparent'};
    box-shadow: inset 0 0 10px 5px ${({ $shadowcolor }) => $shadowcolor || 'transparent'};
    padding: .85rem;
    border-radius: 10px;
    transition: all .2s ease-in-out;

    &:hover{
        box-shadow: inset 0 0 10px 8px ${({ $shadowcolor }) => $shadowcolor || 'transparent'};
        outline: 2px solid ${({ $shadowcolor }) => $shadowcolor || 'transparent'};
    }
`;

const ArticleIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export { ArticleTitle, ArticleList, ArticleIcon, ArticleIconContainer };
