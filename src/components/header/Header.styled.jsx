// Styled Components
import styled from 'styled-components';
import { Container } from '../../styles/base/Container.styled';
// Router
import { Link } from 'react-router-dom';

const HeaderBox = styled.header`
    border-bottom: 2px solid #000;
    height: var(--header-height);
`
const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

const HeaderLogo = styled(Link)`
        width: 80px;

        img{
            display: block;
        }
`

const HeaderItem = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 1rem;
    align-items: center;
    cursor: pointer;
`
export { HeaderBox, HeaderContainer, HeaderLogo, HeaderItem}