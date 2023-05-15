import React, {useEffect} from 'react';

/* Library */
import {connect} from 'react-redux'
import {StyledStart, StyledContainer, Vertical, AllPrograms, ProgramGroup} from './StyledDockbar'

/* Image */
import About from '../../assets/start-icon/about1.png';
import Velog from '../../assets/start-icon/velog.png';
import Github from '../../assets/start-icon/github.png';
import Project from '../../assets/start-icon/project.png';
import Program from '../../assets/start-icon/program.png';
import Help from '../../assets/start-icon/help.png';
import Run from '../../assets/start-icon/run.png';
import LogOff from '../../assets/start-icon/logoff.png';
import ShutDown from '../../assets/start-icon/shutdown.png';
/* import Suwon from '../../assets/start-icon/suwon.png'; */
/* import May from '../../assets/start-icon/mayfield.png'; */
/* import Zoocinema from '../../assets/start-icon/movie.png'; */

/* Actions */
import { startMenuBlur, shutDown, openAbout, openTutorial, openProject} from '../../store/actions/actions';

function Start({onStartMenuBlur, onOpenAbout, onOpenTutorial, onOpenProject}) {
    const allPrograms = [
        {text: 'About', img: About, showArrow: false},
        {text: 'Velog', img: Velog, showArrow: false},
        {text: 'Github', img: Github, showArrow: false},
        /* {text: 'Project 01 : 수원 관공서', img: Suwon, showArrow: false}, */
        /* {text: 'Project 02 : 메이필드 호텔', img: May, showArrow: false}, */
        /* {text: 'Project 03 : 영화 페이지', img: Zoocinema, showArrow: false}, */
        /* {text: 'Project 04 : 커뮤니티', img: Zoocinema, showArrow: false}, */
        /* {text: 'Project 05 : 채팅', img: Zoocinema, showArrow: false}, */
        /* {text: 'Project 06 : 투두 리스트', img: Zoocinema, showArrow: false}, */
        /* {text: 'Project 07 : PORTFOLIO98', img: Zoocinema, showArrow: false}, */
        /* {text: 'Project 08 : ChatGPT 페이지', img: Zoocinema, showArrow: false}, */
        {text: 'Project', img: Project, showArrow: false},
        {text: 'User Tutorial', img: Help, showArrow: false},
        {text: 'Program', img: Program, showArrow: true},
        {text: 'Run', img: Run, showArrow: true},
        {text: 'LogOff...', img: LogOff, showArrow: true},
        {text: 'ShutDown...', img: ShutDown, showArrow: true}
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
          /* setTimeout(() => {
            onShutDown();
          }, 3000); */
        }else if(text === 'About'){
            onOpenAbout();
            onStartMenuBlur();
            console.log('openAbout');
        }else if(text === 'Velog'){
            window.open('https://velog.io/@nuyhes');
            onStartMenuBlur();
        }else if(text === 'Github'){
            window.open('https://github.com/NuyHesHUB');
            onStartMenuBlur();
        }else if(text === 'Project'){
            onOpenProject();
            onStartMenuBlur();
        }else if(text === 'User Tutorial'){
            onOpenTutorial();
            onStartMenuBlur();
        }
        else {
          onStartMenuBlur();
        }
      }

    return (
        <StyledStart id="Start">
            <StyledContainer>
                {/* <Vertical><span><strong>Windows</strong>98</span></Vertical> */}
                <Vertical><span><strong>PORTFOLIO</strong>98</span></Vertical>
                <AllPrograms>
                    {allPrograms.map(({text, img, showArrow}, idx)=> 
                        <ProgramGroup key={idx} onClick={()=>{handleClick(text)}}>
                            <img src={img} alt={text}/>
                            <em>{text}</em>
                            {showArrow ? <span><u>D</u>isabled</span> : null}
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
        onOpenAbout:()=>dispatch(openAbout()),
        onOpenTutorial:()=>dispatch(openTutorial()),
        onOpenProject: ()=>dispatch(openProject())
    }
}

export default connect(null, mapDispatchToProps)(Start);