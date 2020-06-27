import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/title';

const FoodGridStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

const FoodGrid = (props) => {
    return (
        <FoodGridStyle>
            {props.children}
        </FoodGridStyle>
    )
}

const Food = styled(Title)`
    height: 100px;
    background-image: url(${({img}) => img});
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    padding: 10px;
    font-size: 20px;
    border-radius: 7px;
    box-shadow: 0px 0px 8px 0px grey;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }
`

const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255,255,255,0.8);
    padding: 5px;
`;

export {
    FoodGrid,
    Food,
    FoodLabel
}