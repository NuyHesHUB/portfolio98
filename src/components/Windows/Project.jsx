import React, {useEffect} from 'react';

/* Redux */
import {connect} from 'react-redux';

/* Component */
import WindowsFrame from './WindowsFrame/WindowsFrame'
import ProjectFrame from './Project/ProjectFrame'

/* Actions */
import {focusProject, blurProject, minimizeProject, exitProject, maximizeProject, disabledProject} from '../../store/actions/actions';

/* Image */
import projectImage from '../../assets/dockbar-icon/project.png';


function Project({ project, onProjectBlur, onProjectFocus, onProjectMinimize, onProjectMaximize, onProjectDisabled, onProjectExit }){
    /* const inputRef = React.createRef(); */

    useEffect(()=>{
        window.addEventListener('click', projectBlur);
        /* inputRef.current.focus(); */
        return () => window.removeEventListener('click', projectBlur);
        // eslint-disable-next-line
    },[])

    function projectBlur(event) {
        if (!document.querySelector('#Project').contains(event.target) &&
          !document.querySelector('#project-button').contains(event.target)) {
          onProjectBlur();
        } else { onProjectFocus(); }
      }
    /* console.log('maximized',resume.maximized); */
    /* console.log('minimized',resume.minimized); */
    /* console.log('state.resume',resume);  */
    /* console.log('maximized',project.maximized); */
    const displayContent = 
        project.show ?
            <WindowsFrame
                id="Project"
                x="100"
                y="100"
                width="700"
                /* height="200" */
                img={projectImage}
                title="Project - 프로젝트"
                blurred={project.blurred}
                showMenu={true}
                showMoreMenu={true}
                onMinimize={onProjectMinimize}
                onMaximize={onProjectMaximize}
                onDisabled={onProjectDisabled}
                onExit={onProjectExit}
                isMinimized={project.minimized}
                isMaximized={project.maximized}
                isDisabled={project.maximized}
                style={{overFlow:'auto'}}
            >
                
                <div className='Project' >
                    <ProjectFrame
                        onMaximize={onProjectMaximize}
                        isMaximized={project.maximized}
                    />
                </div>
            </WindowsFrame> : null;

    return displayContent;
};
const mapStateToProps = (state) => {
    return{
        project: state.project
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onProjectBlur: () => dispatch(blurProject()),
        onProjectFocus: () => dispatch(focusProject()),
        onProjectMinimize: () => dispatch(minimizeProject()),
        onProjectMaximize: () => dispatch(maximizeProject()),
        onProjectDisabled: () => dispatch(disabledProject()),
        onProjectExit: () => dispatch(exitProject()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);