import React, {useState, useEffect} from 'react';

import minimize from '../../../assets/titlebar-icons/minimize.png';
import maximizeDisabled from '../../../assets/titlebar-icons/maximize-disabled.png';
import close from '../../../assets/titlebar-icons/close.png';

function Frame({children, id, img, title, blurred, showMenu, width, onMinimize, onExit, isMinimized}){
    const [coordinates, setCoordinates]=useState({x: random() +100, y: random() +30});
    const [offset, setOffset]=useState({x: coordinates.x, y: coordinates.y});

    useEffect(()=>{
        const frameTitle = document.querySelector('#'+id+'.title');
        frameTitle.addEventListener('mousedown', dragStart);

        return()=>frameTitle.removeEventListener('mousedown', dragStart);
        // eslint-disable-next-line
    },[offset])

    function dragStart(e){
        window.onmouseover=(e)=>dragging(e,{x: e.clientX, y: e.clientY});
        window.onmouseup=dragEnd;
    }
    function dragging(e, axis){
        let x=axis.x-e.clientX;
        let y=axis.y-e.clientY;
        setOffset({ x: e.clientX, y: e.clientY })
        setCoordinates({x: coordinates.x-x, y: coordinates.y-y})
    }
    function dragEnd(){
        window.onmousemove=null;
        window.onmouseup=null;
    }
    function random(){
        return Math.round(Math.random()*100);
    }
    return (
        <div>
            
        </div>
    );
};

export default Frame;