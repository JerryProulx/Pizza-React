import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../../Styles/colors';
import { Title } from '../../Styles/title';

const NavbarStyle = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: #fff;
    text-shadow: 1px 1px 4px black;
`

const Navbar = () => {
    return (
        <NavbarStyle>
            <Logo>
                SliceLine 🍕
            </Logo>
        </NavbarStyle> 
    )
}

export default Navbar;