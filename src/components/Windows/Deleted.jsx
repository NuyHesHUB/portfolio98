import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import WindowsFrame from './WindowsFrame/WindowsFrame';
import {focusDeleted, blurDeleted, minimizeDeleted, maximizeDeleted, disabledDeleted,exitDeleted} from '../../store/actions/actions';
import deletedImage from '../../assets/dockbar-icon/Delete.png';
import deletedLimgage from '../../../src/assets/desktop-icon/Delete.png';
import cloud from '../../assets/wallpaper/windows_98_clouds.jpg';

import Burning from '../effect/DeleteEffect/Burning';
import Falling from '../effect/DeleteEffect/Falling';

function Deleted({ deleted, onDeletedFocus, onDeletedBlur, onDeletedMinimize, onDeletedMaximize, onDeletedDisabled, onDeletedExit }) {

    useEffect(() => {
      window.addEventListener('click', deletedBlur);
      return () => window.removeEventListener('click', deletedBlur);
      // eslint-disable-next-line
    }, []);
  
    function deletedBlur(event) {
      if (!document.querySelector('#Deleted').contains(event.target) &&
        !document.querySelector('#deleted-button').contains(event.target)) {
        onDeletedBlur();
      } else { onDeletedFocus(); }
    }

    const displayContent =
      deleted.show ?
        <WindowsFrame
          id="Deleted"
          x="120"
          y="90"
          width="530"
          /* height="348" */
          img={deletedImage}
          title="Untitled - Deleted"
          blurred={deleted.blurred}
          showMenu={true}
          showMoreMenu={true}
          onMinimize={onDeletedMinimize}
          onMaximize={onDeletedMaximize}
          onDisabled={onDeletedDisabled}
          onExit={onDeletedExit}
          isMinimized={deleted.minimized}
          isMaximized={deleted.maximized}
          isDisabled={deleted.maximized}
          >
          <div className="Deleted">
              <div className='bg'>
                <div className='Deleted-bg' style={{backgroundImage: `url(${cloud})`}}>
                    <img src={deletedLimgage} alt="Icon"/>
                    <h3>Recycle Bin</h3>
                    <div style={{marginTop:'40px'}}>
                    <p style={{fontSize:'13px', textAlign:'center',fontWeight:'bold'}}>휴지통 비우기</p>
                    <br/>
                        <p style={{fontSize:'13px', textAlign:'center',fontWeight:'bold'}}>내 성격의 단점</p>
                        <ul style={{fontSize:'13px',textAlign:'center',marginTop:'10px'}}>
                            <li>완벽주의</li>
                            <li>많은생각</li>
                            <li>실천부족</li>
                            <li>낯가림</li>
                        </ul>
                    </div>
                </div>
                    <ul className='line-list'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
              </div>
              <div className='ct' >
                <Falling/>
                <Burning/>
              </div>
          </div>
        </WindowsFrame> : null;
    /* console.log(deleted.blurred); */
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Deleted);