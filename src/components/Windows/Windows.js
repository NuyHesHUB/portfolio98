import React, {useState, useEffect/* , useRef */} from 'react';
import {connect} from 'react-redux'

import styled from 'styled-components';

import Icons from '../Icon/Icons'
import Dockbar from '../Dockbar/Dockbar';

import Notepad from './Notepad'
import Resume from './Resume';
import About from './About'


import startup from '../../assets/sounds/startup.mp3'


const StyledWindows=styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url('/assets/wallpaper/없음.png');
    /* background-image: url('/assets/wallpaper/구름.bmp'); */
    background-repeat: no-repeat;
    background-size: cover;
`


function Windows({notepadVisible, resumeVisible, aboutVisible}){
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

    const notepadDisplay = notepadVisible ? <Notepad/> : null;
    const resumeDisplay = resumeVisible ? <Resume/> : null;
    const aboutDisplay = aboutVisible ? <About/> : null;
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
            <Dockbar/>
        </StyledWindows>
    );
};
const mapStateToProps=(state)=>{
    return{
        shutDown: state.shutDown,
        notepadVisible: state.notepad.show,
        resumeVisible: state.resume.show,
        aboutVisible: state.about.show,
    }
}

export default connect(mapStateToProps)(Windows);