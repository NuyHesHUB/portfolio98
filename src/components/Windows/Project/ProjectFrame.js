import React, { useState } from 'react';
import Project01 from './Project01';
import Project02 from './Project02';

import { StyledFrame, Tab, Contents } from './StyledProjectFrame';

import display from '../../../assets/project-img/display.png'
import Project01Img from '../../../assets/project-img/project01.png'
import Project02Img from '../../../assets/project-img/project02.png'

import html from '../../../assets/dockbar-icon/biography.png'


function ProjectFrame(){
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Project 01',
            title: '[관공서] 수원시청',
            img: Project01Img,
            content: <Project01/>,
            skills: ['html','css','JQuery']
        },
        {
            id: 2,
            tabTitle: 'Project 02',
            title: '[반응형] 메이필드호텔',
            img: Project02Img,
            content: 'Contenido de tab 2.',
            skills: ['html','css','JQuery','React','Vue']
        },
        {
            id: 3,
            tabTitle: 'Project 03',
            title: '[API] 영화웹',
            content: 'Contenido de tab 3.',
            skills: ['html','css','JQuery','React','Vue']
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <div className='container'>
            <StyledFrame className='tabs'>
                {tabs.map((tab, i) =>
                    <Tab 
                        key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}
                    </Tab>
                )}
            </StyledFrame>
            <Contents className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {
                        currentTab === `${tab.id}` && 
                        <div style={{marginTop:'20px'}}>
                                <div>
                                    <div style={{position:'relative', textAlign:'center', height:'300px'}}>
                                        <img style={{}} src={display} alt='display'/>
                                        <div style={{position:'relative', top:'-247px', left:'0px'}}>
                                            <img style={{width:'323px',height:'189px'}} src={tab.img} alt='project01'/>
                                        </div>
                                    </div>
                                </div>
                            <div style={{padding:'10px'}}>
                                {/* <div className='title'>{tab.title}</div>
                                <div>{tab.content}</div>
                                <div>{tab.skills.map((skill, i)=> <div key={i}>{skill}</div>)}</div> */}
                                <fieldset style={{padding:'10px'}}>
                                    <legend>{tab.title}</legend>
                                    <span><u>S</u>elect an HTML Document or a picture</span>
                                    <div style={{width:'150px',height:'100px', marginTop:'10px', background:'#fff', overflowY:'scroll'}}>
                                        <div>{tab.skills.map((skill, i)=> <div key={i}><img src={html} alt='skill'/>{skill}</div>)}</div>
                                    </div>
                                    <div>{tab.content}</div>
                                </fieldset>
                            </div>
                        </div>
                        }
                    </div>
                )}
                
            </Contents>
            <div style={{textAlign:'center', margin:'5px'}}>
                <button style={{padding: '5px 20px', marginRight:'10px'}} >ok</button>
                <button style={{padding: '5px 20px'}}>cancel</button>
            </div>
        </div>
    );
};

export default ProjectFrame;