import React, { useState } from 'react';

/* Redux */
import { connect } from 'react-redux'; 

/* Library */
import ReactPlayer from 'react-player';

/* Style */
import { StyledFrame, TextSlide, TabList, TabItem, ContentsFrame, TotalContentWrap, LeftContent, RightContent, DisplayFrame, DisplayImg, ProjectImgFrame, ProjectImg, Fieldset, /* Subtitle, */ SkillWrap, SkillList, SkillImg, SkillText, StatusBar } from './StyledProjectFrame';
import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls} from './FakeFrame';

/* Image */
/* import TitleImgSuwon from '../../../assets/start-icon/suwon.png' */
/* import TitleImgMay from '../../../assets/project-img/maylogo2.jpg' */
import helf from '../../../assets/start-icon/help.png';
import logo from '../../../assets/menu-img/logo_shadow.png';

import htmlIcon from '../../../assets/project-img/html.png';
import cloud from '../../../assets/wallpaper/windows_98_clouds.jpg';
import display from '../../../assets/project-img/display2.png';

import Project01Img from '../../../assets/project-img/project01.png';
import Project02Img from '../../../assets/project-img/project02.png';
import Project03Img from '../../../assets/project-img/project03.png';
import Project04Img from '../../../assets/project-img/project04.png';
import Project05Img from '../../../assets/project-img/project05.png';
import Project06Img from '../../../assets/project-img/project06.png';
import Project07Img from '../../../assets/project-img/project07.png';
import Project08Img from '../../../assets/project-img/project08.png';

import infoTitleIcon from '../../../assets/biography-img/basic.png';
import displayIcon from '../../../assets/biography-img/front.png';
import infomationIcon from '../../../assets/biography-img/readme.png';
import useSkilIcon from '../../../assets/biography-img/setup.png';
import libraryIcon from '../../../assets/biography-img/componentIcon.png';
import cameraIcon from '../../../assets/project-img/camera.png';
import detailIcon from '../../../assets/biography-img/education.png';
import mainFunctionIcon from '../../../assets/biography-img/back.png';


/* Component */
import Project01 from './Project01';
import Project02 from './Project02';
import Project03 from './Project03';
import Project05 from './Project05';
import Project06 from './Project06';
import Project07 from './Project07';
import Project08 from './Project08';






function ProjectFrame({project}){
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Project 01',
            title: '수원시청 관공서',
            img: Project01Img,
            information: '수원시청 관공서 클론코딩입니다.',
            tag01: '관공서',
            tag02: '클론코딩',
            leftContent: 
                        <ul>
                            <li><strong>수원시청</strong>을 클론코딩했습니다.</li>
                            <br/>
                            <li><strong>JavaScript</strong>와 <strong>JQuery</strong>를 활용하여 슬라이드를 제작했습니다.</li>
                            <br/>
                            <li>지도 <strong>API</strong>를 사용하여 수원시청의 위치를 추가하였습니다.</li>
                        </ul>
            ,
            content: 'project 01 콘텐츠 입니다.',
            logoImg1: ['html5','css3','javascript','jquery'],
            skills: ['HTML','CSS','JavaScript','JQuery'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
            videoUrl: "https://www.youtube.com/watch?v=Feh43XJuUIA",
            mainFunction: <Project01/>,

        },
        {
            id: 2,
            tabTitle: 'Project 02',
            title: '메이필드 호텔',
            img: Project02Img,
            information: '수원시청 관공서 클론코딩입니다.',
            tag01: '호텔',
            tag02: '반응형',
            leftContent: 
                        <ul>
                            <li><strong>메이필드호텔</strong>을 클론코딩하였으며, 반응형을 추가하였습니다.</li>
                            <br/>
                            <li><strong>JavaScript</strong>와 <strong>JQuery</strong>를 사용하였습니다.</li>
                            <br/>
                            <li><strong>SCSS</strong>를 사용하여 적용하였습니다.</li>
                            <br/>
                            <li><strong>slick-slider</strong>와 <strong>simply-scroll</strong>을 사용하여 슬라이드를 만들었습니다.</li>
                        </ul>
            ,
            content: 'project 02 콘텐츠 입니다.',
            logoImg1: ['html5','sass','javascript','jquery'],
            skills: ['HTML','SCSS','JavaScript','JQuery'],
            logoImg2: ['slickpic','slickpic'],
            otherSkills: ['slick-slider','simply-scroll'],
            videoUrl: "https://www.youtube.com/watch?v=5Dg-hTpzJok",
            mainFunction: <Project02/>
        },
        {
            id: 3,
            tabTitle: 'Project 03',
            title: '영화추천 페이지',
            img: Project03Img,
            information: '수원시청 관공서 클론코딩입니다.',
            tag01: 'Axios',
            tag02: '영화 API',
            leftContent: 
                        <ul>
                            <li><strong>yts 영화 API</strong>를 사용하였습니다.</li> 
                            <br/>
                            <li><strong>React</strong>를 사용했으며 <strong>반응형</strong>으로 만들었습니다.</li>
                            <br/>
                            <li>전역상태관리를 공부하기위해 <strong>Redux</strong>와 <strong>Context</strong>를 사용해봤습니다.</li>
                            <br/>
                            <li>스타일은 <strong>styled-components</strong>를 사용했습니다.</li>
                        </ul>
            ,
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','react','axios'],
            skills: ['HTML','CSS','React','AXIOS'],
            logoImg2: ['redux','reactrouter','styledcomponents'],
            otherSkills: ['Redux','ReactRouter','Styled-Components'],
            videoUrl: "https://www.youtube.com/watch?v=zgAz6p7sGiM",
            mainFunction: <Project03/>
        },
        {
            id: 4,
            tabTitle: 'Project 04',
            title: '포트폴리오98 (현재 페이지)',
            img: Project04Img,
            information: '수원시청 관공서 클론코딩입니다.',
            tag01: '리액트',
            tag02: 'Redux',
            leftContent: 
                        <ul>
                            <li><strong>yts 영화 API</strong>를 사용하였습니다.</li> 
                            <br/>
                            <li><strong>React</strong>를 사용했으며 <strong>반응형</strong>으로 만들었습니다.</li>
                            <br/>
                            <li>전역상태관리를 공부하기위해 <strong>Redux</strong>와 <strong>Context</strong>를 사용해봤습니다.</li>
                            <br/>
                            <li>스타일은 <strong>styled-components</strong>를 사용했습니다.</li>
                        </ul>
            ,
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
            videoUrl: "https://www.youtube.com/watch?v=Feh43XJuUIA",
            mainFunction: <Project03/>
        },
        {
            id: 5,
            tabTitle: 'Project 05',
            title: '실시간 채팅',
            img: Project05Img,
            information: '수원시청 관공서 클론코딩입니다.',
            tag01: 'Firebase',
            tag02: '채팅',
            leftContent: 
                        <ul>
                            <li><strong>yts 영화 API</strong>를 사용하였습니다.</li> 
                            <br/>
                            <li><strong>React</strong>를 사용했으며 <strong>반응형</strong>으로 만들었습니다.</li>
                            <br/>
                            <li>전역상태관리를 공부하기위해 <strong>Redux</strong>와 <strong>Context</strong>를 사용해봤습니다.</li>
                            <br/>
                            <li>스타일은 <strong>styled-components</strong>를 사용했습니다.</li>
                        </ul>
            ,
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
            videoUrl: "https://www.youtube.com/watch?v=UPbLZrXIRAc",
            mainFunction: <Project05/>
        },
        {
            id: 6,
            tabTitle: 'Project 06',
            title: '커뮤니티',
            img: Project06Img,
            information: '수원시청 관공서 클론코딩입니다.',
            tag01: '리액트',
            tag02: 'AWS',
            leftContent: 
                        <ul>
                            <li><strong>yts 영화 API</strong>를 사용하였습니다.</li> 
                            <br/>
                            <li><strong>React</strong>를 사용했으며 <strong>반응형</strong>으로 만들었습니다.</li>
                            <br/>
                            <li>전역상태관리를 공부하기위해 <strong>Redux</strong>와 <strong>Context</strong>를 사용해봤습니다.</li>
                            <br/>
                            <li>스타일은 <strong>styled-components</strong>를 사용했습니다.</li>
                        </ul>
            ,
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
            videoUrl: "https://www.youtube.com/watch?v=8E1KGiLDe_Y",
            mainFunction: <Project06/>
        },
        {
            id: 7,
            tabTitle: 'Project 07',
            title: 'TO-DO 리스트',
            img: Project07Img,
            information: '수원시청 관공서 클론코딩입니다.',
            tag01: '뷰',
            tag02: 'Heroku',
            leftContent: 
                        <ul>
                            <li><strong>yts 영화 API</strong>를 사용하였습니다.</li> 
                            <br/>
                            <li><strong>React</strong>를 사용했으며 <strong>반응형</strong>으로 만들었습니다.</li>
                            <br/>
                            <li>전역상태관리를 공부하기위해 <strong>Redux</strong>와 <strong>Context</strong>를 사용해봤습니다.</li>
                            <br/>
                            <li>스타일은 <strong>styled-components</strong>를 사용했습니다.</li>
                        </ul>
            ,
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL'],
            logoImg2: ['slickpic'],
            otherSkills: ['slick-slider'],
            videoUrl: "https://www.youtube.com/watch?v=EtXUWvk4v7U",
            mainFunction: <Project07/>
        },
        {
            id: 8,
            tabTitle: 'Project 08',
            title: 'ChatGPT 마켓',
            img: Project08Img,
            information: '수원시청 관공서 클론코딩입니다.',
            tag01: 'ChatGPT',
            tag02: 'AI',
            leftContent: 
                        <ul>
                            <li><strong>ChatGPT</strong>는 앞으로 개발업무에 멋진 툴이 되지 않을까 라는 생각에 <strong>ChatGPT</strong>의 사용방법을 알기위해 만들게 되었습니다.</li> 
                            <br/>
                            <li>제한된 답변길이로 인해 간략하게 적용시킬<strong>BootStrap</strong>을 사용하였습니다.</li>
                            <br/>
                            <li>이 프로젝트를 통해 <strong>ChatGPT</strong>에게 어떻게 질문을 해야하고, 어떻게 알려달라고 해야 할지 배우게 되었습니다.</li>
                        </ul>
            ,
            content: 'project 03 콘텐츠 입니다.',
            logoImg1: ['html5','css3'],
            skills: ['HTML','CSS'],
            logoImg2: ['openai','bootstrap'],
            otherSkills: ['Chat GPT','BootStrap'],
            videoUrl: "https://www.youtube.com/watch?v=7afTi5hJwfA",
            mainFunction: <Project08/>
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
                    <p className="microsoft marquee">$$
                        <span className='title'><img style={{width:'17px'}} src={logo} alt='logo'/>PortFolio98</span>$$<u>D:\\Project</u> 폴더에 오신 것을 환영합니다.
                        <span>Project01</span>은<i>수원시청</i>, 
                        <span>Project02</span>는<i>메이필드호텔</i>, 
                        <span>Project03</span>은<i>주씨네마</i>, 
                        <span>Project04</span>는<i>PortFolio98</i> 그리고 
                        <span>Project05</span>는<i>쇼핑몰</i>
                        <span>Project06</span>은<i>쇼핑몰</i>
                        <span>Project07</span>은<i>쇼핑몰</i>
                        <span>Project08</span>은<i>쇼핑몰</i>, <span>탭</span>을 눌러가며 <span>프로젝트</span>들을 확인해 보세요.
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
                                    <h1 style={{display:'flex', alignItems:'center'}}>
                                        <img style={{width:'35px', marginRight:'10px'}} src={infoTitleIcon} alt='camera-icon'/>
                                        <span>{tab.tabTitle}{" "}정보</span>
                                    </h1>
                                    <hr style={{marginTop:'5px'}}/>
                                    <br/>
                                    <br/>
                                        <Fieldset>
                                            <legend style={{display:'flex', alignItems:'center'}}>
                                                <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={displayIcon} alt='logo'/>
                                                <span style={{fontSize:'14px',fontWeight:'bold'}}>디스플레이</span>
                                            </legend>
                                            <DisplayFrame>
                                                <DisplayImg src={display} alt='display'/>
                                                <ProjectImgFrame>
                                                    <ProjectImg src={tab.img} alt={tab.title}/>
                                                </ProjectImgFrame>
                                            </DisplayFrame>
                                        </Fieldset>
                                        <br/>
                                        <Fieldset style={{marginBottom:'20px'}}>
                                            <legend style={{display:'flex', alignItems:'center'}}>
                                                <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={infomationIcon} alt='logo'/>
                                                <span style={{fontSize:'14px',fontWeight:'bold'}}>기본정보</span>
                                            </legend>
                                            <table>
                                                <tbody>
                                                    <tr style={{verticalAlign:'top'}}>
                                                        <td>정보</td>
                                                        <td>:</td>
                                                        <td>{tab.information}</td>
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
                                                <div style={{width:'48%'}}>
                                                    <Fieldset>
                                                        <legend style={{display:'flex', alignItems:'center'}}>
                                                            <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={useSkilIcon} alt='logo'/>
                                                            <span style={{fontSize:'14px',fontWeight:'bold'}}>사용기술 목록(<u>S</u>)</span>
                                                        </legend>
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
                                                <div style={{width:'48%'}}>
                                                    <Fieldset>
                                                        <legend style={{display:'flex', alignItems:'center'}}>
                                                            <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={libraryIcon} alt='logo'/>
                                                            <span style={{fontSize:'14px',fontWeight:'bold'}}>플러그인 , 라이브러리(<u>S</u>)</span>
                                                        </legend>
                                                        <SkillWrap>
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
                                        <br/>
                                        <br/>
                                        <h1 style={{display:'flex', alignItems:'center'}}><img style={{width:'35px', marginRight:'10px'}} src={cameraIcon} alt='camera-icon'/><span>{tab.tabTitle}{" "}영상</span></h1>
                                        <hr style={{marginTop:'5px'}}/>
                                        <br/>
                                        <br/>
                                        <TitleBarWrap>
                                            <TitleBar>
                                                <TitleBarText><img style={{width:'16px',height:'16px',marginRight:'7px'}} src={cameraIcon} alt='title-icon'/><span>수원시청 관공서</span></TitleBarText>
                                                <TitleBarControls>
                                                    <button></button>
                                                </TitleBarControls>
                                            </TitleBar>
                                            <ReactPlayer
                                            className="player"
                                            url={tab.videoUrl}
                                            width="100%"
                                            heigth="100%"
                                            playing={false}
                                            muted={true}
                                            controls={true}
                                            style={{margin:'2px 0'}}
                                        />
                                        </TitleBarWrap>
                                        <br/>
                                        <br/>
                                        <h1 style={{display:'flex', alignItems:'center'}}>
                                            <img style={{width:'35px', marginRight:'10px'}} src={detailIcon} alt='camera-icon'/>
                                            <span>{tab.tabTitle}{" "}기능 & 설명</span>
                                        </h1>
                                        <hr style={{marginTop:'5px'}}/>
                                        <br/>
                                        <br/>
                                        <Fieldset>
                                            <legend style={{display:'flex', alignItems:'center'}}>
                                                <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={mainFunctionIcon} alt='logo'/>
                                                <span style={{fontSize:'14px',fontWeight:'bold'}}>주요기능</span>
                                            </legend>
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
