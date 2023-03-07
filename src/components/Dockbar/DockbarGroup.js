import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import start from '../../assets/dockbar-icon/start.png'
import Button from '../Button'

import { startButtonClicked, openAbout, openNotepad } from '../../store/actions/actions';

const StyledDockbarGroup=styled.div`
    height: 100%;
    display: inline-block;
`
const StyledGroup = styled.div`
    height: 100%;
    display: flex;
`;

function DockbarGroup({showStart, onStartClick}){
    return (
        <StyledDockbarGroup>
            <StyledGroup>
                <Button
                    id="StartButton"
                    clicked={()=>onStartClick()}
                    pressed={showStart}
                    pad="0"
                >
                    <div>
                        <img src={start} alt="start"/>
                        <b>시작</b>
                    </div>
                </Button>
            </StyledGroup>
        </StyledDockbarGroup>
    );
};

const mapStateToProps = (state) => {
    return {
      showStart: state.showStart,
      about: state.about,
      notepad: state.notepad,
      showModal: state.showModal
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onStartClick: () => dispatch(startButtonClicked()),
      onAboutClick: () => dispatch(openAbout()),
      onNotepadClick: () => dispatch(openNotepad())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DockbarGroup);