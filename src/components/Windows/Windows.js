import React from 'react';
import styled from 'styled-components';
import Dockbar from '../Dockbar/Dockbar';

const StyledWindows=styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/assets/wallpaper/구름.bmp');
    background-repeat: no-repeat;
    background-size: cover;
`

const Windows = () => {
    return (
        <StyledWindows>
            <h2>Windows페이지</h2>
            <Dockbar/>
        </StyledWindows>
    );
};

export default Windows;