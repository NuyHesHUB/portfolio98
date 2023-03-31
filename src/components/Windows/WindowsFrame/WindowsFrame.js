import React, {useState, useEffect} from 'react';

/* Library */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/* Styles */
import {StyledFrame, TitleBar, ButtonGroup, StyledMenu, StyledResumeMenu, StyledMoreMenu} from './StyledFrame';
import styles from '../../../styles/modal.module.scss';



/* Image */
import minimize from '../../../assets/titlebar-icons/minimize.png';
import maximize from '../../../assets/titlebar-icons/maximize.png';
import disabled from '../../../assets/titlebar-icons/disabled3.png';
import close from '../../../assets/titlebar-icons/close.png';
import down from '../../../assets/titlebar-icons/down.png'
import newtab from '../../../assets/titlebar-icons/newtab.png'

import back from "../../../assets/menu-img/back.png";
import forward from "../../../assets/menu-img/forward.png";
import stop from "../../../assets/menu-img/stop.png";
import refresh from "../../../assets/menu-img/refresh.png";
import home from "../../../assets/menu-img/home.png";
import search from "../../../assets/menu-img/search.png";
import favorite from "../../../assets/menu-img/favorite.png";
import history from "../../../assets/menu-img/history.png";
import mail from "../../../assets/menu-img/mail.png";
import print from "../../../assets/menu-img/print.png";

import logo from "../../../assets/menu-img/logo_shadow.png"

import addrbtn from "../../../assets/scrollbar-img/scrollbar-btn-down.png"

/* Pdf */
import pdfFile from '../../../assets/resume-pdf/resume.pdf'
export function Frame({children, id, img, title, blurred, showMenu, showMoreMenu, showResumeMenu, width, height, onMinimize, onMaximize, onDisabled, onExit, isMinimized, isMaximized, isDisabled, showTutorial}){
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
        <div className='menuWrap'>
            <div className='menuList'>
                <div className='first-divider'/>
                <div className='first-divider'/>
                <span><u>F</u>ile</span>
                <span><u>E</u>dit</span>
                <span><u>S</u>earch</span>
                <span><u>H</u>elp</span>
            </div>
            <div className='logoWrap'>
                <img style={{width:'24px'}} src={logo} alt='logo'/>
            </div>
        </div>
        
        
    </StyledMenu> : null;
    /*----------------------------------------*\
                    SHOW MORE MENU 
    \*----------------------------------------*/
    const moremenu = showMoreMenu ?
    <StyledMoreMenu >
        <div className='moreMenuWrap'>
            <div className='first-divider'/>
            <div className='first-divider'/>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img  src={back} alt='back'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Back
                </div>
            </button>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={forward} alt='forward'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Forward
                </div>
            </button>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={stop} alt='stop'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Stop
                </div>
            </button>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={refresh} alt='refresh'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Refresh
                </div>
            </button>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={home} alt='home'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Home
                </div>
            </button>
            <div className='divider'/>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={search} alt='search'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Search
                </div>
            </button>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={favorite} alt='favorite'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Favorite
                </div>
            </button>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={history} alt='history'/>
                </div>
                <div className='btnIconLarge-Text'>
                    History
                </div>
            </button>
            <div className='divider'/>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={mail} alt='mail'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Mail
                </div>
            </button>
            <button className='btn btnIconLarge'>
                <div className='btnIconLarge-Icon'>
                    <img src={print} alt='print'/>
                </div>
                <div className='btnIconLarge-Text'>
                    Print
                </div>
            </button>
        </div>
        <div className='addrWrap'>
            <div className='first-divider'/>
            <div className='first-divider'/>
            <div className='addrList'>
                <span className='addr'>A<u>d</u>dress</span>
                <div className='titleWrap'>
                    <div className='urlWrap'>
                        <img src={img} draggable='false' alt='MiniIcon'/>
                        <span className='url'>D:\{title}</span>
                    </div>
                    <div className='btnWrap'>
                        <img src={addrbtn} alt='addrbtn'/>
                    </div>
                </div>
            </div>
        </div>
    </StyledMoreMenu> : null;
    /*----------------------------------------*\
                  SHOW RESUME MENU 
    \*----------------------------------------*/
    const resumemenu = showResumeMenu ? 
    <StyledResumeMenu>
        <div>
            <a href={pdfFile} download><img src={down} alt='down'/><span><u>D</u>ownload</span></a>
            <Link onClick={()=>{window.open(`${pdfFile}`)}}><img src={newtab} alt='newtab'/><span><u>O</u>pen with a new tab</span></Link>
        </div>
    </StyledResumeMenu> : null;

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
    /* console.log(blurred); */

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
            {resumemenu}
            {moremenu}
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