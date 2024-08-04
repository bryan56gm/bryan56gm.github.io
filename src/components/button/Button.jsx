import React from 'react'
// Styled Components
import { ButtonBox, ButtonWrap, ButtonShape, ButtonIcon } from './Button.styled';

const Button = ({children, onClick, icon}) => {
  
    return(
        <ButtonBox onClick={onClick}>
            {children}

            <ButtonWrap>
                <ButtonShape>
                    <ButtonIcon src={`/assets/icons/${icon}.svg`} />
                </ButtonShape>
            </ButtonWrap>
        </ButtonBox>
    )
}

export default Button;