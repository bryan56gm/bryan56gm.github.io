import styled from "styled-components";
// Styled Components
import { Section } from "../../styles/base/Section.styled";
// Responsive
import device from "../../styles/responsive/breakpoints";

const Touch = styled(Section)`
  max-width: 1000px; 
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 4rem 3rem;
  padding-bottom: 0;
  margin-bottom: 30px;
  min-height: calc(100vh - var(--header-height));

  ${device.laptop`
    flex-direction: row-reverse;
    margin-bottom: 0;
    width: 90%;
  `}
`

export { Touch };