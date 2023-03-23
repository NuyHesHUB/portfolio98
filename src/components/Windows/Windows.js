import React, {useState, useEffect/* , useRef */} from 'react';
import {connect} from 'react-redux'

import styled from 'styled-components';

import Icons from '../Icon/Icons'
import Dockbar from '../Dockbar/Dockbar';

import Notepad from './Notepad'
import Resume from './Resume';
import About from './About'
import Deleted from './Deleted'

import Profile from './Profile';


import startup from '../../assets/sounds/startup.mp3'
import { Container } from '../../styles/Container';

import { Link } from 'react-router-dom';



const StyledWindows=styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgb(058,110,165);
    /* background-image: 'url()';
    background-repeat: no-repeat;
    background-size: cover; */
`


function Windows({notepadVisible, resumeVisible, aboutVisible, deletedVisible}){
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
    function linkfn(){
        /* window.location.href= '/loading' */
        /* return <Link to={`/loading`}></Link> */
    }

    const notepadDisplay = notepadVisible ? <Notepad/> : null;
    const resumeDisplay = resumeVisible ? <Resume/> : null;
    const aboutDisplay = aboutVisible ? <About/> : null;
    const deletedDisplay = deletedVisible ? <Deleted/> : null ;
/*     const Fullscreen = useFullscreen();
    const { element, triggerFull, exitFull } = Fullscreen; */

    /* window.addEventListener('load',function(){
        console.log('load');
        console.log(triggerFull);
        return {triggerFull}
    }) */
    /* window.addEventListener('load',triggerFull) */
/* ------------------------------------------------------------------- */
    
    /* const Fullscreen = useFullscreen();
    const { element, triggerFull, exitFull } = Fullscreen; *//* (onChange); */
    

    return (
        
        <StyledWindows className='App'/*  ref={element} */ /* onClick={triggerFull} */>
            {/* <h2>Windows페이지</h2> */}
            <br/>
            <Icons/>
            {notepadDisplay}
            {resumeDisplay}
            {aboutDisplay}
            {deletedDisplay}
            <button onClick={linkfn}>test버튼</button>
            <Link to={`/loading`}>로딩 링크</Link>
            <Link to={`/windows`}>윈도우 링크</Link>
            <Profile/>
            <Dockbar/>
            <Container/>
        </StyledWindows>
    );
};
const mapStateToProps=(state)=>{
    return{
        shutDown: state.shutDown,
        notepadVisible: state.notepad.show,
        resumeVisible: state.resume.show,
        aboutVisible: state.about.show,
        deletedVisible: state.deleted.show,
    }
}

export default connect(mapStateToProps)(Windows);