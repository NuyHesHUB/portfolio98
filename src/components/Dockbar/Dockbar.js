import React from 'react';

/* Library */
import styled from 'styled-components';
import {connect} from 'react-redux'

/* Component */
import Docktime from './Docktime';
import Start from './Start';
import DockbarGroup from './DockbarGroup';

const StyledDockbar = styled.div`
    width: 100vw;
    height: 30px;
    position: fixed;
    bottom: 0;
    padding: 3px;
    background-color: rgb(195, 199, 203);
    box-shadow: 0 0 0 2px rgba(255, 255, 255);
    z-index: ${props=>props.showTutorial ? '999' : ''};
`;

function Dockbar({showStart, showTutorial}) {
    return (
        <StyledDockbar showTutorial={showTutorial}>
            <DockbarGroup/>
                {showStart ? <Start /> : null}
            <Docktime/>
        </StyledDockbar>
    );
};

const mapStateToProps = (state) => {
    return {
      showStart: state.showStart,
      showTutorial: state.showTutorial
    }
  }

export default connect(mapStateToProps)(Dockbar);