import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import WindowsFrame from './WindowsFrame/WindowsFrame'
import {focusNotepad, blurNotepad, minimizeNotepad, /* maximizeNotepad, */ exitNotepad} from '../../store/actions/actions'
import notepadImage from '../../assets/dockbar-icon/notepad.png'

function Notepad({ notepad, onNotepadFocus, onNotepadBlur, onNotepadMinimize/* , onNotepadMaximize */ ,onNotepadExit }) {
    const inputRef = React.createRef();
  
    useEffect(() => {
      window.addEventListener('click', notepadBlur);
      inputRef.current.focus();
  
      return () => window.removeEventListener('click', notepadBlur);
      // eslint-disable-next-line
    }, []);
  
    function notepadBlur(event) {
      if (!document.querySelector('#Notepad').contains(event.target) &&
        !document.querySelector('#notepad-button').contains(event.target)) {
        onNotepadBlur();
      } else { onNotepadFocus(); }
    }

  
    const displayContent =
      notepad.show ?
        <WindowsFrame
          id="Notepad"
          x="120"
          y="90"
          width="600"
          height="348"
          img={notepadImage}
          title="Untitled - Notepad"
          blurred={notepad.blurred}
          showMenu={true}
          onMinimize={onNotepadMinimize}
          /* onMaximize={onNotepadMaximize} */
          onExit={onNotepadExit}
          isMinimized={notepad.minimized}
          /* isMaximized={notepad.maximized} */
          >
          <div
            className="Notepad"
            contentEditable="true"
            ref={inputRef}
          />
        </WindowsFrame> : null;
  
    return displayContent;
  }
  
  const mapStateToProps = (state) => {
    return {
      notepad: state.notepad
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onNotepadBlur: () => dispatch(blurNotepad()),
      onNotepadFocus: () => dispatch(focusNotepad()),
      onNotepadMinimize: () => dispatch(minimizeNotepad()),
      /* onNotepadMaximize: () => dispatch(maximizeNotepad()), */
      onNotepadExit: () => dispatch(exitNotepad()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Notepad);