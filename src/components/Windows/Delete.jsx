import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import WindowsFrame from './WindowsFrame/WindowsFrame'
import {focusDeleted, blurDeleted, minimizeDeleted, maximizeDeleted, disabledDeleted,exitDeleted} from '../../store/actions/actions'
import deletedImage from '../../assets/dockbar-icon/Delete.png'

function Delete({ deleted, onDeletedFocus, onDeletedBlur, onDeletedMinimize, onDeletedMaximize, onDeletedDisabled, onDeletedExit }) {
  
    useEffect(() => {
      window.addEventListener('click', deletedBlur);
      return () => window.removeEventListener('click', deletedBlur);
      // eslint-disable-next-line
    }, []);
  
    function deletedBlur(event) {
      if (!document.querySelector('#Delete').contains(event.target) &&
        !document.querySelector('#delete-button').contains(event.target)) {
        onDeletedBlur();
      } else { onDeletedFocus(); }
    }

  
    const displayContent =
      deleted.show ?
        <WindowsFrame
          id="Deleted"
          x="120"
          y="90"
          width="600"
          /* height="348" */
          img={deletedImage}
          title="Untitled - Deleted"
          blurred={deleted.blurred}
          showMenu={true}
          onMinimize={onDeletedMinimize}
          onMaximize={onDeletedMaximize}
          onDisabled={onDeletedDisabled}
          onExit={onDeletedExit}
          isMinimized={deleted.minimized}
          isMaximized={deleted.maximized}
          isDisabled={deleted.maximized}
          >
          <div
            className="Deleted"
          />
        </WindowsFrame> : null;
  
    return displayContent;
  }
  
  const mapStateToProps = (state) => {
    return {
      deleted: state.deleted
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onDeletedBlur: () => dispatch(blurDeleted()),
      onDeletedFocus: () => dispatch(focusDeleted()),
      onDeletedMinimize: () => dispatch(minimizeDeleted()),
      onDeletedMaximize: () => dispatch(maximizeDeleted()),
      onDeletedDisabled: () => dispatch(disabledDeleted()),
      onDeletedExit: () => dispatch(exitDeleted()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Delete);