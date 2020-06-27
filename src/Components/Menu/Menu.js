import React from 'react';
import styled from 'styled-components';
import { foodItems } from '../../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';


const MenuStyle = styled.div`
    margin: 0px 400px 50px 20px;
    height: 1000px;
`

const Menu = () => {
    return (
        <MenuStyle>
            <h1>Menu</h1>
            <FoodGrid>
            {foodItems.map( food => (
                <Food img={food.img}>
                    <FoodLabel>{food.name}</FoodLabel>
                </Food>
            ))}
            </FoodGrid>
        </MenuStyle>
    )
}

export default Menu;