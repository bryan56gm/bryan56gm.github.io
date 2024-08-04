// Styled Components
import styled from 'styled-components';
// Router
import { NavLink } from 'react-router-dom';

const Menu = styled.ul`
    background-color: rgba(0,0,0,.5);   
    backdrop-filter: blur(2px);
    padding: 6rem 15px 3rem 15px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    transform: ${({ $show }) => $show ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all .8s;
    clip-path: polygon( 60% 0%,0% 0%,0% 100%,21.839% 95.302%,35.432% 95.302%,35.432% 95.302%,44.926% 95.204%,54.003% 94.919%,62.554% 94.461%,70.47% 93.844%,77.64% 93.079%,83.955% 92.183%,89.305% 91.166%,93.581% 90.044%,96.672% 88.83%,98.47% 87.537%,100% 85.714%,100% 23.8%,100% 23.8%,99.853% 23.202%,99.414% 22.61%,98.688% 22.025%,97.681% 21.449%,96.396% 20.885%,94.84% 20.334%,93.017% 19.798%,90.932% 19.279%,88.589% 18.779%,85.995% 18.301%,74.005% 16.239%,74.005% 16.239%,71.411% 15.76%,69.068% 15.26%,66.983% 14.741%,65.16% 14.205%,63.604% 13.654%,62.319% 13.09%,61.312% 12.514%,60.586% 11.929%,60.147% 11.337%,60% 10.739%,60% 0% );
    min-height: 20rem;

    position: fixed;
    top: 0;
    left; 0;
    z-index: 100;
    top: var(--header-height);

`
const MenuItem = styled.li`
    svg{
        fill: transparent;
        stroke: white;
        height: 20px;
        stroke-width: .75px;
        display: block;
        margin-inline: auto;

        &:hover{
            stroke: var(--first-color-alt);
        }
    }

    &.projects svg{
        stroke-width: 30px;
        height: 23px;
    }

    &.contact svg{
        height: 25px;
    }
`
const MenuBack = styled(MenuItem)`
    position: absolute;
    top: 1rem;
    left: .5rem;
    padding: 5px;
    cursor: pointer;
`

const MenuLink = styled(NavLink)`
    &.active svg{
        stroke: var(--first-color);
    }
`

export { Menu, MenuItem, MenuBack, MenuLink }