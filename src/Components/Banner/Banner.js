import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
    height: 200px;
    background-image: url("img/banner.jpeg");
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
`;

const Banner = () => {
    return (
        <BannerStyle>     
        </BannerStyle>
    )
}

export default Banner;