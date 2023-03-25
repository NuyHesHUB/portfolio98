import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

/* import start from '../../assets/dockbar-icon/start.png' */
import start from '../../assets/dockbar-icon/startlogo.png'
import Button from '../Button'

import { startButtonClicked, openNotepad, openResume, openAbout, openDeleted} from '../../store/actions/actions';

import notepadImg from '../../assets/dockbar-icon/notepad.png'
import resumeImg from '../../assets/dockbar-icon/Myresume.png'
import aboutImg from '../../assets/dockbar-icon/about.png'
import deletedImg from '../../assets/dockbar-icon/Delete.png'


const StyledDockbarGroup=styled.div`
    height: 100%;
    display: inline-block;
`
const StyledGroup = styled.div`
    height: 100%;
    display: flex;
    /* #StartButton{
    outline: 5px solid red
    } */
    outline: ${props=>props.showTutorial ? '5px solid red':''};
    animation: ${props => props.showTutorial ? 'tutorial1 1s infinite;' : null};
`;

/* console.log(Frame); */
/* console.log(onFullsize); */

function DockbarGroup({showStart, notepad, resume, about, deleted, onStartClick, onNotepadClick, onResumeClick, onAboutClick, onDeletedClick, showTutorial}){
    /* console.log(resume.maximized); */
    /* console.log('showStart',showStart); */
    const notepadButton = notepad.show?
        <Button
            id="notepad-button"
            pressed={!notepad.minimized && !notepad.blurred}
            clicked={()=> onNotepadClick()}
        >
            <div>
                <img src={notepadImg} alt="notepad"/>
                <span>Untitled - 메모장</span>
            </div>
        </Button> : null;

    const resumeButton = resume.show?
        <Button
            id="resume-button"
            pressed={!resume.minimized && !resume.blurred}
            clicked={()=> onResumeClick()}
        >
            <div>
                <img src={resumeImg} alt="resume" style={{width:'16px', height:'18px', marginRight:'2px'}}   />
                <span>자기소개서</span>
            </div>
        </Button> : null;


    const aboutButton = about.show?
        <Button
            id="about-button"
            pressed={ !about.blurred }
            clicked={()=> onAboutClick()}
            showTutorial={showTutorial}
        >
            <div>
                <img src={aboutImg} alt="about"/>
                <span>about</span>
            </div>
        </Button> : null;

    const deletedButton = deleted.show?
        <Button
            id="deleted-button"
            pressed={!deleted.minimized && !deleted.blurred}
            clicked={()=> onDeletedClick()}
        >
            <div>
                <img src={deletedImg} alt="deleted"/>
                <span>휴지통</span>
            </div>
        </Button> : null;
        
    return (
        <StyledDockbarGroup>
            <StyledGroup
                showTutorial={showTutorial}
            >
                <Button
                    id="StartButton"
                    clicked={()=>onStartClick()}
                    pressed={showStart}
                    pad="0"
                    
                >
                    <div>
                        <img 
                            src={start} 
                            alt="start"
                            /* style={{width:'28px',height:'22px', marginTop:'2px'}} */
                            style={{width:'35px',height:'25px', marginTop:'2px'}}
                        />
                        <b>시작</b>
                    </div>
                </Button>
                {notepadButton}
                {resumeButton}
                {aboutButton}
                {deletedButton}
            </StyledGroup>
        </StyledDockbarGroup>
    );
};

const mapStateToProps = (state) => {
    return {
      showStart: state.showStart,
      notepad: state.notepad,
      showModal: state.showModal,
      resume: state.resume,
      about: state.about,
      deleted: state.deleted,
      showTutorial: state.showTutorial,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onStartClick: () => dispatch(startButtonClicked()),
      onNotepadClick: () => dispatch(openNotepad()),
      onResumeClick: () => dispatch(openResume()),
      onAboutClick: ()=> dispatch(openAbout(),),
      onDeletedClick: ()=> dispatch(openDeleted()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DockbarGroup);