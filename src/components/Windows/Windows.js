import React, { useState, useEffect } from 'react';

/* Library */
import {connect} from 'react-redux';
/* import { Link } from 'react-router-dom'; */ /* Link test를 위해 사용 */
import styled from 'styled-components';

/* Styles */
import { Container } from '../../styles/Container';

/* Component */
import Icons from '../Icon/Icons';
import Dockbar from '../Dockbar/Dockbar';
import Notepad from './Notepad';
import Biography from './Biography';
import About from './About';
import Deleted from './Deleted';
import Profile from './Profile';
import Tutorial from './Tutorial';
import Resume from './Resume';
import Project from './Project';

/* Audio */
import startup from '../../assets/sounds/startup.mp3';

const StyledWindows=styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgb(058,110,165);
    /* background-image: 'url()';
    background-repeat: no-repeat;
    background-size: cover; */
`

function Windows({notepadVisible, biographyVisible, aboutVisible, tutorialVisible, deletedVisible, resumeVisible, projectVisible}){
    
    const [audio] = useState(new Audio(startup));

    useEffect(() => {
      window.addEventListener('contextmenu', contextDisable);
      audio.muted = true;
      audio.play();
      audio.muted = false;
      return () => {
        window.removeEventListener('contextmenu', contextDisable);
      }
      // eslint-disable-next-line
    }, []);

    function contextDisable(e){
        e.preventDefault();
    }
    
    /*----------------------------------------*\
                    link test
    \*----------------------------------------*/
    /* function linkfn(){
        window.location.href= '/loading'
        return <Link to={`/loading`}></Link>
    } */

    const notepadDisplay = notepadVisible ? <Notepad/> : null;
    const aboutDisplay = aboutVisible ? <About/> : null;
    const deletedDisplay = deletedVisible ? <Deleted/> : null ;
    const biographyDisplay = biographyVisible ? <Biography/> : null;
    const resumeDisplay = resumeVisible ? <Resume/> : null;
    const projectDisplay = projectVisible ? <Project/> : null;
    const tutorialDisplay = tutorialVisible ? <Tutorial/> : null;
    
/* ------------------------------------------------------------------- */
    /* const Fullscreen = useFullscreen(); */
    /* const { element, triggerFull, exitFull } = Fullscreen; */

    /* window.addEventListener('load',function(){
        console.log('load');
        console.log(triggerFull);
        return {triggerFull}
    }) */

    /* window.addEventListener('load',triggerFull) */
    /* const Fullscreen = useFullscreen(); */
    /* const { element, triggerFull, exitFull } = Fullscreen; (onChange); */
/* ------------------------------------------------------------------- */

    /* console.log('tutorialvisible',tutorialVisible); */

    return (
        
        <StyledWindows className='App'/*  ref={element} */ /* onClick={triggerFull} */>
            {/* <h2>Windows페이지</h2> */}
            <br/>
            <Icons/>
            {notepadDisplay}
            {biographyDisplay}
            {aboutDisplay}
            {deletedDisplay}
            {resumeDisplay}
            {projectDisplay}
            {tutorialDisplay}
            {/* ----------------------------------------- */}
            {/* <button onClick={linkfn}>test버튼</button> */}
            {/* <Link to={`/loading`}>로딩 링크</Link> */}
            {/* <Link to={`/windows`}>윈도우 링크</Link> */}
            {/* ----------------------------------------- */}
            <Profile/>
            <Dockbar styled={{zIndex:'999'}}/>
            <Container/>
        </StyledWindows>
    );
};
const mapStateToProps=(state)=>{
    return{
        shutDown: state.shutDown,
        notepadVisible: state.notepad.show,
        aboutVisible: state.about.show,
        deletedVisible: state.deleted.show,
        biographyVisible: state.biography.show,
        resumeVisible: state.resume.show,
        projectVisible: state.project.show,
        tutorialVisible: state.showTutorial,
    }
}

export default connect(mapStateToProps)(Windows);