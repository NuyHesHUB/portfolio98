import React, { useState } from 'react';

/* Redux */
import { connect } from 'react-redux'; 

/* Library */
import ReactPlayer from 'react-player';

/* Style */
import { StyledFrame, TextSlide, TabList, TabItem, ContentsFrame, TotalContentWrap, LeftContent, RightContent, DisplayFrame, DisplayImg, ProjectImgFrame, ProjectImg, Fieldset, /* Subtitle, */ SkillWrap, SkillList, SkillImg, SkillText, StatusBar, ButtonGroup } from './StyledProjectFrame';
import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls} from './FakeFrame';

/* Image */
/* import TitleImgSuwon from '../../../assets/start-icon/suwon.png' */
/* import TitleImgMay from '../../../assets/project-img/maylogo2.jpg' */
import helf from '../../../assets/start-icon/help.png';
import logo from '../../../assets/menu-img/logo_shadow.png';

import htmlIcon from '../../../assets/project-img/html.png';
import cloud from '../../../assets/wallpaper/windows_98_clouds.jpg';
import display from '../../../assets/project-img/display2.png';
import info from '../../../assets/start-icon/find.png';
import content1 from '../../../assets/desktop-icon/resume.png';
import content2 from '../../../assets/biography-img/tool.png';
import href from '../../../assets/project-img/href.png';

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
/* import infomationIcon from '../../../assets/biography-img/readme.png'; */
import useSkilIcon from '../../../assets/biography-img/setup.png';
import libraryIcon from '../../../assets/biography-img/componentIcon.png';
import cameraIcon from '../../../assets/project-img/camera.png';
import detailIcon from '../../../assets/biography-img/education.png';
import mainFunctionIcon from '../../../assets/biography-img/back.png';

import link from '../../../assets/project-img/link.png';
import github from '../../../assets/biography-img/github.svg';
import webpage from '../../../assets/project-img/webpage.png';
import youtube from '../../../assets/project-img/youtube.svg';

/* Component */
import Project01 from './Project01';
import Project02 from './Project02';
import Project03 from './Project03';
import Project04 from './Project04';
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
            information1: '수원시청 관공서 클론코딩',
            information2: 'gh-pages',
            information3: '4주',
            tag01: '관공서',
            tag02: '클론코딩',
            leftContent: 
                        <ul>
                            <li><strong>수원시청</strong>을 클론코딩했습니다.</li>
                            <br/>
                            <li><strong>JavaScript</strong>와 <strong>JQuery</strong>를 활용하여 슬라이드를 제작했습니다.</li>
                            <br/>
                            <li>지도 <strong>API</strong>를 사용하여 수원 시청의 위치를 추가하였습니다.</li>
                        </ul>
            ,
            rightContent1: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li>관공서 페이지인 수원 시청을 <strong>클론코딩</strong>하였습니다.</li>
                <li>5개의 <strong>서브 페이지</strong>를 제작했습니다.</li>
                <li>카카오에서 제공하는 <strong>지도 API</strong>를 사용하여 수원 시청의 위치를 확인할 수 있습니다.</li>
            </ul>,
            rightContent2: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>slick-slide</strong>를 이용한 커스텀 슬라이드</li>
                <li><strong>JQuery</strong>로 만든 슬라이드</li>
                <li><strong>2 Depth</strong> 메뉴</li>
                <li>CSS hover, animation 효과</li>
                <li><strong>지도 API</strong>사용으로 수원 시청 위치 확인</li>
            </ul>,
            logoImg1: ['html5','css3','javascript','jquery'],
            skills: ['HTML','CSS','JavaScript','JQuery'],
            logoImg2: ['github','slickpic'],
            otherSkills: ['gh-pages','slick-slider'],
            videoUrl: "https://www.youtube.com/watch?v=Feh43XJuUIA",
            githubUrl: "https://github.com/NuyHesHUB/project01_suwon",
            webpageUrl: "https://nuyheshub.github.io/project01_suwon/",
            mainFunction: <Project01/>,

        },
        {
            id: 2,
            tabTitle: 'Project 02',
            title: '메이필드 호텔',
            img: Project02Img,
            information1: '메이필드 호텔 페이지 + 반응형 추가',
            information2: 'gh-pages',
            information3: '4주',
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
            rightContent1: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li>메이필드 호텔을 <strong>클론코딩</strong>했습니다.</li>
                <li><strong>반응형</strong>을 공부하기 위해 기존 페이지에 <strong>반응형</strong> 기능을 추가하였습니다.</li>
                <li>해당 스크롤 위치가 되면 발생하는 이벤트 스크롤 이벤트 함수를 공부하게 되었습니다.</li>
                <li><strong>SCSS</strong>를 공부하기 위해 <strong>SCSS</strong>를 적용하여 페이지를 만들었습니다.</li>
            </ul>,
            rightContent2: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>media screen</strong>을 이용한 반응형 페이지</li>
                <li><strong>SCSS</strong>를 이용한 스타일시트 적용</li>
                <li><strong>JQuery</strong> , <strong>JavaScript</strong>로 만든 슬라이드</li>
                <li>플러그인 (<strong>slick-slide , simply-scroll</strong>을 사용)</li>
            </ul>,
            logoImg1: ['html5','sass','javascript','jquery'],
            skills: ['HTML','SCSS','JavaScript','JQuery'],
            logoImg2: ['github','slickpic','slickpic'],
            otherSkills: ['gh-pages','slick-slider','simply-scroll'],
            videoUrl: "https://www.youtube.com/watch?v=5Dg-hTpzJok",
            githubUrl: "https://github.com/NuyHesHUB/project02_mayfield_hotel",
            webpageUrl: "https://nuyheshub.github.io/project02_mayfield_hotel/",
            mainFunction: <Project02/>
        },
        {
            id: 3,
            tabTitle: 'Project 03',
            title: '영화추천 페이지',
            img: Project03Img,
            information1: '영화 API를 이용한 영화추천 페이지',
            information2: 'gh-pages',
            information3: '3주',
            tag01: 'Axios',
            tag02: '영화 API',
            leftContent: 
                        <ul>
                            <li><strong>yts 영화 API</strong>를 사용한 영화 추천 페이지입니다.</li> 
                            <br/>
                            <li><strong>React</strong>를 사용했으며 <strong>반응형</strong>으로 만들었습니다.</li>
                            <br/>
                            <li>전역 상태 관리를 공부하기 위해 <strong>Redux</strong>와 <strong>Context</strong>를 사용해 봤습니다.</li>
                            <br/>
                            <li>스타일은 <strong>styled-components</strong>를 사용했습니다.</li>
                        </ul>
            ,
            rightContent1: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>yts 영화 API</strong>를 사용하여 <strong>영화 인기작 추천 페이지</strong>를 만들었습니다.</li>
                <li><strong>Styled-Components</strong>를 사용하여 <strong>스타일</strong>적용 했습니다.</li>
                <li><strong>React-Router-Dom</strong>을 사용하여 페이지 이동을 구현했습니다.</li>
                <li>전역 상태 관리 <strong>Redux</strong> , <strong>Context</strong>를 사용하여 한번 호출된 <strong>Axios</strong>에 불필요한 로딩을 없애보았습니다.</li>
                <li>반응형 기능을 추가하였습니다.</li>
            </ul>,
            rightContent2: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>yts 영화 API</strong>, <strong>Axios</strong>호출 데이터 활용</li>
                <li><strong>React-Router-Dom</strong>을 사용한 페이지이동</li>
                <li>전역 상태 관리로 50개의 영화 API 뒤로 가기 시 재호출 막음</li>
                <li><strong>나만의 영화 리스트 만들기</strong> 란을 만들어 보고 싶은 영화 리스트 추가 메모 기능</li>
                <li><strong>media screen</strong>을 이용한 반응형 페이지</li>
            </ul>,
            logoImg1: ['react','redux','javascript','axios','css3'],
            skills: ['React','Redux','JavaScript','AXIOS','CSS'],
            logoImg2: ['github','reactrouter','styledcomponents'],
            otherSkills: ['gh-pages','React-Router-Dom','Styled-Components'],
            videoUrl: "https://www.youtube.com/watch?v=zgAz6p7sGiM",
            githubUrl: "https://github.com/NuyHesHUB/project03_zoocinema_movie",
            webpageUrl: "https://nuyheshub.github.io/project03_zoocinema_movie/",
            mainFunction: <Project03/>
        },
        {
            id: 4,
            tabTitle: 'Project 04',
            title: '포트폴리오98',
            img: Project04Img,
            information1: '프로젝트를 소개하기위한 포트폴리오 페이지',
            information2: 'gh-pages',
            information3: '10주',
            tag01: '리액트',
            tag02: 'Redux',
            leftContent: 
                        <ul>
                            <li><strong>Windows98</strong>을 아이디어로 만든 포트폴리오 프로젝트 입니다.</li> 
                            <br/>
                            <li><strong>React</strong>를 사용했습니다.</li>
                            <br/>
                            <li>전역 상태 관리를 위해 <strong>Redux</strong>를 사용했습니다.</li>
                            <br/>
                            <li><strong>action</strong>과 <strong>reducer</strong>를 관리하여 이벤트와 state를 관리했습니다.</li>
                            <br/>
                            <li>스타일은 <strong>styled-components</strong>를 사용했습니다.</li>
                        </ul>
            ,
            rightContent1: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>Windows98</strong>을 아이디어로 <strong>포트폴리오</strong>를 만들었습니다.</li>
                <li><strong>Styled-Components</strong>를 사용하여 <strong>스타일</strong>적용 했습니다.</li>
                <li><strong>React-Router-Dom</strong>을 사용하여 페이지 이동을 구현했습니다.</li>
                <li><strong>Redux</strong>를 사용하여 각 <strong>아이콘</strong>의 상호작용과 이벤트를 구현했습니다.</li>
                <li>반응형 기능을 추가하였습니다.</li>
            </ul>,
            rightContent2: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>KEY</strong>입력 함수를 만들어 <strong>BIOS</strong>에서 키 입력 시 <strong>로딩</strong> , <strong>홈</strong>화면 구현</li>
                <li><strong>reducer</strong> state 관리로 초기 <strong>튜토리얼</strong>이 뜨는 기능 , 각 <strong>아이콘</strong>의 <strong>최소화</strong>, <strong>최대화</strong>, <strong>닫기</strong> 기능 구현</li>
                <li><strong>action</strong>과 <strong>함수 호출</strong>로 이벤트 기능 구현</li>
                <li><strong>react-player</strong>와 <strong>react-pdf</strong>를 사용하여 유튜브 영상 , pdf 뷰어 기능</li>
            </ul>,
            logoImg1: ['react','redux','javascript','sass','adobephotoshop'],
            skills: ['React','Redux','JavaScript','SASS','PhotoShop'],
            logoImg2: ['github','reactrouter','slickpic','slickpic','styledcomponents'],
            otherSkills: ['gh-pages','React-Router-Dom','React-PDF','React-Player','Styled-Components'],
            videoUrl: "https://www.youtube.com/watch?v=sRMSiOL2yT8",
            githubUrl: "https://github.com/NuyHesHUB/project04_Portfolio98",
            webpageUrl: "https://nuyheshub.github.io/project04_Portfolio98/",
            mainFunction: <Project04/>
        },
        {
            id: 5,
            tabTitle: 'Project 05',
            title: '실시간 채팅',
            img: Project05Img,
            information1: '실시간 채팅 페이지',
            information2: 'Firebase',
            information3: '3주',
            tag01: 'Firebase',
            tag02: '채팅',
            leftContent: 
                        <ul>
                            <li>유저 간 실시간 <strong>채팅</strong>을 할 수 있는 페이지입니다.</li> 
                            <br/>
                            <li><strong>Firebase</strong>를 DB로 사용하고 빌드하여 배포했습니다.</li> 
                            <br/>
                            <li><strong>Firebase</strong>을 사용하여 이메일로 유저 생성을 했습니다.</li> 
                            <br/>
                            <li><strong>React</strong>를 사용했으며 <strong>Redux</strong>로 전역 상태 관리를 했습니다.</li>
                            <br/>
                            <li>스타일은 <strong>BootStrap</strong>을 사용했습니다.</li>
                        </ul>
            ,
            rightContent1: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li>유저 간 실시간 채팅을 할 수 있는 페이지를 만들었습니다.</li> 
                <li><strong>FireBase</strong>로 데이터베이스 , 배포</li>
                <li><strong>FireBase</strong>를 사용하여 유저 생성(가입)되게 했습니다.</li>
                <li><strong>React-Hook-Form</strong>을 사용하여 가입 유효성을 체크 했습니다.</li>
                <li><strong>Redux</strong>를 사용하여 유저 정보를 업데이트 했습니다.</li>
                <li><strong>BootStrap</strong>을 사용하여 <strong>스타일</strong>적용 했습니다.</li>
            </ul>,
            rightContent2: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>React-Hook-Form</strong> 유효성 체크 , <strong>FireBase</strong> 유저생성 회원가입</li>
                <li><strong>Redux</strong> 스토어 데이터관리, <strong>FireBase</strong>의 테이블 생성하여 <strong>ChatRoom</strong> 생성</li>
                <li><strong>FireBase</strong>스토리지에 이미지 업로드하여 채팅방 <strong>이미지</strong> 전송 기능 , 프로필 <strong>이미지</strong> 수정 기능</li>
                <li><strong>유저</strong>가 <strong>타이핑</strong>할 때 상대방 알림</li>
                <li><strong>채팅방</strong> 즐겨찾기 , 다이렉트 메세지 기능</li>
            </ul>,
            logoImg1: ['react','redux','javascript','css3','bootstrap'],
            skills: ['React','Redux','JavaScript','CSS','BootStrap'],
            logoImg2: ['firebase','reactrouter','slickpic','slickpic','slickpic','slickpic'],
            otherSkills: ['FireBase','React-Router-Dom','md5','moment','React-Icon','react-hook-form'],
            videoUrl: "https://www.youtube.com/watch?v=UPbLZrXIRAc",
            githubUrl: "https://github.com/NuyHesHUB/project05_chat_app",
            webpageUrl: "https://project-chat-app-8bf07.web.app/",
            mainFunction: <Project05/>
        },
        {
            id: 6,
            tabTitle: 'Project 06',
            title: '커뮤니티',
            img: Project06Img,
            information1: '커뮤니티 페이지',
            information2: 'AWS EC2',
            information3: '4주',
            tag01: '리액트',
            tag02: 'AWS',
            leftContent: 
                        <ul>
                            <li>유저 간 다양한 커뮤니티 생성과 포스트를 작성하는 <strong>커뮤니티</strong>페이지 입니다.</li> 
                            <br/>
                            <li><strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>로 만들었습니다.</li>
                            <br/>
                            <li>백엔드까지 공부하기위해 <strong>Docker</strong>와 <strong>PostgreSQL</strong>을 사용하여 <strong>AWS</strong>로 배포했습니다.</li>
                            <br/>
                            <li>스타일은 <strong>TailWind</strong>를 사용했습니다.</li>
                        </ul>
            ,
            rightContent1: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li>유저 간 다양한 커뮤니티 생성과 포스트를 작성하는 <strong>커뮤니티</strong>페이지 입니다.</li>
                <li><strong>React-Context</strong>를 이용하여 회원가입을 만들었습니다.</li>
                <li>타입스크립트를 공부하기위해 프론트엔드는<strong>React</strong> , <strong>Next.js</strong> , <strong>TypeScript</strong>로 만들었습니다.</li>
                <li>백엔드는 <strong>Express.js</strong> , <strong>TypeScript</strong>로 만들었습니다.</li>
                <li><strong>PostgreSQL</strong>를 데이터베이스로 사용하고 <strong>AWS EC2</strong>로 배포했습니다.</li>
                <li><strong>TailWind</strong>를 사용하여 <strong>스타일</strong>적용 했습니다.</li>
            </ul>,
            rightContent2: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>React-Context</strong>를 이용한 회원가입 기능</li>
                <li><strong>커뮤니티</strong> 생성, 배너와 커뮤니티 대표이미지 업로드 기능</li>
                <li><strong>포스트</strong>작성과 좋아요 , 싫어요 기능</li>
                <li><strong>유저</strong>정보를 볼 수 있고, 유저가 작성한 글 , 작성 댓글 보기 기능</li>
                <li>상위 <strong>커뮤니티</strong> 나열 기능</li>
            </ul>,
            logoImg1: ['react','typescript','nextdotjs','express','docker','postgresql','tailwindcss','css3','axios'],
            skills: ['React','TypeScript','Next.js','Express.js','Docker','PostgreSQL','TailWind','CSS','AXIOS'],
            logoImg2: ['amazonaws','pm2','slickpic','slickpic','slickpic','slickpic','slickpic','slickpic'],
            otherSkills: ['AWS','PM2','TypeORM','ClassNames','Day.js','React-Dom','React-Icons','Sharp'],
            videoUrl: "https://www.youtube.com/watch?v=8E1KGiLDe_Y",
            githubUrl: "https://github.com/NuyHesHUB/project04_commuity",
            webpageUrl: "http://ec2-3-24-85-149.ap-southeast-2.compute.amazonaws.com/",
            mainFunction: <Project06/>
        },
        {
            id: 7,
            tabTitle: 'Project 07',
            title: 'TO-DO 리스트',
            img: Project07Img,
            information1: 'Vue를 이용한 To-Do 리스트',
            information2: 'Heroku',
            information3: '2주',
            tag01: '뷰',
            tag02: 'Heroku',
            leftContent: 
                        <ul>
                            <li><strong>투 두 리스트</strong> 페이지입니다.</li> 
                            <br/>
                            <li><strong>Vue.js</strong>를 사용했습니다.</li>
                            <br/>
                            <li><strong>투 두 리스트</strong>를 저장하기 위해 <strong>Json-server</strong>를 사용했습니다.</li>
                            <br/>
                            <li><strong>Heroku</strong>로 배포하였습니다.</li>
                        </ul>
            ,
            rightContent1: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li>할 일을 관리하는 <strong>투 두 리스트</strong> 페이지입니다.</li>
                <li>Vue.js를 공부하기 위해 <strong>Vue.js</strong>로 만들었습니다.</li>
                <li>Json-server를 사용하여 REST API를 만들었습니다.</li>
                <li><strong>Heroku</strong>로 배포했습니다.</li>
            </ul>,
            rightContent2: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li>할 일을 추가 기능</li>
                <li>할 일을 수정 , 삭제 기능</li>
                <li>할 일을 검색할 수 있는 검색</li>
            </ul>,
            logoImg1: ['vuedotjs','css3','axios'],
            skills: ['Vue.js','CSS','AXIOS'],
            logoImg2: ['json','heroku'],
            otherSkills: ['Json-server','Heroku'],
            videoUrl: "https://www.youtube.com/watch?v=EtXUWvk4v7U",
            githubUrl: "https://github.com/NuyHesHUB/project06_vue_todo",
            webpageUrl: "https://vue-todolist.herokuapp.com/",
            mainFunction: <Project07/>
        },
        {
            id: 8,
            tabTitle: 'Project 08',
            title: 'ChatGPT 마켓',
            img: Project08Img,
            information1: 'ChatGPT를 사용한 간단한 마켓페이지',
            information2: 'gh-pages',
            information3: '4일',
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
            rightContent1: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li><strong>ChatGPT</strong>는 앞으로 개발업무에 멋진 툴이 되지 않을까 라는 생각에 <strong>ChatGPT</strong>의 사용방법을 알기위해 만들게 되었습니다.</li> 
                <li><strong>ChatGPT</strong>에게 프롬프트(질문) 입력을 공부하기 위해 구글이나 유튜브를 통해 공부하게 된 계기가 되었습니다.</li>
                <li><strong>ChatGPT</strong>에게 받을 답변 길이가 제한적이므로 효과적으로 코드를 구성하기 위해 <strong>BootStrap</strong>을 사용하여 코드를 얻었습니다.</li>
            </ul>,
            rightContent2: 
            <ul className='right-content' style={{marginLeft:'20px'}}>
                <li>오로지 <strong>ChatGPT</strong>와의 대화로 코드를 얻어 구성하게 된 페이지입니다.</li>
                <li>날씨 API</li>
                <li>TOP 버튼</li>
                <li>배너 이미지 슬라이드</li>
            </ul>,
            logoImg1: ['html5','css3'],
            skills: ['HTML','CSS'],
            logoImg2: ['openai','bootstrap'],
            otherSkills: ['Chat GPT','BootStrap'],
            videoUrl: "https://www.youtube.com/watch?v=7afTi5hJwfA",
            githubUrl: "https://github.com/NuyHesHUB/project08_GPT",
            webpageUrl: "https://nuyheshub.github.io/project08_GPT",
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
                        <span>Project01</span>은<i>관공서 클론코딩</i>, 
                        <span>Project02</span>는<i>반응형 페이지</i>, 
                        <span>Project03</span>은<i>영화 추천 페이지</i>, 
                        <span>Project04</span>는<i>PortFolio98</i> 그리고 
                        <span>Project05</span>는<i>실시간 채팅 페이지</i>
                        <span>Project06</span>은<i>커뮤니티 페이지</i>
                        <span>Project07</span>은<i>투두 리스트</i>
                        <span>Project08</span>은<i>ChatGPT로 만든 간단 페이지</i>입니다. <span>탭</span>을 눌러가며 <span>프로젝트</span>들을 확인해 보세요.
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
                                <RightContent isMaximized={project.maximized}>
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
                                            <br/>
                                            <Fieldset>
                                                <legend style={{display:'flex', alignItems:'center'}}>
                                                    <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={info} alt='info'/>
                                                    <span style={{fontSize:'14px'}}>기본정보</span>
                                                </legend>
                                                <div className='info' style={{textAlign:'center',background:'transparent'}}>
                                                    <div style={{margin:'0 auto',marginBottom:'10px'}}>
                                                        <label>정보 : </label>
                                                        <input className='info-input' type="text" style={{width:'300px'}} value={tab.information1} readOnly/>
                                                    </div>
                                                    <div style={{margin:'0 auto',marginBottom:'10px'}}>
                                                        <label>배포 : </label>
                                                        <input className='info-input' type="text" style={{width:'300px'}} value={tab.information2} readOnly/>
                                                    </div>
                                                    <div style={{}}>
                                                        <label>기간 : </label>
                                                        <input className='info-input' type="text" style={{width:'300px'}} value={tab.information3} readOnly/>
                                                    </div>
                                                </div>
                                            </Fieldset>
                                        </Fieldset>
                                        <br/>
                                        <h1 style={{display:'flex', alignItems:'center'}}>
                                            <img style={{width:'35px', marginRight:'10px'}} src={infoTitleIcon} alt='camera-icon'/>
                                            <span>{tab.tabTitle}{" "}프로젝트 소개</span>
                                        </h1>
                                        <hr style={{marginTop:'5px'}}/>
                                        <br/>
                                        <br/>
                                        <Fieldset style={{marginBottom:'20px'}}>
                                            <legend style={{display:'flex', alignItems:'center'}}>
                                                <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={content1} alt='logo'/>
                                                <span style={{fontSize:'14px',fontWeight:'bold'}}>프로젝트 내용</span>
                                            </legend>
                                            {tab.rightContent1}
                                        </Fieldset>
                                        <Fieldset style={{marginBottom:'20px'}}>
                                            <legend style={{display:'flex', alignItems:'center'}}>
                                                <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={content2} alt='logo'/>
                                                <span style={{fontSize:'14px',fontWeight:'bold'}}>주요기능</span>
                                            </legend>
                                            {tab.rightContent2}
                                        </Fieldset>
                                    </div>
                                    <div style={{marginBottom:'20px'}}>
                                        <h1 style={{display:'flex', alignItems:'center'}}>
                                            <img style={{width:'35px', marginRight:'10px'}} src={infoTitleIcon} alt='camera-icon'/>
                                            <span>{tab.tabTitle}{" "} 사용기술</span>
                                        </h1>
                                        <hr style={{marginTop:'5px'}}/>
                                        <br/>
                                        <br/>
                                        {/* <Fieldset>
                                            <legend>{tab.title}</legend> */}
                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                <div style={{width:'48%'}}>
                                                    <Fieldset style={{padding:'10px 15px'}}>
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
                                                    <Fieldset style={{padding:'10px 15px'}}>
                                                        <legend style={{display:'flex', alignItems:'center'}}>
                                                            <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={libraryIcon} alt='logo'/>
                                                            <span style={{fontSize:'14px',fontWeight:'bold'}}>기타 사용기술 목록(<u>S</u>)</span>
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
                                            <br/>
                                            <br/>
                                            <h1 style={{display:'flex', alignItems:'center'}}>
                                                    <img style={{width:'35px', marginRight:'10px'}} src={href} alt='camera-icon'/>
                                                    <span>{tab.tabTitle}{" "} 링크</span>
                                            </h1>
                                            <hr style={{marginTop:'5px'}}/>
                                            <br/>
                                            <Fieldset>
                                                <legend style={{display:'flex', alignItems:'center'}}>
                                                    <img style={{width:'18px',height:'18px',marginRight:'5px'}} src={link} alt='link'/>
                                                    <span style={{fontSize:'14px',fontWeight:'bold'}}>링크</span>
                                                </legend>
                                                <div style={{display:'flex', justifyContent:'space-around'}}>
                                                    <ButtonGroup 
                                                        onClick={()=> { window.open(tab.githubUrl)}}
                                                        style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                        <img style={{width:'15px',height:'15px',marginRight:'5px'}} src={github} alt='github'/>
                                                        <span>GitHub</span>
                                                    </ButtonGroup>
                                                    <ButtonGroup 
                                                        onClick={()=> { window.open(tab.webpageUrl)}}
                                                        style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                        <img style={{width:'15px',height:'15px',marginRight:'5px'}} src={webpage} alt='youtube'/>
                                                        <span>Web Site</span>
                                                    </ButtonGroup>
                                                    <ButtonGroup 
                                                        onClick={()=> { window.open(tab.videoUrl)}}
                                                        style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                        <img style={{width:'15px',height:'15px',marginRight:'5px'}} src={youtube} alt='youtube'/>
                                                        <span>Youtube</span>
                                                    </ButtonGroup>
                                                </div>
                                            </Fieldset>
                                        {/* </Fieldset> */}
                                        <br/>
                                        <br/>
                                        <h1 style={{display:'flex', alignItems:'center'}}><img style={{width:'35px', marginRight:'10px'}} src={cameraIcon} alt='camera-icon'/><span>{tab.tabTitle}{" "}영상</span></h1>
                                        <hr style={{marginTop:'5px'}}/>
                                        <br/>
                                        <br/>
                                        <TitleBarWrap>
                                            <TitleBar>
                                                <TitleBarText><img style={{width:'16px',height:'16px',marginRight:'7px'}} src={cameraIcon} alt='title-icon'/><span>{tab.title} 소개 영상</span></TitleBarText>
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
