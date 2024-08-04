// Styled Component
import styled from 'styled-components';
import { Container } from '../../styles/base/Container.styled';
import { SectionTitleH1 } from '../../styles/base/Section.styled';
// Responsive
import device from '../../styles/responsive/breakpoints';
// Keyframes
import '../../styles/keyframes/floating.css'

const HeroContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1.8rem;
    
    ${device.laptop`
        flex-wrap: nowrap;
        margin-top: 4rem;
        justify-content: space-around;
        align-items: center;
    `}
`;

const HeroAvatar = styled.img`
    height: 100vw;
    max-height: 380px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
    animation: floating ease-in-out 4s infinite;
    ${device.laptop`
        max-height: 450px;
    `}
`

const HeroData = styled.div`
    text-align: center;
    ${device.laptop`
        text-align: start;
        order: -1;
        max-width: 850px;
    `}
`;

const HeroTitle = styled(SectionTitleH1)`
    margin-bottom: 14px;
    text-transform: uppercase;
    font-size: clamp(19px, 3vw, 40px);

    ${device.laptop`
        text-align: start;
        margin-bottom: 40px;
    `}
`;

const HeroSubtitle = styled.h2`
    font-size: clamp(20px, 3vw, 26px);
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: bold;
    ${device.laptop`
        margin-bottom: 40px;
    `}
`;

const HeroText = styled.p`
    margin-bottom: 30px;
    ${device.laptop`
        margin-bottom: 46px;
    `}
`;

export { HeroContainer, HeroAvatar, HeroData, HeroTitle, HeroSubtitle, HeroText }