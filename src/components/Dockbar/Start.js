import React, {useEffect} from 'react';

/* Library */
import {connect} from 'react-redux'
import {StyledStart, StyledContainer, Vertical, AllPrograms, ProgramGroup} from './StyledDockbar'

/* Image */
import About from '../../assets/start-icon/about1.png'
import Velog from '../../assets/start-icon/velog.png'
import Github from '../../assets/start-icon/github.png'
/* import Program from '../../assets/start-icon/program.png' */
/* import Favorite from '../../assets/start-icon/favorite.png' */
/* import Document from '../../assets/start-icon/document.png' */
/* import Setting from '../../assets/start-icon/setting.png' */
/* import Find from '../../assets/start-icon/find.png' */
import Help from '../../assets/start-icon/help.png'
/* import Run from '../../assets/start-icon/run.png' */
import LogOff from '../../assets/start-icon/logoff.png'
import ShutDown from '../../assets/start-icon/shutdown.png'
import Suwon from '../../assets/start-icon/suwon.png'
import May from '../../assets/start-icon/mayfield.png'
import Zoocinema from '../../assets/start-icon/movie.png'

/* Actions */
import { startMenuBlur, shutDown, openAbout, openTutorial} from '../../store/actions/actions';

function Start({onStartMenuBlur, onShutDown, onOpenAbout, onOpenTutorial}) {
    const allPrograms = [
        {text: 'About', img: About, showArrow: false},
        {text: 'Velog', img: Velog, showArrow: false},
        {text: 'Github', img: Github, showArrow: false},
        /* {text: 'Project', img: Program, showArrow: true}, */
        /* {text: 'Favorite', img: Favorite, showArrow: true}, */
        /* {text: 'Document', img: Document, showArrow: true}, */
        /* {text: 'Setting', img: Setting, showArrow: false}, */
        /* {text: 'Find', img: Find, showArrow: false}, */
        {text: 'Project 01 : 수원 관공서', img: Suwon, showArrow: false},
        {text: 'Project 02 : 메이필드 호텔', img: May, showArrow: false},
        {text: 'Project 03 : 영화 페이지', img: Zoocinema, showArrow: false},
        {text: 'User Tutorial', img: Help, showArrow: false},
        /* {text: 'Run...', img: Run, showArrow: false}, */
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
        }else if(text === 'About'){
            onOpenAbout();
            console.log('openAbout');
        }else if(text === 'Velog'){
            window.open('https://velog.io/@nuyhes')
        }else if(text === 'Github'){
            window.open('https://github.com/NuyHesHUB')
        }else if(text === 'Project 01 : 수원 관공서'){
            window.open('https://nuyheshub.github.io/project01_suwon/')
        }else if(text === 'Project 02 : 메이필드 호텔'){
            window.open('https://nuyheshub.github.io/project02_mayfield_hotel/')
        }else if(text === 'Project 03 : 영화 페이지'){
            window.open('https://nuyheshub.github.io/project03_movie_app/')
        }else if(text === 'User Tutorial'){
            onOpenTutorial();
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
        onOpenAbout:()=>dispatch(openAbout()),
        onOpenTutorial:()=>dispatch(openTutorial()),
    }
}

export default connect(null, mapDispatchToProps)(Start);