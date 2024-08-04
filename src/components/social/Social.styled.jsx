// Styled Component
import styled from 'styled-components';
// Responsive
import device from '../../styles/responsive/breakpoints';

const SocialMenu = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
    ${device.laptop`
        justify-content: start;
    `}
`;

const SocialLink = styled.a`
    & svg {
        fill: #EDEDEE;
        transition: fill, transform .5s;
        &:hover{
            fill: #FF2E00;
            transform: translateY(-5px);
        }
    }
`;

export { SocialMenu, SocialLink }