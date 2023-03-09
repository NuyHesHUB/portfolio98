import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux'

import WindowsFrame from './WindowsFrame/WindowsFrame'
import {focusNotepad, blurNotepad, minimizeNotepad, maximizeNotepad, exitNotepad} from '../../store/actions/actions'
import notepadImage from '../../assets/dockbar-icon/Note.png'

function Notepad({notepad, onNotepadFocus, onNotepadBlur, onNotepadMinimize,  onNotepadExit}){
    const inputRef = useRef();

    useEffect(()=>{
        window.addEventListener('click', notepadBlur);
        inputRef.current.focus();
        return()=>{window.removeEventListener('click', notepadBlur);}
    },[])
    
    function notepadBlur(e){
        if(
            !document.querySelector('#Notepad').contains(e.target) &&
            !document.querySelector('#Notepad-button').contains(e.target)
        ){
            onNotepadBlur();
        }else{
            onNotepadFocus();
        }
    }

    const displayContent=
        notepad.show ?
        <WindowsFrame
            id="Notepad"
            x="120"
            y="90"
            width="600"
            height="350"
            img={notepadImage}
            title="Untitled - 메모장"
            blurred={notepad.blurred}
            showMenu={true}
            onMinimize={onNotepadMinimize}
            onExit={onNotepadExit}
            isMinimized={notepad.minimized}
        >
            <div
                className='Notepad'
                contentEditable="true"
                ref={inputRef}
            />

        </WindowsFrame> : null;

        return displayContent;
};
const mapStateToProps=(state)=>{
    return{
        notepad: state.notepad
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onNotepadFocus: ()=> dispatch(focusNotepad()),
        onNotepadBlur: ()=> dispatch(blurNotepad()),
        onNotepadMinimize: ()=> dispatch(minimizeNotepad()),
        /* onNotepadMaximize: ()=> dispatch(maximizeNotepad()), */
        onNotepadExit: ()=> dispatch(exitNotepad()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notepad);