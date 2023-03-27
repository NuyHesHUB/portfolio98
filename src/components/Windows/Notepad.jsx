import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { TutorialContentWrap, TutorialTitle, TutorialText, TutorialSubTitle, TutorialList, TutorialItem } from './StyledTutorialNotepad/StyledTutorialNotepad'

import WindowsFrame from './WindowsFrame/WindowsFrame'
import {focusNotepad, blurNotepad, minimizeNotepad, maximizeNotepad, disabledNotepad,exitNotepad} from '../../store/actions/actions'
import notepadImage from '../../assets/dockbar-icon/notepad.png'

function Notepad({ notepad, onNotepadFocus, onNotepadBlur, onNotepadMinimize, onNotepadMaximize, onNotepadDisabled, onNotepadExit, showTutorial}) {
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
          /* height="348" */
          img={notepadImage}
          title="User Tutorial Manual - Notepad"
          blurred={notepad.blurred}
          showMenu={true}
          onMinimize={onNotepadMinimize}
          onMaximize={onNotepadMaximize}
          onDisabled={onNotepadDisabled}
          onExit={onNotepadExit}
          isMinimized={notepad.minimized}
          isMaximized={notepad.maximized}
          isDisabled={notepad.maximized}
          showTutorial={showTutorial}
          >
          <div
            className="Notepad"
            /* contentEditable="true" */
            ref={inputRef}
          >
            <TutorialContentWrap>
              <TutorialTitle>[메뉴얼] User Tutorial Manual</TutorialTitle>
              <TutorialText>저의 <i>PORTFOLIO98</i> 에 오신 것을 환영합니다. </TutorialText>
              <TutorialText><i>PORTFOLIO98</i> 의 사용방법을 알아볼까요?</TutorialText>
              <br/>
              <hr/>
              <TutorialText style={{textAlign:'center',fontSize:'10px',marginBottom:'10px', marginTop:'10px'}}><i style={{fontSize:'10px',marginRight:'5px'}}>&#x274B;</i><i style={{color:'white',background:'red',padding:'2px 3px'}}>SKIP</i> 이 필요하시다면 아래의 <i style={{padding:'2px 3px', background:'blue', color:'yellow'}}>User Tutorial</i><i style={{background:'rgb(195, 199, 203)',padding:'2px 3px'}}>X</i> 닫는 버튼을 눌러주세요.<i style={{fontSize:'10px',marginLeft:'5px'}}>&#x274B;</i></TutorialText>
              <hr/>
              <TutorialSubTitle>&#x2776; 시작메뉴</TutorialSubTitle>
              <br/>
              <TutorialList>
                  <TutorialItem><span>About :</span> <i>PORTFOLIO98</i>의 정보입니다.</TutorialItem>
                  <TutorialItem><span>Velog :</span> 공부를 기록하는 저의 <i>블로그</i> 입니다.</TutorialItem>
                  <TutorialItem><span>Github :</span> 코드를 기록하는 저의 <i>깃허브</i> 저장소 입니다.</TutorialItem>
                  <TutorialItem><span>Project 01 :</span> <i>관공서 홈페이지</i>공부를 위해 <i>수원시청</i>을 클론코딩한 저의 프로젝트입니다.</TutorialItem>
                  <TutorialItem><span>Project 02 :</span> <i>반응형</i>을 공부하기 위해 <i>메이필드호텔</i>을 클론코딩한 저의 프로젝트입니다. </TutorialItem>
                  <TutorialItem><span>Project 03 :</span> <i>AXIOS API 호출</i>을 공부하기 위해 만들게된 저의 첫 영화 추천 페이지 프로젝트입니다. </TutorialItem>
                  <TutorialItem><span>ShutDown :</span> 재미요소로 넣게된 이스터에그 <i>'시스템 종료'</i> 입니다.</TutorialItem>
                </TutorialList>
                <br/>
                <br/>
                <hr/>
                <br/>
              <TutorialSubTitle>&#x2777; 바탕화면 아이콘</TutorialSubTitle>
              <br/>
              <TutorialList>
                  <TutorialItem><span>이력서(Resume) :</span> 저의 <i>이력서</i>를 확인하실 수 있습니다.</TutorialItem>
                  <TutorialItem><span>휴지통 :</span> 저의 <i>성격의 단점</i>을 <i>재밌게 표현</i>해 보았습니다.</TutorialItem>
                  <TutorialItem><span>벨로그 :</span> 공부를 기록하는 저의 <i>블로그</i> 입니다.</TutorialItem>
                  <TutorialItem><span>깃허브 :</span> 코드를 기록하는 저의 <i>깃허브</i> 저장소 입니다.</TutorialItem>
                  <TutorialItem><span>메모장 :</span> 튜토리얼 설명이 담긴 <i>메모장</i>입니다. </TutorialItem>
                  <TutorialItem><span>자기소개서(self-introduction) :</span> 저를 <i>소개</i>하는 곳입니다. </TutorialItem>
                </TutorialList>
                <br/>
                <br/>
                <hr/>
                <br/>
              <TutorialSubTitle>&#x2778; 퀵 메뉴</TutorialSubTitle>
              <br/>
              <TutorialList>
                  <TutorialItem><span>User Tutorial :</span> 지금 보시는 <i>Tutorial</i> 페이지를 보실 수 있습니다.</TutorialItem>
                  <TutorialItem><span>자기소개서(self-introduction) :</span> 저를 <i>소개</i>하는 곳입니다.</TutorialItem>
                  <TutorialItem><span>이력서(Resume) :</span> 저의 <i>이력서</i>를 확인하실 수 있습니다.</TutorialItem>
                  <TutorialItem><span>Project(프로젝트 모음) :</span> 저의 <i>프로젝트</i>를 보실 수 있습니다.</TutorialItem>
                  <TutorialItem><span>Contact :</span> 저의 <i>연락처</i>를 확인하실 수 있습니다.</TutorialItem>
                </TutorialList>
                <br/>
                <br/>
                <hr/>
            </TutorialContentWrap>
          </div>
        </WindowsFrame> : null;
  
    return displayContent;
  }
  
  const mapStateToProps = (state) => {
    return {
      notepad: state.notepad,
      showTutorial: state.showTutorial,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onNotepadBlur: () => dispatch(blurNotepad()),
      onNotepadFocus: () => dispatch(focusNotepad()),
      onNotepadMinimize: () => dispatch(minimizeNotepad()),
      onNotepadMaximize: () => dispatch(maximizeNotepad()),
      onNotepadDisabled: () => dispatch(disabledNotepad()),
      onNotepadExit: () => dispatch(exitNotepad()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Notepad);