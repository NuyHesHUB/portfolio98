import React from 'react';

/* Redux */
import { connect } from 'react-redux'; 

/* Style */
import { StyledFrame, TextSlide, ContentsFrame, TotalContentWrap, LeftContent, RightContent, Fieldset, MyskillsFrame, TableFrame, StatusBar } from './StyledBiographyFrame';


import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls } from '../Project/FakeFrame';
import DemoDelete from './DemoDelete';
import ProfileFrame from './ProfileFrame';
/* import InstagramFrame from './InstagramFrame'; */
/* import VelogFrame from './VelogFrame'; */
/* import GithubFrame from './GithubFrame'; */
import HobbiesFrame from './HobbiesFrame';

import bg from '../../../assets/wallpaper/background.png';

import profile from '../../../assets/resume-img/profile_01.jpeg';

import info from '../../../assets/biography-img/info.png';
import logo from '../../../assets/menu-img/logo_shadow.png';
import pofologo from '../../../assets/about-img/about_logo.png';

import circle from '../../../assets/biography-img/circle.svg';
import semo from '../../../assets/biography-img/semo.svg';
import gear from '../../../assets/biography-img/gear.svg';

/* Icon */
import setup from '../../../assets/biography-img/setup.png';
import componentsIcon from '../../../assets/biography-img/componentIcon.png';
import paintIcon from '../../../assets/desktop-icon/Paint.png';
import readme from '../../../assets/biography-img/readme.png';
import myskills from '../../../assets/biography-img/myskills.png';
import education from '../../../assets/biography-img/education.png';
import timeline from '../../../assets/biography-img/timeline.png';
import certificate from '../../../assets/biography-img/license.png';
import hobbies from '../../../assets/biography-img/hobbies.png';
import sns from '../../../assets/biography-img/sns.png';
import insta from '../../../assets/biography-img/insta.png';
import velog from '../../../assets/desktop-icon/velog.png';
import github from '../../../assets/desktop-icon/github.png';
import contact from '../../../assets/biography-img/contact.png';
import bioicon from '../../../assets/desktop-icon/biography.png';

import front from '../../../assets/biography-img/front.png';
import back from '../../../assets/biography-img/back.png';

import html from '../../../assets/biography-img/html.svg';
import css from '../../../assets/biography-img/css.svg';
import sass from '../../../assets/biography-img/sass.svg';
import jquery from '../../../assets/biography-img/jquery.svg';
import javascript from '../../../assets/biography-img/javascript.svg';
import react from '../../../assets/biography-img/react.svg';
import vue from '../../../assets/biography-img/vue.svg';
import boot from '../../../assets/biography-img/boot.svg';
import redux from '../../../assets/biography-img/redux.svg';
import reactquery from '../../../assets/biography-img/reactquery.svg';
import styledcomponents from '../../../assets/biography-img/styledcomponents.svg';
import mui from '../../../assets/biography-img/mui.svg';
import ant from '../../../assets/biography-img/ant.svg';
import reactrouter from '../../../assets/biography-img/reactrouter.svg';
import nodejs from '../../../assets/biography-img/node.svg';
import sqlite from '../../../assets/biography-img/sqlite.svg';
import postman from '../../../assets/biography-img/postman.svg';
import vercel from '../../../assets/biography-img/vercel.svg';
import git from '../../../assets/biography-img/git.svg';
import gith from '../../../assets/biography-img/github.svg';
import figma from '../../../assets/biography-img/figma.svg';
import zeplin from '../../../assets/biography-img/zeplin.jpg';
import tailwind from '../../../assets/biography-img/tailwind.svg';
import ts from '../../../assets/biography-img/ts.svg';
import next from '../../../assets/biography-img/next.svg';
import firebase from '../../../assets/biography-img/firebase.svg';
import postgresql from '../../../assets/biography-img/postgres.svg';
import aws from '../../../assets/biography-img/aws.svg';
import heroku from '../../../assets/biography-img/heroku.svg';
import docker from '../../../assets/biography-img/docker.svg';
import gpt from '../../../assets/biography-img/gpt.svg';
import basic from '../../../assets/biography-img/basic.png';
import tool from '../../../assets/biography-img/tool.png';

function BiographyFrame({biography}){
    /* console.log('ProjectFrame 맥시',project.maximized); */
    return (
        <StyledFrame>
            <TextSlide>
                <div className='logo-wrap'><img src={info} alt='helf'/></div>
                <div className='text-wrap'>
                    <p className="microsoft marquee">
                        $$<span className='title'><img style={{width:'17px'}} src={logo} alt='logo'/>PortFolio98</span>$$<u>D:\\Biography</u> 주세현의 자기소개 폴더에 오신것을 환영합니다.
                        <span>Profile</span>은<i>저의 소개를 확인하실 수 있고</i>, 
                        <span>Hobbies</span>는<i>저의 취미</i>, 
                        <span>SNS</span>는<i>저의 Instagram, Velog, GitHub 를 소개하는 공간이며</i>, 
                        <span>Contact</span>는 저의 메일과 연락처를 확인하실 수 있습니다. 
                        <span>탭</span>을 눌러가며 <span>저의 소개</span>들을 확인해 보세요.
                    </p>
                </div>
            </TextSlide>
            <ContentsFrame isMaximized={biography.maximized}>
                    <div>
                        <div style={{marginTop:'5px'}}>
                            <TotalContentWrap isMaximized={biography.maximized}>
                                {/* ---------------------------------------- */}
                                {/* ---------------Left Content------------- */}
                                {/* ---------------------------------------- */}
                                <LeftContent isMaximized={biography.maximized} className='bg'>       
                                        <div className='Biography-bg' style={{backgroundImage: `url(${bg})`}}>
                                            <div style={{color:'#fff', textAlign:'center', display:'flex',justifyContent:'center'}}><img style={{width:'20px'}} src={setup} alt='setup'/><p style={{fontWeight:'bold', textDecoration:'underline'}}>Biography <i style={{fontStyle:'normal',color:'yellow'}}>설치마법사</i></p></div>
                                            <div className='bg-wrap'>
                                                <div className='profile-wrap'>
                                                    <div className='profile' style={{backgroundImage: `url(${profile})`}}></div>
                                                    <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'5px'}}><img style={{width:'14px', marginRight:'3px'}} src={bioicon} alt='icon'/><p style={{color:'#551a8b',textDecoration:'underline'}}>Welcome to Biography</p></div>
                                                </div>
                                                <div className='content-wrap'>
                                                    <ul className="tree-view">
                                                        <li>
                                                            <div>
                                                                <img src={componentsIcon} alt="biography"/>
                                                                <a href="#profile">Components</a>
                                                            </div>
                                                        <ul>
                                                            <li>
                                                                <div>
                                                                    <img src={paintIcon} alt="profile"/>
                                                                    <a href="#profile">Profile</a>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <img src={readme} alt="readme"/>
                                                                        <a href="#readme">ReadMe</a>
                                                                    </li>
                                                                    <li>
                                                                        <img src={myskills} alt="myskills"/>
                                                                        <a href="#myskills">MySkills</a>
                                                                    </li>
                                                                    <li>
                                                                        <img src={education} alt="education"/>
                                                                        <a href="#education">Education</a>
                                                                    </li>
                                                                    <li>
                                                                        <img src={timeline} alt="timeline"/>
                                                                        <a href="#timeline">TimeLine</a>
                                                                    </li>
                                                                    <li>
                                                                        <img src={certificate} alt="certificate"/>
                                                                        <a href="#certificate">Certificate</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <img src={hobbies} alt="hobbies"/>
                                                                    <a href="#hobbies">Hobbies</a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <img src={sns} alt="sns"/>
                                                                    <a href="#sns">SNS</a>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <img src={insta} alt="insta"/>
                                                                        <a href="#instagram">Instagram</a>
                                                                    </li>
                                                                    <li>
                                                                        <img src={velog} alt="velog"/>
                                                                        <a href="#velog">Velog</a>
                                                                    </li>
                                                                    <li>
                                                                        <img src={github} alt="github"/>
                                                                        <a href="#github">Github</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <img src={contact} alt="contact"/>
                                                                    <a href="#contact">Contact</a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    </ul>
                                                    <div style={{position:'absolute', bottom: '10px', width:'100%'}}>
                                                        <img style={{width:'50px',opacity:'.4'}} src={pofologo} alt='portfolio'/>
                                                        <hr style={{height:'5px', opacity:'.4', width:'95%'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </LeftContent>
                                {/* ---------------------------------------- */}
                                {/* --------------Right Content------------- */}
                                {/* ---------------------------------------- */}
                                <RightContent isMaximized={biography.maximized}>
                                    <h1 id='profile' style={{fontSize:'3rem'}}><img style={{width:'45px'}} src={paintIcon} alt='profile'/>PROFILE</h1>
                                    <hr/>
                                    <br/>
                                    <Fieldset>
                                        <legend>Hello</legend>
                                        <p>
                                            안녕하세요 👨🏻‍💻 <i style={{fontStyle:'normal', color:'#000eee', textDecoration:'underline'}}>프론트엔드 개발자</i>를 꿈꾸는 주세현입니다.<br/>저의 포트폴리오 공간에 오신 것을 환영합니다.👏🏻
                                        </p>
                                    </Fieldset>
                                    <ProfileFrame isMaximized={biography.maximized}/>
                                    <div className='divider'></div>
                                        <div className='readme-box'>
                                            <Fieldset>
                                                <legend>
                                                    <div style={{display:'flex',alignItems:'center'}}>
                                                        <img style={{width:'20px',marginRight:'5px'}} src={readme} alt='readme'/>
                                                        <h2 id='readme'>README</h2>
                                                    </div>
                                                </legend>
                                                <Fieldset>
                                                    <legend style={{fontSize:'16px',fontWeight:'bold'}}><img style={{width:'14px',height:'14px'}} src={circle} alt='circle'/> <i style={{fontSize:'20px'}}>+</i> <img style={{width:'14px',height:'14px'}} src={semo} alt='semo'/>는 무엇일까요?</legend>
                                                    <div className='readme-content'>
                                                        <div>
                                                            <img style={{width:'12px',height:'12px', marginRight:'5px'}} src={circle} alt='circle'/>
                                                            저는 적극적이고 밝은 성격이어서 <u>동그라미</u>처럼 성격이 둥글다는 소리를 자주 들었습니다.<br/>
                                                            그런 저의 성격을 장점으로 타 부서와의 <u>원만한 소통</u> 능력을 갖추고 있으며,<br/>
                                                            낯선 환경에서 새로운 사람들과 빠르게 적응할 수 있는 성격은 업무에 많은 도움이 되었습니다.<br/>
                                                            개발 업무 특성상 직원들과 소통하는 데 적극적으로 관심을 기울이고, <u>문제해결</u>과 적절한 해결책을 제시하며,<br/>
                                                            저의 둥근 성격으로 <u>개발 업무성과</u>를 이루어 내는 대에 <u>강점</u>이라 생각합니다.<br/>
                                                            또한, <br/><br/>
                                                            <img style={{width:'12px',height:'12px', marginRight:'5px'}} src={semo} alt='semo'/>저는 세모처럼 <u>섬세</u>하고 강박적인 <u>완벽주의</u> 성격을 가졌습니다.<br/>
                                                            이러한 성격은 업무를 수행하는 데 있어 크나큰 장점으로 작용할 것입니다.<br/>
                                                            하지만 업무를 통해 생길 수 있는 오류를 최소화하려는 <u>섬세한</u> 성격으로 인해 작업 시간이 다소 지체되는 때도 있습니다.<br/>
                                                            이를 해결하기 위해 체크리스트를 작성하여 검토해야 할 업무들을 일관적으로 확인한 후 이상이 없는 목록에는 표시하여 강박적 요소를 해소하도록 <u>노력</u>하고 있습니다.<br/>
                                                            업무의 정확성과 오류 없는 작업 능력도 중요하지만, <u>업무 효율</u>과 <u>균형</u>을 맞추어 나가야 <u>100% 업무 효율</u>을 낼 수 있다고 생각합니다.<br/><br/>
                                                            <span style={{color:'red',fontWeight:'bold'}}>동그라미</span>+<span style={{color:'blue',fontWeight:'bold'}}>세모</span>는 <span style={{color:'green',fontWeight:'bold'}}>톱니바퀴</span>입니다.<br/>
                                                            <div className='ani-box' style={{display:'flex', alignItems:'center', width:'100%', background:'#fff',padding:'5px'}}>
                                                                <img style={{width:'20px',height:'20px'}} src={circle} alt='circle'/> 
                                                                <i>+</i> 
                                                                <img style={{width:'20px',height:'17px'}} src={semo} alt='semo'/> 
                                                                <i>=</i> 
                                                                <img style={{width:'16px',height:'16px'}} src={gear} alt='gear'/>
                                                            </div>
                                                            <br/>
                                                            <img style={{width:'12px',height:'12px',marginRight:'5px'}} src={gear} alt='gear'/>톱니바퀴가 맞물려 돌아가듯 조직원과 협력을 바탕으로 철저한 사전 준비로 현실에 안주하지 않고 끊임없이 도전하고 혁신하는 인재가 되어 회사를 이끌어가겠습니다.
                                                        </div>
                                                    </div>
                                                </Fieldset>
                                                <br/>
                                                <Fieldset>
                                                    <legend></legend>
                                                    <DemoDelete/>
                                                </Fieldset>
                                            </Fieldset>
                                        </div>
                                    <div className='divider'></div>
                                    <MyskillsFrame>
                                        <Fieldset>
                                            <legend>
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                    <img style={{width:'20px',marginRight:'5px'}} src={myskills} alt='myskills'/>
                                                    <h2 id='myskills'>MY SKILLS</h2>
                                                </div>
                                            </legend>
                                            <br/>
                                            <div>
                                                <Fieldset>
                                                    <legend><div style={{display:'flex', alignItems:'center'}}><img style={{width:'20px', marginRight:'5px'}} src={front} alt='front-end'/><h2>Front-End Skills</h2></div></legend>
                                                    <div className='content-wrap'>
                                                        <ul className="tree-view">
                                                            <li>
                                                                <div>
                                                                    <img src={front} alt="front"/>
                                                                    <span>Front-end</span>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="front"/>
                                                                            <span>Basic</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={html} alt="html"/>
                                                                                <span>HTML</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={css} alt="css"/>
                                                                                <span>CSS</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={sass} alt="sass"/>
                                                                                <span>SASS</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={jquery} alt="jquery"/>
                                                                                <span>JQuery</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={javascript} alt="javascript"/>
                                                                                <span>JavaScript</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={ts} alt="ts"/>
                                                                                <span>TypeScript</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={react} alt="react"/>
                                                                                <span>React</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={vue} alt="vue"/>
                                                                                <span>Vue.js</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={boot} alt="bootstrap"/>
                                                                                <span>BootStrap</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={tailwind} alt="tailwind"/>
                                                                                <span>Tailwind</span>
                                                                            </li>
                                                                        </ul>
                                                                        
                                                                    </li>
                                                                    
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="library"/>
                                                                            <span>Library</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={redux} alt="redux"/>
                                                                                <span>Redux</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={reactquery} alt="reactquery"/>
                                                                                <span>React Query</span>
                                                                            </li>
                                                                            <li>
                                                                                <img style={{background:'#000'}} src={styledcomponents} alt="styledcomponents"/>
                                                                                <span>Styled Components</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={mui} alt="mui"/>
                                                                                <span>Material UI</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={ant} alt="ant"/>
                                                                                <span>Ant Design</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={reactrouter} alt="reactrouter"/>
                                                                                <span>React Router</span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Fieldset>
                                                <br/>
                                                <Fieldset>
                                                    <legend><div style={{display:'flex', alignItems:'center'}}><img style={{width:'20px', marginRight:'5px'}} src={back} alt='back-end'/><h2>Back-End Skills</h2></div></legend>
                                                    <div className='content-wrap'>
                                                        <ul className="tree-view">
                                                            <li>
                                                                <div>
                                                                    <img src={back} alt="back"/>
                                                                    <span>Back-end</span>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="basic"/>
                                                                            <span>Basic</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={nodejs} alt="nodejs"/>
                                                                                <span>Node.js</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={next} alt="nextjs"/>
                                                                                <span>Next.js</span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="db"/>
                                                                            <span>DB</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={firebase} alt="firebase"/>
                                                                                <span>FireBase</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={postgresql} alt="postgresql"/>
                                                                                <span>PostgreSQL</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={sqlite} alt="sqlite"/>
                                                                                <span>SQLite</span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="db"/>
                                                                            <span>Cloud</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={aws} alt="aws"/>
                                                                                <span>AWS</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={heroku} alt="heroku"/>
                                                                                <span>Heroku</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={vercel} alt="vercel"/>
                                                                                <span>Vercel</span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="db"/>
                                                                            <span>DevOps</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={docker} alt="docker"/>
                                                                                <span>Docker</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={postman} alt="postman"/>
                                                                                <span>Postman</span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Fieldset>
                                                <br/>
                                                <Fieldset>
                                                    <legend><div style={{display:'flex', alignItems:'center'}}><img style={{width:'20px', marginRight:'5px'}} src={tool} alt='tool'/><h2>Tool Skills</h2></div></legend>
                                                    <div className='content-wrap'>
                                                        <ul className="tree-view">
                                                            <li>
                                                                <div>
                                                                    <img src={tool} alt="tool"/>
                                                                    <span>Tool</span>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="basic"/>
                                                                            <span>AI</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={gpt} alt="gpt"/>
                                                                                <span>Chat GPT</span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="basic"/>
                                                                            <span>Version Control</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={git} alt="git"/>
                                                                                <span>Git</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={gith} alt="github"/>
                                                                                <span>GitHub</span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <div>
                                                                            <img src={basic} alt="Team Collaboration Tool"/>
                                                                            <span>Team Collaboration Tool</span>
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <img src={figma} alt="figma"/>
                                                                                <span>Figma</span>
                                                                            </li>
                                                                            <li>
                                                                                <img src={zeplin} alt="zeplin"/>
                                                                                <span>Zeplin</span>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Fieldset>
                                            </div>
                                        </Fieldset>
                                    </MyskillsFrame>
                                    <div className='divider'></div>
                                    <TableFrame>
                                        <Fieldset>
                                            <legend>
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                    <img style={{width:'20px',marginRight:'5px'}} src={education} alt='education'/>
                                                    <h2 id='education'>EDUCATION</h2>
                                                </div>
                                            </legend>
                                            <br/>
                                            <div>
                                                <TitleBarWrap>
                                                    <TitleBar>
                                                        <TitleBarText><img style={{width:'14px',marginRight:'3px'}} src={education} alt='education'/><p>Education - Table</p></TitleBarText>
                                                        <TitleBarControls><button/></TitleBarControls>
                                                    </TitleBar>
                                                    <div className='table-wrap'>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{width:'20%'}}>기간</th>
                                                                    <th>구분</th>
                                                                    <th>소재지</th>
                                                                    <th>전공</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>2006.03 ~ 2009.02</td>
                                                                    <td>졸업</td>
                                                                    <td>구미전자공업고등학교</td>
                                                                    <td>특성화/마이스터(전자과)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2009.03 ~ 2010.05</td>
                                                                    <td>중퇴</td>
                                                                    <td>영진전문대학교</td>
                                                                    <td>시각디자인과</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2022.01 ~ </td>
                                                                    <td>재학중</td>
                                                                    <td>국가평생교육진흥원</td>
                                                                    <td>컴퓨터공학과</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2022.10 ~ 2023.03</td>
                                                                    <td>수료</td>
                                                                    <td>더휴먼컴퓨터아카데미</td>
                                                                    <td>프론트엔드 개발자 과정</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </TitleBarWrap>
                                            </div>
                                        </Fieldset>
                                    </TableFrame>
                                    <div className='divider'></div>
                                    <TableFrame>
                                        <Fieldset>
                                            <legend>
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                    <img style={{width:'20px',marginRight:'5px'}} src={timeline} alt='timeline'/>
                                                    <h2 id='timeline'>TIME LINE</h2>
                                                </div>
                                            </legend>
                                            <br/>
                                            <div>
                                                <TitleBarWrap>
                                                    <TitleBar>
                                                        <TitleBarText><img style={{width:'14px',marginRight:'3px'}} src={timeline} alt='timeline'/><p>Time line - Table</p></TitleBarText>
                                                        <TitleBarControls><button/></TitleBarControls>
                                                    </TitleBar>
                                                    <div className='table-wrap'>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{width:'20%'}}>기간</th>
                                                                    <th>지역</th>
                                                                    <th>회사명</th>
                                                                    <th>부서/직급/직책</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>2008.07 ~ 2009.02</td>
                                                                    <td>경기</td>
                                                                    <td>에피플러스</td>
                                                                    <td>생산/인턴</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2012.03 ~ 2013.08</td>
                                                                    <td>경기</td>
                                                                    <td>멜파스</td>
                                                                    <td>생산/사원</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2014.11 ~ 2016.03</td>
                                                                    <td>경기</td>
                                                                    <td>세미콘라이트</td>
                                                                    <td>생산/사원</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2018.03 ~ 2019.10</td>
                                                                    <td>경북</td>
                                                                    <td>포레시아</td>
                                                                    <td>생산/사원</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2020.07 ~ 2022.09</td>
                                                                    <td>경기</td>
                                                                    <td>알파머티리얼즈</td>
                                                                    <td>생산관리/주임</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </TitleBarWrap>
                                            </div>
                                        </Fieldset>
                                    </TableFrame>
                                    <div className='divider'></div>
                                    <TableFrame>
                                        <Fieldset>
                                            <legend>
                                                <div style={{display:'flex', alignItems:'center'}}>
                                                    <img style={{width:'20px',marginRight:'5px'}} src={certificate} alt='certificate'/>
                                                    <h2 id='certificate'>CERTIFICATE</h2>
                                                </div>
                                            </legend>
                                            <br/>
                                            <div>
                                                <TitleBarWrap>
                                                    <TitleBar>
                                                        <TitleBarText><img style={{width:'14px',marginRight:'3px'}} src={certificate} alt='certificate'/><p>Certificate - Table</p></TitleBarText>
                                                        <TitleBarControls><button/></TitleBarControls>
                                                    </TitleBar>
                                                    <div className='table-wrap'>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{width:'20%'}}>취득일</th>
                                                                    <th>구분</th>
                                                                    <th>자격</th>
                                                                    <th>발행처</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>2006.12</td>
                                                                    <td>자격증</td>
                                                                    <td>정보기기운용기능사</td>
                                                                    <td>한국산업인력공단</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2007.06</td>
                                                                    <td>자격증</td>
                                                                    <td>전자계산기기능사</td>
                                                                    <td>한국산업인력공단</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2008.07</td>
                                                                    <td>자격증</td>
                                                                    <td>전자기기기능사</td>
                                                                    <td>한국산업인력공단</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2020.04</td>
                                                                    <td>면허증</td>
                                                                    <td>2종보통운전면허</td>
                                                                    <td>경찰청</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2022.05</td>
                                                                    <td>자격증</td>
                                                                    <td>ERP 생산정보관리사 1급</td>
                                                                    <td>한국생산성본부</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </TitleBarWrap>
                                            </div>
                                        </Fieldset>
                                    </TableFrame>
                                    <div className='divider'></div>
                                    <div>
                                        <div style={{display:'flex', alignItems:'center'}}><img style={{width:'25px',marginRight:'5px'}} src={hobbies} alt='hobbies'/><h1 id='hobbies'>HOBBIES</h1></div>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <Fieldset>
                                            <legend>Hobbies</legend>
                                            <Fieldset style={{background:'#fff'}}>
                                                <p>저는 항상 사람들이 무슨 생각을 하는지 궁금했고 그 궁금증을 눈으로 볼 수 있는 것이 전시회였습니다. <br/>새로운 영감을 얻기도 하고, 가끔씩은 그림을 그리는 것을 좋아합니다. </p>
                                            </Fieldset>
                                            <br/>
                                            <div>
                                                <HobbiesFrame isMaximized={biography.maximized}/>
                                            </div>
                                        </Fieldset>
                                    </div>
                                    <div className='divider'></div>
                                    <div>
                                        <div style={{display:'flex',alignItems:'center'}}><img style={{width:'25px',marginRight:'5px'}} src={sns} alt='sns'/><h1 id='sns'>SNS</h1></div>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <Fieldset style={{background:'#fff'}}>
                                                <p id='instagram' style={{display:'flex',alignItems:'center'}}><img style={{width:'15px',marginRight:'5px'}} src={insta} alt='phone'/><span>Insta : <a target='blank' href='https://www.instagram.com/nuy_hes/'>https://www.instagram.com/nuy_hes/</a></span></p>
                                                <br/>
                                                <p id='velog' style={{display:'flex',alignItems:'center'}}><img style={{width:'15px',marginRight:'5px'}} src={velog} alt='email'/><span>Velog : <a target='blank' href='https://velog.io/@nuyhes'>https://velog.io/@nuyhes</a></span></p>
                                                <br/>
                                                <p id='github' style={{display:'flex',alignItems:'center'}}><img style={{width:'15px',marginRight:'5px'}} src={github} alt='email'/><span>GitHub : <a target='blank' href='https://github.com/NuyHesHUB'>https://github.com/NuyHesHUB</a></span></p>
                                        </Fieldset>
                                        {/* <Fieldset>
                                            <legend>
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                    <img style={{width:'20px',marginRight:'5px'}} src={insta} alt='insta'/>
                                                    <h2 id='instagram'>INSTAGRAM</h2>
                                                </div>
                                            </legend>
                                            <br/>
                                            <div>
                                                <InstagramFrame/>
                                            </div>
                                        </Fieldset> */}
                                        {/* <div className="divider"></div> */}
                                        {/* <Fieldset>
                                            <legend>
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                    <img style={{width:'20px',marginRight:'5px'}} src={velog} alt='velog'/>
                                                    <h2 id='velog'>VELOG</h2>
                                                </div>
                                            </legend>
                                            <br/>
                                            <div>
                                                <VelogFrame/>
                                            </div>
                                        </Fieldset> */}
                                        {/* <div className="divider"></div> */}
                                        {/* <Fieldset>
                                            <legend>
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                    <img style={{width:'20px',marginRight:'5px'}} src={github} alt='github'/>
                                                    <h2 id='github'>GitHub</h2>
                                                </div>
                                            </legend>
                                            <br/>
                                            <div>
                                                <GithubFrame/>
                                            </div>
                                        </Fieldset> */}
                                    </div>
                                    <div className='divider'></div>
                                    <div style={{height:'200px'}}>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            <img style={{width:'25px',marginRight:'5px'}} src={contact} alt='contact'/>
                                            <h1 id='contact'>CONTACT</h1>
                                        </div>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <Fieldset style={{background:'#fff'}}>
                                                <p style={{display:'flex',alignItems:'center'}}><img style={{width:'15px',marginRight:'5px'}} src={contact} alt='phone'/><span>연락처 : 010-9576-8881</span></p>
                                                <br/>
                                                <p style={{display:'flex',alignItems:'center'}}><img style={{width:'15px',marginRight:'5px'}} src={sns} alt='email'/><span>이메일 : 7upbeat7@naver.com</span></p>
                                        </Fieldset>
                                    </div>
                                </RightContent>
                            </TotalContentWrap>
                        </div>
                    </div>
            </ContentsFrame>
                <div>
                        <StatusBar>
                            <p>#Front-end</p>
                            <p>#Developer</p>
                            <p>#Biography</p>
                        </StatusBar>
                </div>
        </StyledFrame>
    );
    
};
const mapStateToProps = (state) => {
    return{
        biography: state.biography
    }
}

export default connect(mapStateToProps)(BiographyFrame);
