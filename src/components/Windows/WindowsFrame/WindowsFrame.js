import React, {useState, useEffect} from 'react';
import {StyledFrame, TitleBar, ButtonGroup, StyledMenu} from './StyledFrame'

import minimize from '../../../assets/titlebar-icons/minimize.png';
import maximizeDisabled from '../../../assets/titlebar-icons/maximize-disabled.png';
import close from '../../../assets/titlebar-icons/close.png';

function Frame({children, id, img, title, blurred, showMenu, width, onMinimize, onMaximize, onExit, isMinimized, isMaximized}){
    const [coordinates, setCoordinates]=useState({x: random() + 100, y: random() +30});
    const [offset, setOffset]=useState({x: coordinates.x, y: coordinates.y});

    useEffect(()=>{
        const frameTitle = document.querySelector('#' + id + ' .title');
        frameTitle.addEventListener('mousedown', dragStart);
        return()=>frameTitle.removeEventListener('mousedown', dragStart);
        // eslint-disable-next-line
    },[offset])

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
    const menu = showMenu ?
    <StyledMenu >
        <span><u>F</u>ile</span>
        <span><u>E</u>dit</span>
        <span><u>S</u>earch</span>
        <span><u>H</u>elp</span>
    </StyledMenu> : null;

    return (
        <StyledFrame
            left={coordinates.x}
            top={coordinates.y}
            id={id}
            width={width}
            isMinimized={isMinimized}
            isMaximized={isMaximized}
            blurred={blurred}
        >
            <TitleBar blurred={blurred}>
                <img src={img} draggable='false' alt='MiniIcon'/>
                <span className='title'>{title}</span>
                <ButtonGroup>
                    <button className='clickable' onClick={()=> onMinimize()}>
                        <img src={minimize} draggable='false' alt='minimize'/>
                    </button>
                    <button className='clickable' onClick={()=> onMaximize()}>
                        <img src={maximizeDisabled} draggable='false' alt='maximize'/>
                    </button>
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

export default Frame;