import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavLinkProps {
    src: React.ReactNode;
}

const NavList = styled.ul`
    display: flex;
    gap: 10px;

`
const NavLink = styled(Link)<NavLinkProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: var(--default-button-paddings);
    border: 1px solid var(--color-accent-dark-100);
    border-radius: var(--default-border-radius);
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    font-weight: 500;

    > i {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            width: 18px;
            height: 18px;
            fill: var(--color-accent-green);
        }
    }
`
export { NavList, NavLink }