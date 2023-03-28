import React from 'react';

/* Library */
import styled from 'styled-components';
import { connect } from 'react-redux'

/* Component */
import Button from '../Button'

/* Image */
/* import start from '../../assets/dockbar-icon/start.png' */
import start from '../../assets/dockbar-icon/startlogo.png'
import notepadImg from '../../assets/dockbar-icon/notepad.png'
import aboutImg from '../../assets/dockbar-icon/about.png'
import deletedImg from '../../assets/dockbar-icon/Delete.png'
import biographyImg from '../../assets/dockbar-icon/biography.png'
import resumeImg from '../../assets/dockbar-icon/resume.png'
import projectImg from '../../assets/dockbar-icon/project.png'

/* Action */
import { startButtonClicked, openNotepad, openBiography, openAbout, openDeleted, openResume, openProject } from '../../store/actions/actions';

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

function DockbarGroup({showStart, showTutorial, notepad, biography, about, deleted, resume, project, onStartClick, onNotepadClick, onBiographyClick, onAboutClick, onDeletedClick, onResumeClick, onProjectClick}){
    /* console.log(resume.maximized); */
    /* console.log('showStart',showStart); */

    /*----------------------------------------*\
                      notepad
    \*----------------------------------------*/
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

    /*----------------------------------------*\
                      biography
    \*----------------------------------------*/
    const biographyButton = biography.show?
        <Button
            id="biography-button"
            pressed={!biography.minimized && !biography.blurred}
            clicked={()=> onBiographyClick()}
        >
            <div>
                <img src={biographyImg} alt="biography" style={{width:'16px', height:'18px', marginRight:'2px'}}   />
                <span>자기소개서</span>
            </div>
        </Button> : null;

    /*----------------------------------------*\
                      about
    \*----------------------------------------*/
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

    /*----------------------------------------*\
                      deleted
    \*----------------------------------------*/
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

    /*----------------------------------------*\
                      resume
    \*----------------------------------------*/
    const resumeButton = resume.show?
        <Button
            id="resume-button"
            pressed={!resume.minimized && !resume.blurred}
            clicked={()=> onResumeClick()}
        >
            <div>
                <img src={resumeImg} alt="resume"/>
                <span>Resume</span>
            </div>
    </Button> : null;

    /*----------------------------------------*\
                      project
    \*----------------------------------------*/
    const projectButton = project.show?
        <Button
            id="project-button"
            pressed={!project.minimized && !project.blurred}
            clicked={()=> onProjectClick()}
        >
            <div>
                <img src={projectImg} alt="project"/>
                <span>Project</span>
            </div>
    </Button> : null;
        
    return (
        <StyledDockbarGroup>
            <StyledGroup showTutorial={showTutorial}>
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
                {biographyButton}
                {aboutButton}
                {deletedButton}
                {resumeButton}
                {projectButton}
            </StyledGroup>
        </StyledDockbarGroup>
    );
};

const mapStateToProps = (state) => {
    return {
      showStart: state.showStart,
      showModal: state.showModal,
      showTutorial: state.showTutorial,
      notepad: state.notepad,
      about: state.about,
      deleted: state.deleted,
      biography: state.biography,
      resume: state.resume,
      project: state.project
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onStartClick: () => dispatch(startButtonClicked()),
      onNotepadClick: () => dispatch(openNotepad()),
      onBiographyClick: () => dispatch(openBiography()),
      onAboutClick: ()=> dispatch(openAbout(),),
      onDeletedClick: ()=> dispatch(openDeleted()),
      onResumeClick: ()=> dispatch(openResume()),
      onProjectClick: ()=> dispatch(openProject()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DockbarGroup);