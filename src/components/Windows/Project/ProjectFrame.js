import React, { useState } from 'react';
import { connect } from 'react-redux'; 

import { StyledFrame, TextSlide, TabList, TabItem, ContentsFrame, TotalContentWrap, LeftContent, RightContent, DisplayFrame, DisplayImg, ProjectImgFrame, ProjectImg, Fieldset, /* Subtitle, */ SkillWrap, SkillList, SkillImg, SkillText, StatusBar } from './StyledProjectFrame';


import display from '../../../assets/project-img/display2.png'

import cloud from '../../../assets/wallpaper/windows_98_clouds.jpg';

import htmlIcon from '../../../assets/project-img/html.png'

/* import TitleImgSuwon from '../../../assets/start-icon/suwon.png' */
/* import TitleImgMay from '../../../assets/project-img/maylogo2.jpg' */
import Project01 from './Project01';

import helf from '../../../assets/start-icon/help.png'
import logo from '../../../assets/menu-img/logo_shadow.png'

import Project01Img from '../../../assets/project-img/project01.png'
import Project02Img from '../../../assets/project-img/project02.png'
import Project03Img from '../../../assets/project-img/project03.png'
import Project04Img from '../../../assets/project-img/project04.png'
import Project05Img from '../../../assets/project-img/project05.png'
import Project06Img from '../../../assets/project-img/project06.png'
import Project07Img from '../../../assets/project-img/project07.png'
import Project08Img from '../../../assets/project-img/project08.png'


function ProjectFrame({project}){
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Project 01',
            title: '수원시청 관공서',
            img: Project01Img,
            tag01: '관공서',
            tag02: '클론코딩',
            leftContent: 
            <ul>
            <li><strong>수원시청</strong>을 클론코딩했습니다.</li>
            <br/>
            <li><strong>JQuery</strong>를 활용하여 슬라이드를 제작했습니다.</li>
            <br/>
            <li>지도 <strong>API</strong>를 사용하여 수원시청의 위치를 추가하였습니다.</li>
            </ul>
            ,
            content: 'project 01 콘텐츠 입니다.',
            logoImg1: ['html5','css3','javascript','jquery'],
            skills: ['HTML','CSS','JavaScript','JQuery'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
            mainFunction: <Project01/>,

        },
        {
            id: 2,
            tabTitle: 'Project 02',
            title: '메이필드 호텔',
            img: Project02Img,
            tag01: '호텔',
            tag02: '반응형',
            content: 'project 02 콘텐츠 입니다.',
            logoImg1: ['html5','css3','jquery','react','vuedotjs'],
            skills: ['HTML','CSS','JQuery','React','Vue'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],

        },
        {
            id: 3,
            tabTitle: 'Project 03',
            title: '영화추천 페이지',
            img: Project03Img,
            tag01: 'Axios',
            tag02: '영화 API',
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
        },
        {
            id: 4,
            tabTitle: 'Project 04',
            title: '포트폴리오98 (현재 페이지)',
            img: Project04Img,
            tag01: '리액트',
            tag02: 'Redux',
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
        },
        {
            id: 5,
            tabTitle: 'Project 05',
            title: '실시간 채팅',
            img: Project05Img,
            tag01: 'Firebase',
            tag02: '채팅',
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
        },
        {
            id: 6,
            tabTitle: 'Project 06',
            title: '커뮤니티',
            img: Project06Img,
            tag01: '리액트',
            tag02: 'AWS',
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
        },
        {
            id: 7,
            tabTitle: 'Project 07',
            title: 'TO-DO 리스트',
            img: Project07Img,
            tag01: '뷰',
            tag02: 'Heroku',
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
        },
        {
            id: 8,
            tabTitle: 'Project 08',
            title: 'ChatGPT 마켓',
            img: Project08Img,
            tag01: 'ChatGPT',
            tag02: 'AI',
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
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
            <TabList>
                {tabs.map((tab, i) =>
                    <TabItem 
                        key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}
                    </TabItem>
                )}
            </TabList>
            <ContentsFrame isMaximized={project.maximized}>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {
                        currentTab === `${tab.id}` && 
                        <div style={{marginTop:'5px'}}>
                            <TotalContentWrap isMaximized={project.maximized}>
                                <LeftContent className='bg'>
                                    <div className='Project-bg' style={{backgroundImage: `url(${cloud})`}}>
                                        <img src={htmlIcon} alt="Icon"/>
                                        <h3>{tab.title}</h3>
                                        <div style={{marginTop:'50px'}}>
                                            {/* <li>수원시청을 클론코딩했습니다.</li>
                                            <li>JQuery를 활용하여 슬라이드를 제작했습니다.</li>
                                            <li>CSS를 배웠습니다.</li> */}
                                            {tab.leftContent}
                                        </div>
                                    </div>
                                    <ul className='line-list'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </LeftContent>
                                <RightContent>
                                    <div>
                                        <Fieldset>
                                            <legend>디스플레이</legend>
                                            <DisplayFrame>
                                                <DisplayImg src={display} alt='display'/>
                                                <ProjectImgFrame>
                                                    <ProjectImg src={tab.img} alt={tab.title}/>
                                                </ProjectImgFrame>
                                            </DisplayFrame>
                                        </Fieldset>
                                        <br/>
                                        <Fieldset style={{marginBottom:'20px'}}>
                                            <legend>기본정보</legend>
                                            <table>
                                                <tbody>
                                                    <tr style={{verticalAlign:'top'}}>
                                                        <td>정보</td>
                                                        <td>:</td>
                                                        <td>수원시청 관공서 클론코딩</td>
                                                    </tr>
                                                    <tr>
                                                        <td>기간</td>
                                                        <td>:</td>
                                                        <td>22.10.02~22.11.02</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Fieldset>
                                    </div>
                                    <div style={{marginBottom:'20px'}}>
                                        {/* <Fieldset>
                                            <legend>{tab.title}</legend> */}
                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                <div style={{width:'50%'}}>
                                                    <Fieldset><legend>사용기술 목록(<u>S</u>)</legend>
                                                        <SkillWrap>
                                                            <div>
                                                                {tab.logoImg1.map((logo, i)=> 
                                                                    <SkillList key={i}>
                                                                        <SkillImg src={`https://simpleicons.org/icons/${logo}.svg`} alt='logo'/>
                                                                        <SkillText>{tab.skills[i]}</SkillText>
                                                                    </SkillList>
                                                                )}
                                                            </div>
                                                        </SkillWrap>
                                                    </Fieldset>
                                                </div>
                                                <div style={{width:'50%'}}>
                                                    <Fieldset>
                                                        <legend>플러그인 or 라이브러리 목록(<u>S</u>)</legend>
                                                        <SkillWrap style={{width:'170px'}}>
                                                            <div>
                                                                {tab.logoImg2.map((logo, i)=> 
                                                                    <SkillList key={i}>
                                                                        <SkillImg src={`https://simpleicons.org/icons/${logo}.svg`} alt='logo'/>
                                                                        <SkillText>{tab.otherSkills[i]}</SkillText>
                                                                    </SkillList>
                                                                )}
                                                            </div>
                                                        </SkillWrap>
                                                    </Fieldset>
                                                </div>
                                            </div>
                                        {/* </Fieldset> */}
                                        <Fieldset>
                                            <legend>주요기능</legend>
                                            {tab.mainFunction}
                                        </Fieldset>
                                    </div>
                                </RightContent>
                            </TotalContentWrap>
                        </div>
                        }
                    </div>
                )}
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
        project: state.project
    }
}

export default connect(mapStateToProps)(ProjectFrame);
