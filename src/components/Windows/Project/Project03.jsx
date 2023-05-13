import React from 'react';
import styled from 'styled-components';
import FakeFrame from './FakeFrame';
import page from '../../../assets/project-img/project03-img/page.png';
import responsive from '../../../assets/project-img/project03-img/responsive.gif';
import detail01 from '../../../assets/project-img/project03-img/detail01.png';
import list01 from '../../../assets/project-img/project03-img/list01.png';
import list02 from '../../../assets/project-img/project03-img/list02.png';
import list03 from '../../../assets/project-img/project03-img/list03.png';

const ProjectStyledFrame = styled.div`
    .divider{
        margin: 5px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
`

function Project03(){
    return (
        <ProjectStyledFrame>
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
            <h2>반응형</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="반응형"
                contents={responsive}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>영화 상세페이지</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="상세페이지"
                contents={detail01}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>나만의 영화리스트 만들기</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="공백 에러문구"
                contents={list02}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="리스트 입력"
                contents={list01}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="리스트"
                contents={list03}
            ></FakeFrame>
            <br/>
        </ProjectStyledFrame>
    );
};

export default Project03;