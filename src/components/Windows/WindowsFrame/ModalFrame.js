import React, {useState, useEffect} from 'react';

/* Styles */
import { StyledModalFrame, TitleBar, ButtonGroup } from './StyledModalFrame'

/* Image */
import close from '../../../assets/titlebar-icons/close.png';

export function ModalFrame({children, id, img, title, blurred, width, height, onExit}){
    const [coordinates, setCoordinates]=useState({x: random() + 100, y: random() +30});
    const [offset, setOffset]=useState({x: coordinates.x, y: coordinates.y});

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
      
    return (
        <StyledModalFrame
            left={coordinates.x}
            top={coordinates.y}
            id={id}
            width={width}
            height={height}
            blurred={blurred}
        >
            <TitleBar blurred={blurred}>
                <img src={img} draggable='false' alt='MiniIcon'/>
                <span className='title'>{title}</span>
                <ButtonGroup>
                    <button className='clickable' onClick={()=> onExit()}>
                        <img src={close} draggable='false' alt='close'/>
                    </button>
                </ButtonGroup>
            </TitleBar>
            {children}
        </StyledModalFrame>
    );
};

export default ModalFrame;