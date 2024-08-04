// Styled Components
import styled from "styled-components";
// Responsive
import device from "../../styles/responsive/breakpoints";

const FormLetter = styled.div`
    background-image: url('/assets/icons/letter-mb.svg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% auto;
    min-height: 550px;
    max-width: 350px;
    width: 100%;
    margin-inline: auto;
    
    ${device.laptop`
        background-image: url('/assets/icons/letter-lp.svg');
        width: 100%;
        height: auto;
        min-height: auto;
        max-width: 100%;
        margin-top: 3rem;
    `}

    @media screen and (max-width: 390px) {
        background-size: 112%;
        min-height: 600px; 
        max-width: 450px;
    }
`

const FormContent = styled.form`
    width: 75%;
    max-width: 220px;
    margin-inline: auto;
    padding-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: .6rem;

    @media screen and (max-width: 390px) {
        max-width: 270px;
    }

    ${device.laptop`
        max-width: 450px;
        padding-top: 2.5rem;
        row-gap: 1.3rem;
    `}

    & button{
        width: 100%;
        max-width: 60%;
        padding-block: 10px;
        ${device.laptop`
            padding-block: 15px
        `}
    }
`

const FormField = styled.div`
    width: 100%;
`

const FormInput = styled.input`
    background-color: transparent;
    border: 1px solid white;
    width: 100%;
    color: white;
    padding-left: 0.5rem;
`
const FormLabel = styled.label`
    margin-bottom: .5rem;
    display: block;
`

const FormTextArea = styled.textarea`
    height: 50vw;
    max-height: 120px;
    background-color: transparent;
    border: 1px solid white;
    width: 100%;
    color: white;
    padding-left: 0.5rem;
    margin-bottom: 1rem;


    @media screen and (min-width: 390px) {
        margin-bottom: 0;
        max-height: 90px;
    }

    ${device.laptop`
        max-height: 120px;
    `}
`

export { FormLetter, FormContent, FormField, FormLabel, FormInput, FormTextArea }