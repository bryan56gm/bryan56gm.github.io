import React from 'react';
// Styled Component
import { HeaderBox, HeaderContainer, HeaderLogo, HeaderItem } from './Header.styled';
// Components
import Languages from '../languages/Languages';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Header = () => {
    return (
        <HeaderBox>
            <HeaderContainer>
                <HeaderLogo to="/">
                    <img src="/assets/icons/Logo.png" alt="Icon Logo" />
                </HeaderLogo>

                <HeaderItem>
                    <Languages />
                    <ThemeToggle />
                </HeaderItem>
            </HeaderContainer>
        </HeaderBox>
    );
};

export default Header;
