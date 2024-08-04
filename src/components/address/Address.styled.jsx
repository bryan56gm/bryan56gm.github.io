// Styled Components
import styled from "styled-components";
// Config
import device from "../../styles/responsive/breakpoints";

const AddressBox = styled.address`
    width: max-content;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    ${device.laptop`
        max-width: 240px;
        width: 100%;
    `}

    a{
        color: white;
        &:hover{
            color: var(--first-color-alt);
        }
    }
`
const AddressContainer = styled.div`
    
`

const AddressItem = styled.div`
    display: flex;
    column-gap: 1rem;
    &:hover img{
        transform: translateX(-5px);
    }
`

const AddressIcon = styled.img`
    width: 20px;
    transition: transform .5s;
`

const AddressLink = styled.a`
    color: white;
`

const AddressCopy = styled.p`
    font-size: 14px;
`

export { AddressBox, AddressContainer, AddressItem, AddressIcon, AddressLink,AddressCopy }