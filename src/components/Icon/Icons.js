import React, {useState, useEffect} from 'react';

/* Library */
import styled from 'styled-components';
import {connect} from 'react-redux'

/* Action */
import { openNotepad, openBiography, openDeleted, openResume, openProject } from '../../store/actions/actions';

/* Component */
import Icon from './Icon';

/* Image */
import Mycomputer from '../../assets/desktop-icon/Mycomputer.png';
/* import Mydocument from '../../assets/desktop-icon/Mydocument.png' */
import Delete from '../../assets/desktop-icon/Delete.png';
/* import Myportfolio from '../../assets/desktop-icon/Myportfolio.png' */
import Note from '../../assets/desktop-icon/Note.png';
/* import Paint from '../../assets/desktop-icon/Paint.png' */
import Velog from '../../assets/desktop-icon/velog.png';
import Github from '../../assets/desktop-icon/github.png';
import Mybiography from '../../assets/desktop-icon/MyBiography.png';
import Myportfolio from '../../assets/desktop-icon/Myportfolio.png';

const StyledIcons = styled.div`
    position: absolute;
    left: 10px;
    display: flex;
    flex-direction: column;
    float: left;
    padding: 8px;
    position: relative;
    z-index: ${props=>props.showTutorial ? '9999' : ''};
    animation: ${props => props.showTutorial ? 'tutorial1 1s infinite;' : null};
    @keyframes tutorial1 {
        0%,
        100%{outline: 5px solid red}
        50%{outline: 5px solid #ededed}
    }
    /* &>div:first-child{
        background: red;
    } */
    /* 나중에 아이콘이 많아지면 어떻게 해야할지 고민.. 일단 position으로.. */
    /* &>div:nth-child(11){
        position: absolute;
        top: 0;
        left: 100px;
    } */
`;

function Icons({onOpenNotepad, onOpenBiography, onOpenDeleted, showTutorial, onOpenProject, onOpenResume}) {
    const [icons, setIcons] = useState([
        {label: '이력서', img: Mycomputer, clicked: false},
        {label: '자기소개서', img: Mybiography, clicked: false},
        /* {label: '내문서', img: Mydocument, clicked: false}, */
        {label: '휴지통', img: Delete, clicked: false},
        /* {label: '내포트폴리오', img: Myportfolio, clicked: false}, */
        {label: '벨로그', img: Velog, clicked: false},
        {label: '깃허브', img: Github, clicked: false},
        {label: '튜토리얼', img: Note, clicked: false},
        {label: '프로젝트', img: Myportfolio, clicked: false},
        /* {label: '그림판', img: Paint, clicked: false}, */
    ]);

    useEffect(()=>{
        window.addEventListener('click',resetIcons);
        return ()=>{
            window.removeEventListener('click', resetIcons);
        }
        // eslint-disable-next-line
    },[])

    function handleClick(label){
        const index = icons.findIndex(icon => icon.label === label);
        const updatedIcon =[...icons]
        updatedIcon.map(icon=>icon.clicked = false);
        updatedIcon[index].clicked = true;
        setIcons(updatedIcon);
    }

    function resetIcons(e){
        if(!document.querySelector('#Icons').contains(e.target)){
            reset();
        }
    }

    function reset(){
        const updatedIcon = [...icons];
        updatedIcon.map(icon => icon.clicked =false);
        setIcons(updatedIcon);
    }

    function doubleClicked(label){
        reset();
        if(label === '튜토리얼'){
            onOpenNotepad();
        }
        else if (label === '휴지통') {
            onOpenDeleted();
        }
        else if (label === '자기소개서') {
            onOpenBiography();
        }
        else if (label === '이력서') {
            onOpenResume();
        }
        else if (label === '벨로그') {
            window.open('https://velog.io/@nuyhes')
        }
        else if (label === '깃허브') {
            window.open('https://github.com/NuyHesHUB')
        }
        else if (label === '프로젝트') {
            onOpenProject();
        }
        else{
            console.log('haha');
        }
        console.log(label);   
    }

    return (
        <StyledIcons 
            id="Icons"
            showTutorial={showTutorial}
        >
            {icons.map(({label, img, clicked}, index)=>
                <Icon key={index}
                    label={label}
                    img={img}
                    clicked={clicked}
                    handleClick={handleClick}
                    doubleClicked={doubleClicked}
                />
            )}
        </StyledIcons>
    );
};

const mapStateToProps = (state) => {
    return {
        showTutorial: state.showTutorial,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onOpenNotepad: () => dispatch(openNotepad()),
      onOpenBiography: () => dispatch(openBiography()),
      onOpenDeleted: () => dispatch(openDeleted()),
      onOpenResume: () => dispatch(openResume()),
      onOpenProject: () => dispatch(openProject()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Icons);