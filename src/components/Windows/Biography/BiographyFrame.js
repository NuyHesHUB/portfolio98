import React from 'react';
import { connect } from 'react-redux'; 

import { StyledFrame, TextSlide, ContentsFrame, TotalContentWrap, LeftContent, RightContent, Fieldset, MyskillsFrame, TableFrame, StatusBar } from './StyledBiographyFrame';
import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls, FakeFrameBody } from '../Project/FakeFrame'
import DemoDelete from './DemoDelete';

import ProfileFrame from './ProfileFrame';

import bg from '../../../assets/wallpaper/background.png'

import profile from '../../../assets/resume-img/profile.jpg'

import info from '../../../assets/biography-img/info.png'
import logo from '../../../assets/menu-img/logo_shadow.png'
import pofologo from '../../../assets/about-img/about_logo.png'

/* Icon */
import setup from '../../../assets/biography-img/setup.png'
import componentsIcon from '../../../assets/biography-img/componentIcon.png';
import paintIcon from '../../../assets/desktop-icon/Paint.png';
import readme from '../../../assets/biography-img/readme.png'
import myskills from '../../../assets/biography-img/myskills.png'
import education from '../../../assets/biography-img/education.png'
import timeline from '../../../assets/biography-img/timeline.png'
import certificate from '../../../assets/biography-img/license.png'
import hobbies from '../../../assets/biography-img/hobbies.png'
import sns from '../../../assets/biography-img/sns.png'
import insta from '../../../assets/biography-img/insta.png'
import velog from '../../../assets/desktop-icon/velog.png'
import github from '../../../assets/desktop-icon/github.png'
import contact from '../../../assets/biography-img/contact.png'
import bioicon from '../../../assets/desktop-icon/biography.png';

import front from '../../../assets/biography-img/front.png';
import back from '../../../assets/biography-img/back.png'

import html from '../../../assets/biography-img/html.svg'
import css from '../../../assets/biography-img/css.svg'
import sass from '../../../assets/biography-img/sass.svg'
import jquery from '../../../assets/biography-img/jquery.svg'
import javascript from '../../../assets/biography-img/javascript.svg'
import react from '../../../assets/biography-img/react.svg'
import vue from '../../../assets/biography-img/vue.svg'
import boot from '../../../assets/biography-img/boot.svg'
import redux from '../../../assets/biography-img/redux.svg'
import reactquery from '../../../assets/biography-img/reactquery.svg'
import styledcomponents from '../../../assets/biography-img/styledcomponents.svg'
import mui from '../../../assets/biography-img/mui.svg'
import ant from '../../../assets/biography-img/ant.svg'
import reactrouter from '../../../assets/biography-img/reactrouter.svg'
import nodejs from '../../../assets/biography-img/node.svg'
import sqlite from '../../../assets/biography-img/sqlite.svg'
import postman from '../../../assets/biography-img/postman.svg'
import vercel from '../../../assets/biography-img/vercel.svg'
import git from '../../../assets/biography-img/git.svg'
import gith from '../../../assets/biography-img/github.svg'
import figma from '../../../assets/biography-img/figma.svg'
import zeplin from '../../../assets/biography-img/zeplin.jpg'


import basic from '../../../assets/biography-img/basic.png'
import tool from '../../../assets/biography-img/tool.png'

function BiographyFrame({biography}){
    
    /* console.log('ProjectFrame 맥시',project.maximized); */

    return (
        <StyledFrame>
            <TextSlide>
                <div className='logo-wrap'><img src={info} alt='helf'/></div>
                <div className='text-wrap'>
                    <p className="microsoft marquee">
                        $$<span className='title'><img style={{width:'17px'}} src={logo} alt='logo'/>PortFolio98</span>$$<u>D:\\Biography</u> 주세현의 자기소개 폴더에 오신것을 환영합니다.
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
                                <LeftContent 
                                    isMaximized={biography.maximized}
                                    className='bg'
                                >       
                                        <div className='Biography-bg' style={{backgroundImage: `url(${bg})`}}>
                                            {/* <img src={profile} alt="Icon"/> */}
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
                                    <div style={{}}>
                                        <h2 id='readme'><img style={{width:'20px'}} src={readme} alt='readme'/>README</h2>
                                        <br/>
                                        <DemoDelete/>
                                    </div>
                                    <MyskillsFrame>
                                        <h2 id='myskills'><img style={{width:'20px'}} src={myskills} alt='myskills'/>MY SKILLS</h2>
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
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <div>
                                                                        <img src={basic} alt="db"/>
                                                                        <span>DB</span>
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <img src={sqlite} alt="sqlite"/>
                                                                            <span>SQLite</span>
                                                                        </li>
                                                                        <li>
                                                                            <img src={postman} alt="postman"/>
                                                                            <span>Postman</span>
                                                                        </li>
                                                                        <li>
                                                                            <img src={vercel} alt="vercel"/>
                                                                            <span>Vercel</span>
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
                                    </MyskillsFrame>
                                    <TableFrame>
                                        <h2 id='education'><img style={{width:'20px'}} src={education} alt='education'/>EDUCATION</h2>
                                        <br/>
                                        <div>
                                            <TitleBarWrap>
                                                <TitleBar>
                                                    <TitleBarText><img style={{width:'14px'}} src={education} alt='education'/>Education - Table</TitleBarText>
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
                                    </TableFrame>
                                    <TableFrame>
                                        <h2 id='timeline'><img style={{width:'20px'}} src={timeline} alt='timeline'/>TIME LINE</h2>
                                        <br/>
                                        <div>
                                            <TitleBarWrap>
                                                <TitleBar>
                                                    <TitleBarText><img style={{width:'14px'}} src={timeline} alt='timeline'/>Time line - Table</TitleBarText>
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
                                    </TableFrame>
                                    <TableFrame>
                                        <h2 id='certificate'><img style={{width:'20px'}} src={certificate} alt='certificate'/>CERTIFICATE</h2>
                                        <br/>
                                        <div>
                                            <TitleBarWrap>
                                                <TitleBar>
                                                    <TitleBarText><img style={{width:'14px'}} src={certificate} alt='certificate'/>Certificate - Table</TitleBarText>
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
                                    </TableFrame>
                                    <div style={{height:'200px'}}>
                                        <h1 id='hobbies'><img style={{width:'25px'}} src={hobbies} alt='hobbies'/>HOBBIES</h1>
                                        <hr/>
                                    </div>
                                    <div style={{height:'200px'}}>
                                        <h1 id='sns'><img style={{width:'25px'}} src={sns} alt='sns'/>SNS</h1>
                                        <hr/>
                                    </div>
                                    <div style={{height:'200px'}}>
                                        <h2 id='instagram'><img style={{width:'20px'}} src={insta} alt='insta'/>INSTAGRAM</h2>
                                        <br/>
                                    </div>
                                    <div style={{height:'200px'}}>
                                        <h2 id='velog'><img style={{width:'20px'}} src={velog} alt='velog'/>VELOG</h2>
                                        <br/>
                                    </div>
                                    <div style={{height:'200px'}}>
                                        <h2 id='github'><img style={{width:'20px'}} src={github} alt='github'/>GITHUB</h2>
                                        <br/>
                                    </div>
                                    <div style={{height:'200px'}}>
                                        <h1 id='contact'><img style={{width:'25px'}} src={contact} alt='contact'/>CONTACT</h1>
                                        <hr/>
                                    </div>
                                </RightContent>
                            </TotalContentWrap>
                        </div>
                    </div>
            </ContentsFrame>
                <div>
                        <StatusBar>
                            <p>#total</p>
                            <p>#total</p>
                            <p>#total</p>
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
