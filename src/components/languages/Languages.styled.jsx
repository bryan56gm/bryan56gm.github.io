// Styled Components
import styled from 'styled-components';

const LanguageBox = styled.div`
    position: relative;
    &:hover  ul{
        display: grid;
    }
`
const LanguageCurrent = styled.div`
    border: 1px solid #fff;
    padding: 2px 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;
`
const LanguageFlag = styled.img`
        width: 25px;
`
const LanguageArrow = styled.img`
        width: 10px;
`
const LanguageText = styled.span`
        color: white;
`
const LanguageList = styled.ul`
    position: absolute;
    top: 100%;
    background-color: #EDEDEE;
    width: 100%;
    padding-block: .2rem;
    row-gap: .3rem;
    border-radius: 0 0rem .3rem .3rem;
    display: none;
`
const LanguageItem = styled.li`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .7rem;

    &:hover{
        background-color: #c2c2c2;
    }
`
const LanguageItemText = styled.span`
    color: black;
`

export { LanguageBox, LanguageCurrent, LanguageFlag, LanguageArrow, LanguageText, LanguageList, LanguageItem, LanguageItemText };