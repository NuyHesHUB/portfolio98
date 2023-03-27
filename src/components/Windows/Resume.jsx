import React, {useEffect} from 'react';

/* Libary */
import {connect} from 'react-redux';

/* Component */
import WindowsFrame from './WindowsFrame/WindowsFrame'

/* Action */
import {focusResume, blurResume, minimizeResume, exitResume, maximizeResume, disabledResume} from '../../store/actions/actions';

/* Image */
import biographyImage from '../../assets/dockbar-icon/Mybiography.png';


function Resume({ resume, onResumeBlur, onResumeFocus, onResumeMinimize, onResumeMaximize, onResumeDisabled, onResumeExit }){
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
        } else { onResumeFocus(); }
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
                img={biographyImage}
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
                   Resume 페이지
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
        onResumeExit: () => dispatch(exitResume()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);