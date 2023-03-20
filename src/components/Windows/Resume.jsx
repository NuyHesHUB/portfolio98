import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import WindowsFrame from './WindowsFrame/WindowsFrame'
import {focusResume, blurResume, minimizeResume, exitResume, maximizeResume, disabledResume} from '../../store/actions/actions'
import resumeImage from '../../assets/dockbar-icon/Myresume.png'

import profile from '../../assets/resume-img/profile.jpg'
import project01 from '../../assets/resume-img/display_1.png'

import ResumeSkill from './ResumeSkill';

function Resume({resume, onResumeBlur, onResumeFocus, onResumeMinimize, onResumeMaximize, onResumeDisabled, onResumeExit}){
    /* const inputRef = React.createRef(); */

    useEffect(()=>{
        window.addEventListener('click', resumeBlur);
        /* inputRef.current.focus(); */
        return () => window.removeEventListener('click', resumeBlur);
        // eslint-disable-next-line
    },[])

    function resumeBlur(event) {
        if (!document.querySelector('#Resume').contains(event.target) &&
        !document.querySelector('#resume-button').contains(event.target)) {
            onResumeBlur();
        }else{
            onResumeFocus();
        }
    }
    /* console.log('maximized',resume.maximized); */
    /* console.log('minimized',resume.minimized); */
    /* console.log('state.resume',resume);  */
    
    const displayContent = 
        resume.show ?
            <WindowsFrame
                id="Resume"
                x="100"
                y="100"
                width="600"
                /* height="200" */
                img={resumeImage}
                title="Front-end - 자기소개서"
                blurred={resume.blurred}
                showMenu={true}
                onMinimize={onResumeMinimize}
                onMaximize={onResumeMaximize}
                onDisabled={onResumeDisabled}
                onExit={onResumeExit}
                isMinimized={resume.minimized}
                isMaximized={resume.maximized}
                isDisabled={resume.maximized}
                style={{overFlow:'auto'}}
            >
                <div className='Resume' >
                    {/* <h2>프론트엔드 개발자 주세현입니다.</h2><br/> */}
                    <br/>
                    <img className='profile' src={profile} alt="profile"
                        style={{
                            width:'200px'
                        }}
                    />              
                    <div >
                        <h2 >주세현 (JOO SE HYEON)</h2> 
                        <h3 style={{color:'#666', marginTop:'10px'}}>web Front-end </h3> 
                        <p style={{display:'inline-block', color:'#666', marginTop:'10px'}}>📍 경기도 화성 </p> 
                    </div>
                    <ResumeSkill/>
                    <div>
                        <ul style={{listStyle:'none'}}>
                            <li></li>
                        </ul>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div>
                        <h2>Project01 - Suwon office</h2>
                        <img className='project01' src={project01} alt="project01"/>
                        <p>
                            BMW코리아가 정통 로드스터 ‘뉴 Z4’를 국내에 출시한다고 10일 밝혔다. 로드스터는 2인승 컨버터블 자동차를 뜻한다. 뉴 Z4는 3세대 부분변경 모델로 국내에는 뉴 Z4 sDrive20i M 스포츠 패키지 및 M 퍼포먼스 모델인 뉴 Z4 M40i가 출시된다.
                            외관에는 색다른 디자인 요소를 더해 개성을 드러냈다. 전면부에 새롭게 디자인한 키드니 그릴을 적용해 강렬한 인상을 더한다. 차체 테두리까지 이어진 헤드라이트와 휠 아치 위로 길게 뻗은 보닛은 차체가 넓어보이게 하며 측면을 가로지르는 두 줄의 캐릭터 라인은 역동적인 분위기를 연출한다. 루프 탑은 버튼 터치만으로 최대 50㎞/h 구간까지 10초 이내에 자동으로 개폐된다.
                        </p>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div>
                        <h2>Project02 - Mayfield hotel</h2>
                        <img className='project01' src={project01} alt="project01"/>
                        <p>
                            BMW코리아가 정통 로드스터 ‘뉴 Z4’를 국내에 출시한다고 10일 밝혔다. 로드스터는 2인승 컨버터블 자동차를 뜻한다. 뉴 Z4는 3세대 부분변경 모델로 국내에는 뉴 Z4 sDrive20i M 스포츠 패키지 및 M 퍼포먼스 모델인 뉴 Z4 M40i가 출시된다.
                            외관에는 색다른 디자인 요소를 더해 개성을 드러냈다. 전면부에 새롭게 디자인한 키드니 그릴을 적용해 강렬한 인상을 더한다. 차체 테두리까지 이어진 헤드라이트와 휠 아치 위로 길게 뻗은 보닛은 차체가 넓어보이게 하며 측면을 가로지르는 두 줄의 캐릭터 라인은 역동적인 분위기를 연출한다. 루프 탑은 버튼 터치만으로 최대 50㎞/h 구간까지 10초 이내에 자동으로 개폐된다.
                        </p>
                    </div>
                    <div>
                        <p>
                            BMW코리아가 정통 로드스터 ‘뉴 Z4’를 국내에 출시한다고 10일 밝혔다. 로드스터는 2인승 컨버터블 자동차를 뜻한다. 뉴 Z4는 3세대 부분변경 모델로 국내에는 뉴 Z4 sDrive20i M 스포츠 패키지 및 M 퍼포먼스 모델인 뉴 Z4 M40i가 출시된다.
                            외관에는 색다른 디자인 요소를 더해 개성을 드러냈다. 전면부에 새롭게 디자인한 키드니 그릴을 적용해 강렬한 인상을 더한다. 차체 테두리까지 이어진 헤드라이트와 휠 아치 위로 길게 뻗은 보닛은 차체가 넓어보이게 하며 측면을 가로지르는 두 줄의 캐릭터 라인은 역동적인 분위기를 연출한다. 루프 탑은 버튼 터치만으로 최대 50㎞/h 구간까지 10초 이내에 자동으로 개폐된다.
                        </p>
                    </div>
                    <div>
                        <p>
                            BMW코리아가 정통 로드스터 ‘뉴 Z4’를 국내에 출시한다고 10일 밝혔다. 로드스터는 2인승 컨버터블 자동차를 뜻한다. 뉴 Z4는 3세대 부분변경 모델로 국내에는 뉴 Z4 sDrive20i M 스포츠 패키지 및 M 퍼포먼스 모델인 뉴 Z4 M40i가 출시된다.
                            외관에는 색다른 디자인 요소를 더해 개성을 드러냈다. 전면부에 새롭게 디자인한 키드니 그릴을 적용해 강렬한 인상을 더한다. 차체 테두리까지 이어진 헤드라이트와 휠 아치 위로 길게 뻗은 보닛은 차체가 넓어보이게 하며 측면을 가로지르는 두 줄의 캐릭터 라인은 역동적인 분위기를 연출한다. 루프 탑은 버튼 터치만으로 최대 50㎞/h 구간까지 10초 이내에 자동으로 개폐된다.
                        </p>
                    </div>
                    <div>
                        <p>
                            BMW코리아가 정통 로드스터 ‘뉴 Z4’를 국내에 출시한다고 10일 밝혔다. 로드스터는 2인승 컨버터블 자동차를 뜻한다. 뉴 Z4는 3세대 부분변경 모델로 국내에는 뉴 Z4 sDrive20i M 스포츠 패키지 및 M 퍼포먼스 모델인 뉴 Z4 M40i가 출시된다.
                            외관에는 색다른 디자인 요소를 더해 개성을 드러냈다. 전면부에 새롭게 디자인한 키드니 그릴을 적용해 강렬한 인상을 더한다. 차체 테두리까지 이어진 헤드라이트와 휠 아치 위로 길게 뻗은 보닛은 차체가 넓어보이게 하며 측면을 가로지르는 두 줄의 캐릭터 라인은 역동적인 분위기를 연출한다. 루프 탑은 버튼 터치만으로 최대 50㎞/h 구간까지 10초 이내에 자동으로 개폐된다.
                        </p>
                    </div>
                    <div>
                        <p>
                            BMW코리아가 정통 로드스터 ‘뉴 Z4’를 국내에 출시한다고 10일 밝혔다. 로드스터는 2인승 컨버터블 자동차를 뜻한다. 뉴 Z4는 3세대 부분변경 모델로 국내에는 뉴 Z4 sDrive20i M 스포츠 패키지 및 M 퍼포먼스 모델인 뉴 Z4 M40i가 출시된다.
                            외관에는 색다른 디자인 요소를 더해 개성을 드러냈다. 전면부에 새롭게 디자인한 키드니 그릴을 적용해 강렬한 인상을 더한다. 차체 테두리까지 이어진 헤드라이트와 휠 아치 위로 길게 뻗은 보닛은 차체가 넓어보이게 하며 측면을 가로지르는 두 줄의 캐릭터 라인은 역동적인 분위기를 연출한다. 루프 탑은 버튼 터치만으로 최대 50㎞/h 구간까지 10초 이내에 자동으로 개폐된다.
                        </p>
                        <p>
                            끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝
                        </p>
                    </div>
                </div>
            </WindowsFrame> : null;

    return displayContent;
};
const mapStateToProps = (state) => {
    return{
        resume: state.resume
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onResumeBlur: () => dispatch(blurResume()),
        onResumeFocus: () => dispatch(focusResume()),
        onResumeMinimize: () => dispatch(minimizeResume()),
        onResumeMaximize: () => dispatch(maximizeResume()),
        onResumeDisabled: () => dispatch(disabledResume()),
        onResumeExit: () => dispatch(exitResume())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);