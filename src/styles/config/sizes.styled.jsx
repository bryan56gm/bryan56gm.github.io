import { css } from "styled-components";
// Responsive
import device from "../responsive/breakpoints";

const SizesStyled = css`
    :root {
        /*------------ HEADER------------*/
        --header-height: 60px;

        ${device.laptop`
            --header-height: 80px;
        `}
    }
`

export { SizesStyled };