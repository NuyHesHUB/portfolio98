import React from 'react';
import styled from 'styled-components';
import FakeFrame from './FakeFrame';
import page from '../../../assets/project-img/project07-img/page.png';
import create from '../../../assets/project-img/project07-img/create.png';
import edit from '../../../assets/project-img/project07-img/edit.png';
import search from '../../../assets/project-img/project07-img/search.png';
import heroku from '../../../assets/project-img/project07-img/heroku.png';

const ProjectStyledFrame = styled.div`
    .divider{
        margin: 5px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
`

function Project07(){
    return (
        <ProjectStyledFrame>
            <br/>
            <br/>
            <h2>전체 페이지</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="전체 페이지"
                contents={page}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>할 일 생성</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="할 일 생성"
                contents={create}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>할 일 수정</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="할 일 수정"
                contents={edit}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>할 일 검색</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="할 일 검색"
                contents={search}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>Heroku 배포</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="Heroku 배포"
                contents={heroku}
            ></FakeFrame>
        </ProjectStyledFrame>
    );
};

export default Project07;