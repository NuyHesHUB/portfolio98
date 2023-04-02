import React, { useState } from 'react';
import Project01 from './Project01';

import { StyledFrame, TabList, Tab, ContentsFrame, Container, DisplayFrame, DisplayImg, ProjectImgFrame, ProjectImg, Fieldset, Legend, Subtitle, SkillWrap, SkillList, SkillImg, SkillText } from './StyledProjectFrame';

import display from '../../../assets/project-img/display2.png'
import Project01Img from '../../../assets/project-img/project01.png'
import Project02Img from '../../../assets/project-img/project02.png'
import cloud from '../../../assets/wallpaper/windows_98_clouds.jpg';
import suwon from '../../../assets/start-icon/suwon.png'
import title from '../../../assets/project-img/title.png';
function ProjectFrame(){
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Project 01',
            title: '수원시청 관공서 클론코딩',
            img: Project01Img,
            content: <Project01/>,
            logoImg: ['html5','css3','jquery'],
            skills: ['HTML','CSS','JQuery']

        },
        {
            id: 2,
            tabTitle: 'Project 02',
            title: '[반응형] 메이필드호텔',
            img: Project02Img,
            content: 'Contenido de tab 2.',
            logoImg: ['html5','css3','jquery','react','vuedotjs'],
            skills: ['HTML','CSS','JQuery','React','Vue']

        },
        {
            id: 3,
            tabTitle: 'Project 03',
            title: '[API] 영화웹',
            img: Project02Img,
            content: 'Contenido de tab 3.',
            logoImg: ['html5','css3','sass','axios','bootstrap','angular','postman','mysql'],
            skills: ['HTML','CSS','SASS','AXIOS','BootStrap','Angular','Postman','MySQL']
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <StyledFrame>
            <TabList className='tabs'>
                {tabs.map((tab, i) =>
                    <Tab 
                        key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}
                    </Tab>
                )}
            </TabList>
            <ContentsFrame style={{padding:'10px 30px',}}>
                {tabs.map((tab, i) =>
                    <Container key={i}>
                        {
                        currentTab === `${tab.id}` && 
                        <Container style={{marginTop:'20px'}}>
                                <Container>
                                <div className='bg'>
                <div className='Deleted-bg' style={{backgroundImage: `url(${cloud})`}}>
                    <img src={suwon} alt="Icon"/>
                    <h3>Recycle Bin</h3>
                </div>
                    <ul className='line-list'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
              </div>
                                    <Fieldset style={{marginBottom:'20px'}}>
                                        <Legend>기본정보</Legend>
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
                                    
                                    <DisplayFrame>
                                        <DisplayImg src={display} alt='display'/>
                                        <ProjectImgFrame>
                                            <ProjectImg src={tab.img} alt={tab.title}/>
                                        </ProjectImgFrame>
                                    </DisplayFrame>
                                </Container>
                            <Container style={{marginBottom:'20px'}}>
                                <Fieldset>
                                    <Legend>{tab.title}</Legend>
                                    <Subtitle>사용기술 목록(<u>S</u>)</Subtitle>
                                    <SkillWrap>
                                        <Container>
                                            {tab.logoImg.map((logo, i)=> 
                                                <SkillList key={i}>
                                                    <SkillImg src={`https://simpleicons.org/icons/${logo}.svg`} alt='logo'/>
                                                    <SkillText>{tab.skills[i]}</SkillText>
                                                </SkillList>
                                            )}
                                        </Container>
                                    </SkillWrap>
                                    <div>{tab.content}</div>
                                </Fieldset>
                            </Container>
                        </Container>
                        }
                    </Container>
                )}
            </ContentsFrame>
            <div style={{textAlign:'center', margin:'5px'}}>
                <button style={{padding: '5px 20px', marginRight:'10px'}} >ok</button>
                <button style={{padding: '5px 20px'}}>cancel</button>
            </div>
            {/* <hr/> */}
                                    {/* <div style={{textAlign:'center'}}><img style={{width:'250px'}} src={title} alt='title'/></div> */}
                                    {/* <div style={{border:'2px solid #000', borderRadius:'50%', width:'200px', height:'50px', background:'pink', margin:'0 auto'}}><h1 style={{textAlign:'center', marginBottom:'3px',color:'#222', lineHeight:'50px'}}>{tab.title}</h1></div> */}
                                    {/* <hr/> */}
                                    {/* <div className='title-bar-wrap' style={{width:'250px'}}>
                                        <div className='title-bar'>
                                            <div className='title-bar-text'>Title</div>
                                            <div className='title-bar-controls'>
                                                <button className='mini'></button>
                                                <button className='maxi'></button>
                                                <button className='exit'></button>
                                            </div>
                                        </div>
                                        <div className='window-body'>
                                            <h1>{tab.title}</h1>
                                        </div>
                                    </div> */}
        </StyledFrame>
    );
    
};


export default ProjectFrame;
