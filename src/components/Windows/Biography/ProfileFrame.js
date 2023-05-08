import React from 'react';
import { connect } from 'react-redux';
import {TitleBarWrap, TitleBar, TitleBarText, TitleBarControls} from '../Project/FakeFrame';
import {StyledMenu} from '../WindowsFrame/StyledFrame'
import styled from 'styled-components';

import logo from '../../../assets/menu-img/logo_shadow.png'
import icon from '../../../assets/desktop-icon/Paint.png'
import paintIcon from '../../../assets/paint-img/tools.png'

import profile from '../../../assets/resume-img/profile_04.jpeg'

const StyledProfileFrame=styled.div`
    display: flex;
    flex-flow: column;
    flex: 1 1 0%;
    /* height: 100%; */
    margin-top: 10px;
    margin-bottom: 10px;
`
const Vertical=styled.div`
    display: flex;
    flex-flow: column;
    flex: 1;
    height: 100%;
`
const PaintFrame=styled.div`
    display: flex;
    /* flex-flow: row; */
    flex-flow: column;
    flex: 1 1 0;
    overflow: hidden;
    height: ${props=>props.isMaximized ? '420px' : '300px'};
    /* background: ${props=>props.isMaximized ? 'red' : 'blue'}; */
    .component-area{
        flex-direction: column;
        position: relative;
        display: flex;
        flex: 0 0 auto;
        user-select: none;
        &::before, &::after{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            border-top: 1px solid rgb(128, 128, 128);
            border-bottom: 1px solid #fff;
            z-index: 1;
        }
        .component{
            display: flex;
            height: 273px;
            align-items: center;
            padding-top: 5px;
            padding-left: 4px;
            padding-right: 4px;
            /* border-right: 1px solid #000; */
            display: flex;
            flex-flow: column;
            .tools{
                height: 200px;
                width: 50px;
                display: flex;
                flex-flow: row wrap;
                .tool{
                    margin: 0;
                    padding: 0;
                    width: 25px;
                    height: 25px;
                    border: 0;
                    border-right: 1px solid #000;
                    border-bottom: 1px solid #000;
                    background: transparent;
                    outline: 0;
                    box-sizing: border-box;
                    position: relative;
                    display: block !important;
                    &:active{
                        padding-bottom: 2px;
                        top: 0px;
                        left: 0px;
                        right: 0px;
                        bottom: 0px;
                        border-top: 1px solid #000;
                        border-left: 1px solid #000;
                        border-right: 1px solid #fff;
                        border-bottom: 1px solid #fff;
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAG0lEQVQYV2P8/////4MHDzIwHjhw4L+9vT0DAHAFCj6esq3FAAAAAElFTkSuQmCC');
                    }
                    &:active::before{
                        top: 0px;
                        left: 0px;
                        right: 0px;
                        bottom: 0px;
                        border-top: 1px solid rgb(128, 128, 128);
                        border-left: 1px solid rgb(128, 128, 128);
                        border-right: 1px solid rgb(192, 192, 192);
                        border-bottom: 1px solid rgb(192, 192, 192);
                    }
                    &::before{
                        content: " ";
                        position: absolute;
                        z-index: 1;
                        top: 0px;
                        left: 0px;
                        right: 0px;
                        bottom: 0px;
                        border-top: 1px solid #fff;
                        border-left: 1px solid #fff;
                        border-right: 1px solid rgb(128, 128, 128);
                        border-bottom: 1px solid rgb(128, 128, 128);
                    }
                    .tool-icon{
                        background-image: url(${paintIcon});
                        background-repeat: no-repeat;
                        background-position: calc(-16px * var(--icon-index)) 0;
                    }
                    span{
                        display: block;
                        position: absolute;
                        left: 4px;
                        top: 4px;
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
        .bottom-component{
            display: flex;
            touch-action: none;
            position: relative;
            margin-left: 3px;
            height: 5px;
            align-items: center;
            padding: 20px;
            >div{
                text-align: center;
            span{
                color: #000eee;
            }
            }
        }
    }
    .horizontal{
        display: flex;
        flex-flow: row;
        flex: 1 1 0px;
        overflow: hidden;
        .img-area{
            width: 100%;
            background: rgb(128, 128, 128);
            overflow: scroll;
            border-left: 1px solid #000;
        }
}
`

function ProfileFrame({biography}){
    return (
       <StyledProfileFrame>
            <Vertical>
                <TitleBarWrap>
                    <TitleBar>
                        <TitleBarText><img style={{width:'16px', marginRight:'5px'}} src={icon} alt="icon"/><span>Profile</span></TitleBarText>
                        <TitleBarControls>
                            <button/>
                        </TitleBarControls>
                    </TitleBar>
                        <StyledMenu>
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
                        </StyledMenu>
                        <PaintFrame
                            isMaximized={biography.maximized}
                        >
                            <div className='horizontal'>
                                <div className='component-area'>
                                    <div className='component'>
                                        <div className='tools'>
                                            <div className='tool'><span style={{'--icon-index':0}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':1}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':2}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':3}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':4}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':5}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':6}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':7}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':8}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':9}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':10}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':11}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':12}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':13}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':14}} className='tool-icon'></span></div>
                                            <div className='tool'><span style={{'--icon-index':15}} className='tool-icon'></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{padding:'3px'}} className='img-area'>
                                    <div className='img-box'>
                                        <img style={{width:'70%'}} src={profile} alt="profile02"/>
                                    </div>
                                </div>
                            </div>
                            <div className='component-area'>
                                <div className='bottom-component'>
                                    <div><p>tag : <span>#주세현(Joo SeHyeon)</span> , <span>#INTJ</span> , <span>#Hwasung-si</span></p></div>
                                </div>
                            </div>
                        </PaintFrame>
                </TitleBarWrap>
            </Vertical>
       </StyledProfileFrame>
    );
};
const mapStateToProps = (state) => {
    return{
        biography: state.biography
    }
}

export default connect(mapStateToProps)(ProfileFrame);