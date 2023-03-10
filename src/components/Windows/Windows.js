import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'

import styled from 'styled-components';

import Icons from '../Icon/Icons'
import Dockbar from '../Dockbar/Dockbar';
import Notepad from './Notepad'




import startup from '../../assets/sounds/startup.mp3'




const StyledWindows=styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/assets/wallpaper/구름.bmp');
    background-repeat: no-repeat;
    background-size: cover;
`


function Windows({notepadVisible}){
    const [audio] = useState(new Audio(startup));

    useEffect(() => {
      window.addEventListener('contextmenu', contextDisable);
      audio.play();
      return () => {
        window.removeEventListener('contextmenu', contextDisable);
      }
      // eslint-disable-next-line
    }, []);

    function contextDisable(e){
        e.preventDefault();
    }
    const notepadDisplay = notepadVisible ? <Notepad/> : null;

    return (
        
        <StyledWindows className='App'>
            <h2>Windows페이지</h2>
            <Icons/>
            {notepadDisplay}
            <Dockbar/>
        </StyledWindows>
    );
};
const mapStateToProps=(state)=>{
    return{
        shutDown: state.shutDown,
        notepadVisible: state.notepad.show
    }
}

export default connect(mapStateToProps)(Windows);