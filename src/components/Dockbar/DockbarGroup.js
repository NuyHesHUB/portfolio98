import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

/* import start from '../../assets/dockbar-icon/start.png' */
import start from '../../assets/dockbar-icon/startlogo.png'
import Button from '../Button'

import { startButtonClicked, openNotepad, openResume, openAbout} from '../../store/actions/actions';

import notepadImg from '../../assets/dockbar-icon/notepad.png'
import resumeImg from '../../assets/dockbar-icon/Myresume.png'
import aboutImg from '../../assets/dockbar-icon/about.png'


const StyledDockbarGroup=styled.div`
    height: 100%;
    display: inline-block;
`
const StyledGroup = styled.div`
    height: 100%;
    display: flex;
`;

/* console.log(Frame); */
/* console.log(onFullsize); */

function DockbarGroup({showStart, notepad, resume, about, onStartClick, onNotepadClick, onResumeClick, onAboutClick}){
    /* console.log(resume.maximized); */
    const notepadButton = notepad.show?
    <Button
        id="notepad-button"
        pressed={!notepad.minimized && !notepad.blurred}
        clicked={()=> onNotepadClick()}
        /* clicked={()=> {
            onNotepadClick();
            if(resume.maximized===true){
                console.log('오오오');
            }
        }} */
    >
        <div>
            <img src={notepadImg} alt="notepad" /* style={{width:'20px', height:'20px'}} */   />
            <span>Untitled - 메모장</span>
        </div>
    </Button> : null;

    const resumeButton = resume.show?
    <Button
        id="resume-button"
        pressed={!resume.minimized && !resume.blurred}
        clicked={()=> onResumeClick()}
        /* clicked={()=>{
            if(resume.maximized===true){
                onResumeClick()
                console.log('트루??');
                
            }else{
                console.log('펄스??');
                resume.maximized=true;
                onResumeClick()
            }
        }
        } */
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
    >
        <div>
            <img src={aboutImg} alt="about"/>
            <span>about</span>
        </div>
    </Button> : null;
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
                        <img 
                            src={start} 
                            alt="start"
                            style={{width:'22px',height:'22px', marginTop:'2px'}}
                        />
                        <b>시작</b>
                    </div>
                </Button>
                {notepadButton}
                {resumeButton}
                {aboutButton}
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
      about: state.about
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onStartClick: () => dispatch(startButtonClicked()),
      onNotepadClick: () => dispatch(openNotepad()),
      onResumeClick: () => dispatch(openResume()),
      onAboutClick: ()=> dispatch(openAbout(),)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DockbarGroup);