import { useContext } from "react";
// Context
import { LanguageContext } from "../../contexts/LanguageContext";
// Hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";
// Styled Components
import { ButtonsContainer } from "./ButtonsContainer.styled";
// Components
import Button from "../button/Button"

const AboutButtons = ({dynamicContentRef, setSelectedComponent}) => {
    const { languageData } = useContext(LanguageContext);
    useDocumentTitle(languageData.title?.about);

  const handleSectionChange = (component) => {
    const newComponentName = component === 'experience' ? 'experience' : 'skills';

    setSelectedComponent(newComponentName);
    setTimeout(() => {
        dynamicContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <ButtonsContainer>
        <Button icon='experience' onClick={() => handleSectionChange('experience')}>
          {languageData.buttons?.text1}
        </Button>
        <Button icon='skills' onClick={() => handleSectionChange('skills')}>
          {languageData.buttons?.text2}
        </Button>
      </ButtonsContainer>
  )
}

export default AboutButtons
