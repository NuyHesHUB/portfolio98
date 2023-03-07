import React from 'react';
import styled from 'styled-components';

import Docktime from './Docktime';

const StyledDockbar = styled.div`
    width: 100vw;
    height: 30px;
    position: fixed;
    bottom: 0;
    padding: 3px;
    background-color: rgb(195, 199, 203);
    box-shadow: 0 0 0 2px rgba(255, 255, 255);
`;

const Dockbar = () => {
    return (
        <StyledDockbar>
            styledDockbar
            <Docktime/>
        </StyledDockbar>
    );
};

export default Dockbar;