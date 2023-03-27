import React, {useState, useEffect} from 'react';

/* Library */
import { connect } from 'react-redux';

/* Styles */
import {StyledFrame, TitleBar, ButtonGroup, StyledMenu} from './StyledFrame';
import styles from '../../../styles/modal.module.scss';

/* Image */
import minimize from '../../../assets/titlebar-icons/minimize.png';
import maximize from '../../../assets/titlebar-icons/maximize.png';
import disabled from '../../../assets/titlebar-icons/disabled3.png';
import close from '../../../assets/titlebar-icons/close.png';

export function Frame({children, id, img, title, blurred, showMenu, width, height, onMinimize, onMaximize, onDisabled, onExit, isMinimized, isMaximized, isDisabled, showTutorial}){
    const [coordinates, setCoordinates]=useState({x: random() + 100, y: random() +30});
    const [offset, setOffset]=useState({x: coordinates.x, y: coordinates.y});
    const [resize, setResize] = useState(true);

    useEffect(()=>{
        const frameTitle = document.querySelector('#' + id + ' .title');
        frameTitle.addEventListener('mousedown', dragStart);
        return()=>frameTitle.removeEventListener('mousedown', dragStart);
        // eslint-disable-next-line
    },[offset])

    /*----------------------------------------*\
                       DRAG 
    \*----------------------------------------*/
    function dragStart(event){
        window.onmousemove=(e)=>dragging(e,{x: event.clientX, y: event.clientY});
        window.onmouseup=dragEnd;
    }
    function dragging(event, axis) {
        let x = axis.x - event.clientX;
        let y = axis.y - event.clientY;
        setOffset({ x: event.clientX, y: event.clientY });
        setCoordinates({ x: coordinates.x - x, y: coordinates.y - y });
    }

    function dragEnd() {
        window.onmousemove = null;
        window.onmouseup = null;
    }

    function random(){
        return Math.round(Math.random()*30);
    }

    /*----------------------------------------*\
                      SHOW MENU 
    \*----------------------------------------*/
    const menu = showMenu ?
    <StyledMenu >
        <span><u>F</u>ile</span>
        <span><u>E</u>dit</span>
        <span><u>S</u>earch</span>
        <span><u>H</u>elp</span>
    </StyledMenu> : null;

    /*----------------------------------------*\
            MAXIMIZE CLASS TOGGLE FUNCTION
    \*----------------------------------------*/
    const onFullsize = () => {
        const frameTitle = document.querySelector('#' + id + ' .title');
        setResize(!resize);
        /* console.log(resize); */
        if(resize === true){
            frameTitle.removeEventListener('mousedown', dragStart);
        }
        else{
            frameTitle.addEventListener('mousedown', dragStart);
        }
    };

    const onFullsizeCancel = () => {
        if(resize===false){
            /* console.log('false 다'); */
            setResize(!resize);
        }
    }
    /* console.log('resize',resize); */
    console.log(blurred);

    return (
        <StyledFrame
            left={coordinates.x}
            top={coordinates.y}
            id={id}
            width={width}
            height={height}
            isMinimized={isMinimized}
            isMaximized={isMaximized}
            isDisabled={isDisabled}
            blurred={blurred}
            className={resize ? styles.modal : styles.big_modal}
            showTutorial={showTutorial}
        >
            <TitleBar blurred={blurred}>
                <img src={img} draggable='false' alt='MiniIcon'/>
                <span className='title'>{title}</span>
                <ButtonGroup>
                    <button className='clickable' onClick={()=> {
                        onMinimize()
                        onFullsizeCancel()
                    }
                    }>
                        <img src={minimize} draggable='false' alt='minimize'/>
                    </button>
                    {
                        resize===true? 
                        <button className="clickable"/* {`${styles.clickable} ${styles.container2}`} */ onClick={()=>{
                            onMaximize()
                            onFullsize()
                            }}>
                            <img src={maximize} draggable='false' alt='maximize'/>
                        </button>
                        :<button className="clickable"/* {`${styles.clickable} ${styles.container2}`} */ onClick={()=>{
                            onDisabled()
                            onFullsize()
                        }}>
                            <img src={disabled} draggable='false' alt='maximize'/>
                        </button>
                    }
                    <button className='clickable' onClick={()=> onExit()}>
                        <img src={close} draggable='false' alt='close'/>
                    </button>
                </ButtonGroup>
            </TitleBar>
            {menu}
            {children}
        </StyledFrame>
    );
};

const mapStateToProps=(state)=>{
    return{
        tutorialVisible: state.showTutorial,
    }
}

export default connect(mapStateToProps)(Frame);