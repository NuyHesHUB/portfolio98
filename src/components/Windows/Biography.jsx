import React, {useEffect} from 'react';

/* Libary */
import {connect} from 'react-redux';

/* Component */
import WindowsFrame from './WindowsFrame/WindowsFrame'

/* Action */
import {focusBiography, blurBiography, minimizeBiography, exitBiography, maximizeBiography, disabledBiography} from '../../store/actions/actions';

/* Image */
import biographyImage from '../../assets/dockbar-icon/biography.png';
import profile from '../../assets/resume-img/profile.jpg';

/* Effect */
/* import ResumeSkill from '../effect/ResumeEffect/ResumeSkill'; */

function Biography({ biography, onBiographyBlur, onBiographyFocus, onBiographyMinimize, onBiographyMaximize, onBiographyDisabled, onBiographyExit }){
    /* const inputRef = React.createRef(); */

    useEffect(()=>{
        window.addEventListener('click', biographyBlur);
        /* inputRef.current.focus(); */
        return () => window.removeEventListener('click', biographyBlur);
        // eslint-disable-next-line
    },[])

    function biographyBlur(event) {
        if (!document.querySelector('#Biography').contains(event.target) &&
          !document.querySelector('#biography-button').contains(event.target)) {
          onBiographyBlur();
        } else { onBiographyFocus(); }
      }
    /* console.log('maximized',resume.maximized); */
    /* console.log('minimized',resume.minimized); */
    /* console.log('state.resume',resume);  */
    
    const displayContent = 
        biography.show ?
            <WindowsFrame
                id="Biography"
                x="100"
                y="100"
                width="600"
                /* height="200" */
                img={biographyImage}
                title="Front-end - 자기소개서"
                blurred={biography.blurred}
                showMenu={true}
                showMoreMenu={true}
                onMinimize={onBiographyMinimize}
                onMaximize={onBiographyMaximize}
                onDisabled={onBiographyDisabled}
                onExit={onBiographyExit}
                isMinimized={biography.minimized}
                isMaximized={biography.maximized}
                isDisabled={biography.maximized}
                style={{overFlow:'auto'}}
            >
                <div className='Biography' >
                    <br/>
                    <img className='profile' src={profile} alt="profile"
                        style={{
                            width:'200px'
                        }}
                    />            
                </div>
            </WindowsFrame> : null;

    return displayContent;
};
const mapStateToProps = (state) => {
    return{
        biography: state.biography
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onBiographyBlur: () => dispatch(blurBiography()),
        onBiographyFocus: () => dispatch(focusBiography()),
        onBiographyMinimize: () => dispatch(minimizeBiography()),
        onBiographyMaximize: () => dispatch(maximizeBiography()),
        onBiographyDisabled: () => dispatch(disabledBiography()),
        onBiographyExit: () => dispatch(exitBiography()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Biography);