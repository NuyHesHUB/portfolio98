import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import {StyledStart, StyledContainer, Vertical, AllPrograms, ProgramGroup} from './StyledDockbar'

import About from '../../assets/start-icon/about.png'
import Velog from '../../assets/start-icon/velog.png'
import Github from '../../assets/start-icon/github.png'
import Program from '../../assets/start-icon/program.png'
import Favorite from '../../assets/start-icon/favorite.png'
import Document from '../../assets/start-icon/document.png'
import Setting from '../../assets/start-icon/setting.png'
import Find from '../../assets/start-icon/find.png'
import Help from '../../assets/start-icon/help.png'
import Run from '../../assets/start-icon/run.png'
import LogOff from '../../assets/start-icon/logoff.png'
import ShutDown from '../../assets/start-icon/shutdown.png'
import { startMenuBlur, shutDown, openModal } from '../../store/actions/actions';

function Start({onStartMenuBlur, onShutDown, onOpenModal}) {
    const allPrograms = [
        {text: 'About', img: About, showArrow: false},
        {text: 'Velog', img: Velog, showArrow: false},
        {text: 'Github', img: Github, showArrow: false},
        {text: 'Program', img: Program, showArrow: true},
        {text: 'Favorite', img: Favorite, showArrow: true},
        {text: 'Document', img: Document, showArrow: true},
        {text: 'Setting', img: Setting, showArrow: false},
        {text: 'Find', img: Find, showArrow: false},
        {text: 'Help', img: Help, showArrow: false},
        {text: 'Run...', img: Run, showArrow: false},
        {text: 'LogOff...', img: LogOff, showArrow: false},
        {text: 'ShutDown...', img: ShutDown, showArrow: false}
    ];
    
    useEffect(()=>{
        window.addEventListener('click', startEvent);

        return()=>{
            window.removeEventListener('click', startEvent);
        }
     // eslint-disable-next-line   
    },[]);

    function startEvent(e){
        if(!document.querySelector('#Start').contains(e.target) && !document.querySelector('#StartButton').contains(e.target)) {
            onStartMenuBlur();
        }
    }
    function handleClick(text) {
        if (text === 'Shut Down...') {
          /* cursorSetter(3000); */
          setTimeout(() => {
            onShutDown();
          }, 3000);
        } else {
          onStartMenuBlur();
          onOpenModal();
        }
      }


    return (
        <StyledStart id="Start">
            <StyledContainer>
                <Vertical><span><strong>Windows</strong>98</span></Vertical>
                <AllPrograms>
                    {allPrograms.map(({text, img, showArrow}, idx)=> 
                        <ProgramGroup key={idx} onClick={()=>{handleClick(text)}}>
                            <img src={img} alt={text}/>
                            <em>{text}</em>
                            {showArrow ? <span>▶</span> : null}
                        </ProgramGroup>
                    )}
                </AllPrograms>
            </StyledContainer>
        </StyledStart>
    );
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onStartMenuBlur:()=>dispatch(startMenuBlur()),
        onShutDown:()=>dispatch(shutDown()),
        onOpenModal:()=>dispatch(openModal())
    }
}

export default connect(null, mapDispatchToProps)(Start);