import React from 'react';
import { connect } from 'react-redux'; 

import { StyledFrame, TextSlide, ContentsFrame, TotalContentWrap, LeftContent, RightContent, Fieldset, StatusBar } from './StyledBiographyFrame';
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
                                                            {/* <a href="#intro">Intro</a> */}
                                                            {/* <a href="#intro" style={{color:'purple'}}>Return &#40;</a> */}
                                                        </li>
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
                                                    <li>
                                                        {/* <a href="#components">&lt;&#47;<i style={{color:'teal'}}>Components</i>&gt;
                                                        </a> */}
                                                        {/* <a href="#issues-contributing-etc">Issues, Contributing, etc.
                                                        </a> */}
                                                    </li>
                                                    {/* <li><a style={{color:'purple'}} href="#intro">&#41;</a></li> */}
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
                                    <div style={{height:'200px'}}>
                                        <h2 id='myskills'><img style={{width:'20px'}} src={myskills} alt='myskills'/>MY SKILLS</h2>
                                        <br/>
                                    </div>
                                    <div style={{height:'200px'}}>
                                        <h2 id='education'><img style={{width:'20px'}} src={education} alt='education'/>EDUCATION</h2>
                                        <br/>
                                    </div>
                                    <div style={{height:'200px'}}>
                                        <h2 id='timeline'><img style={{width:'20px'}} src={timeline} alt='timeline'/>TIME LINE</h2>
                                        <br/>
                                    </div>
                                    <div style={{height:'200px'}}>
                                        <h2 id='certificate'><img style={{width:'20px'}} src={certificate} alt='certificate'/>CERTIFICATE</h2>
                                        <br/>
                                    </div>
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
