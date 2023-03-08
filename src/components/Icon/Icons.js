import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import { openNotepad } from '../../store/actions/actions';

import Icon from './Icon';

import Mycomputer from '../../assets/desktop-icon/Mycomputer.png'
import Mydocument from '../../assets/desktop-icon/Mydocument.png'
import Delete from '../../assets/desktop-icon/Delete.png'
import Myportfolio from '../../assets/desktop-icon/Myportfolio.png'
import Note from '../../assets/desktop-icon/Note.png'
import Paint from '../../assets/desktop-icon/Paint.png'

const StyledIcons = styled.div`
    display: flex;
    flex-direction: column;
    float: left;
    padding: 8px;
`

function Icons({onOpenNotepad}) {
    const [icons, setIcons] = useState([
        {label: '내컴퓨터', img: Mycomputer, clicked: false},
        {label: '내문서', img: Mydocument, clicked: false},
        {label: '휴지통', img: Delete, clicked: false},
        {label: '내포트폴리오', img: Myportfolio, clicked: false},
        {label: '메모장', img: Note, clicked: false},
        {label: '그림판', img: Paint, clicked: false},
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
        if(label === '메모장'){
            onOpenNotepad();
        }
        else if (label === '휴지통') {
            window.open('https://github.com/Arish-Shah/win95');
        }
        else{
            console.log('haha');
        }
        
    }

    return (
        <StyledIcons id="Icons">
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
const mapDispatchToProps = (dispatch)=>{
    return{
        onOpenNotepad: () => dispatch(openNotepad())
    }
    
}

export default connect(null, mapDispatchToProps)(Icons);