import React, { useState } from 'react';
import { connect } from 'react-redux'; 

import { StyledFrame, TextSlide, ContentsFrame, TotalContentWrap, LeftContent, RightContent, Fieldset, SkillText, StatusBar } from './StyledBiographyFrame';


import display from '../../../assets/project-img/display2.png'
import Project01Img from '../../../assets/project-img/project01.png'
import Project02Img from '../../../assets/project-img/project02.png'
import cloud from '../../../assets/wallpaper/windows_98_clouds.jpg';
import bg from '../../../assets/wallpaper/background.png'

import profile from '../../../assets/resume-img/profile.jpg'

import TitleImgSuwon from '../../../assets/start-icon/suwon.png'
import TitleImgMay from '../../../assets/project-img/maylogo2.jpg'

import helf from '../../../assets/start-icon/help.png'
import logo from '../../../assets/menu-img/logo_shadow.png'

function BiographyFrame({biography}){
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Project 01',
            titleImg: TitleImgSuwon,
            title: '수원시청',
            img: Project01Img,
            tag01: '관공서',
            tag02: '클론코딩',
            content: 'project 01 콘텐츠 입니다.',
            logoImg: ['html5','css3','jquery'],
            skills: ['HTML','CSS','JQuery'],
            mainFunction: '',

        },
        {
            id: 2,
            tabTitle: 'Project 02',
            titleImg: TitleImgMay,
            title: '메이필드 호텔',
            img: Project02Img,
            tag01: '호텔',
            tag02: '반응형',
            content: 'project 02 콘텐츠 입니다.',
            logoImg: ['html5','css3','jquery','react','vuedotjs'],
            skills: ['HTML','CSS','JQuery','React','Vue']

        },
        {
            id: 3,
            tabTitle: 'Project 03',
            title: '영화웹',
            img: Project02Img,
            tag01: '호텔',
            tag02: '반응형',
            content: 'project 03 콘텐츠 입니다.',
            logoImg: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL']
        },
        {
            id: 4,
            tabTitle: 'Project 04',
            title: '포트폴리오',
            img: Project02Img,
            tag01: '리액트',
            tag02: '반응형',
            content: 'project 03 콘텐츠 입니다.',
            logoImg: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL']
        },
    ];
    /* console.log('ProjectFrame 맥시',project.maximized); */

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <StyledFrame>
            <TextSlide>
                <div className='logo-wrap'><img src={helf} alt='helf'/></div>
                <div className='text-wrap'>
                    <p className="microsoft marquee">
                        $$<span className='title'><img style={{width:'17px'}} src={logo} alt='logo'/>PortFolio98</span>$$<u>D:\\Project</u> 폴더에 오신 것을 환영합니다.
                        <span>Project01</span>은<i>수원시청</i>, 
                        <span>Project02</span>는<i>메이필드호텔</i>, 
                        <span>Project03</span>은<i>주씨네마</i>, 
                        <span>Project04</span>는<i>PortFolio98</i> 그리고 
                        <span>Project05</span>는<i>쇼핑몰</i>입니다, <span>탭</span>을 눌러가며 <span>프로젝트</span>들을 확인해 보세요.
                    </p>
                </div>
            </TextSlide>
            <ContentsFrame isMaximized={biography.maximized}>
                    <div>
                        <div style={{marginTop:'5px'}}>
                            <TotalContentWrap isMaximized={biography.maximized}>
                                <LeftContent className='bg'>
                                        <div className='Biography-bg' style={{backgroundImage: `url(${bg})`}}>
                                            {/* <img src={profile} alt="Icon"/> */}
                                            <div className='bg-wrap'>
                                                <div className='profile-wrap'>
                                                    <div className='profile' style={{backgroundImage: `url(${profile})`}}></div>
                                                    <p>Hello World</p>
                                                </div>
                                                <div className='content-wrap'>
                                                    <ul className="tree-view">
                                                    <li><a href="#intro">Intro</a></li>
                                                    <li>
                                                        <a href="#components">Components</a>
                                                        <ul>
                                                        <li><a href="#button">Button</a></li>
                                                        <li><a href="#checkbox">Checkbox</a></li>
                                                        <li><a href="#option-button">OptionButton</a></li>
                                                        <li><a href="#group-box">GroupBox</a></li>
                                                        <li><a href="#text-box">TextBox</a></li>
                                                        <li><a href="#slider">Slider</a></li>
                                                        <li><a href="#dropdown">Dropdown</a></li>
                                                        <li>
                                                            <a href="#window">Window</a>
                                                            <ul>
                                                            <li><a href="#title-bar">Title Bar</a></li>
                                                            <li><a href="#window-contents">Window contents</a></li>
                                                            <li><a href="#status-bar">Status Bar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#tree-view">TreeView</a></li>
                                                        <li><a href="#tabs">Tabs</a></li>
                                                        <li><a href="#table-view">TableView</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#issues-contributing-etc">Issues, Contributing, etc.</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                </LeftContent>
                                <RightContent>

                                </RightContent>
                            </TotalContentWrap>
                        </div>
                    </div>
            </ContentsFrame>
                {tabs.map((tab, i) =>
                <div key={i}>
                    {
                        currentTab === `${tab.id}` &&
                        <StatusBar>
                            <p>#{tab.title}</p>
                            <p>#{tab.tag01}</p>
                            <p>#{tab.tag02}</p>
                        </StatusBar>
                    }
                </div>
                )}
        </StyledFrame>
    );
    
};
const mapStateToProps = (state) => {
    return{
        biography: state.biography
    }
}

export default connect(mapStateToProps)(BiographyFrame);
