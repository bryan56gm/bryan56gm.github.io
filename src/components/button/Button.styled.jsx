import styled from "styled-components";
// Responsive
import device from '../../styles/responsive/breakpoints';

const ButtonBox = styled.button`
    position: relative;
    font-size: 13px;
    background: linear-gradient(135deg, #fff 0%, #ededee 29%, #000000 95%);
    padding: 15px;
    padding-right: 3rem;
    border-radius: 20px;
    overflow: hidden;
    font-weight: bold;
    border: 2px solid black;
    transition: transform .7s;
    box-shadow: 0 4px 1px -1px #FD7E62;
    color: #000000;
    ${device.laptop`
        font-size: 16px;
        padding-right: 3.8rem;
    `}
    
    &:hover{
        box-shadow: 0 4px 1px -1px #f3502c;
        transform: translateY(-0.3rem);
    }
`;

const ButtonWrap = styled.div`
    position: absolute;
    top: -1px;
    right: -2px;
    height: 105%;
    filter: drop-shadow(-2px 0px 0px black);
    width: 3.4rem;
    overflow: hidden;
    ${device.laptop`
        width: 4.23rem;
    `}
`;

const ButtonShape = styled.div`
    height: 100%;
    background: radial-gradient(circle, rgba(255,73,33,1) 60%, #ff937a 100%);
    clip-path: polygon(98.387% 97.917%, 1.613% 97.917%, 50% 2.083%, 98.387% 2.083%);
    
    display: grid;
    place-items: center;
    
`;

const ButtonIcon = styled.img`
    width: 20px;
    margin-left: .7rem;
    
    ${device.laptop`
        margin-left: 1rem;
        width: 27px;
    `}
`;

export { ButtonBox, ButtonWrap, ButtonShape, ButtonIcon };
