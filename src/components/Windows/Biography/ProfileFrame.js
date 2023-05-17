import React from 'react';
import { connect } from 'react-redux';
import {TitleBarWrap, TitleBar, TitleBarText, TitleBarControls} from '../Project/FakeFrame';
import {StyledMenu} from '../WindowsFrame/StyledFrame'
import { Fieldset } from './StyledBiographyFrame';
import styled from 'styled-components';

import logo from '../../../assets/menu-img/logo_shadow.png'
import icon from '../../../assets/desktop-icon/Paint.png'
import paintIcon from '../../../assets/paint-img/tools.png'

import profile from '../../../assets/resume-img/profile_03.jpeg'

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
                                    <div><p>tag : <span>#주세현(Joo SeHyeon)</span> , <span>#INTJ</span> , <span>#Front-end</span>{/* , <span>#Hwasung-si</span> */}</p></div>
                                </div>
                            </div>
                        </PaintFrame>
                        <br/>
                        <div style={{padding:'0 15px 20px 15px'}}>
                            <Fieldset style={{padding:'10px 10px'}}>
                            <legend><i style={{fontSize:'20px'}}>🙋🏻‍♂️</i><h3 style={{display:'inline-block'}}>Hello</h3></legend>
                                <div style={{lineHeight:'1.3'}}>
                                    사용자의 입장에서 더 나은 경험을 제공하고, 열정적이고 창의적인 웹 인터페이스를 구현하는 것에 큰 관심을 가지고 있습니다.<br/><br/>
                                    사용자가 웹사이트를 방문했을 때, 직관적이고 매력적인 디자인과 원활한 상호작용을 통해 편안하고 흥미로운 경험을 제공하는 것이 목표입니다.<br/>
                                    디자인, 콘텐츠, 기능을 유기적으로 조화시켜 사용자가 웹사이트를 더욱 즐거워하고 유용하게 이용할 수 있도록 하기 위해 저를 소개하는 포트폴리오 페이지를 만들게 되었습니다.<br/>
                                    사용자 중심적인 접근과 프로젝트를 진행하면서 마주한 다양한 문제들이 생기면 블로그에 작성하고 있습니다.<br/><br/>
                                    이를 통해 문제 해결 과정을 공유하고, 웹사이트의 가치를 높이는 것에 열정을 가지고 있습니다.<br/>
                                    꾸준한 자기 개발과 열정을 통해 웹 개발 분야에서 성공적인 경력을 쌓고자 합니다.<br/><br/>
                                    <div><strong>나의 소개</strong> 폴더에 오신 것을 환영합니다.👏🏻</div>
                                </div>
                            </Fieldset>
                        </div>
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