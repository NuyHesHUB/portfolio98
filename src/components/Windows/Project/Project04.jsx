import React from 'react';
import styled from 'styled-components';
import FakeFrame from './FakeFrame';
import bios from '../../../assets/project-img/project04-img/bios.png';
import loading from '../../../assets/project-img/project04-img/loading.png';
import home from '../../../assets/project-img/project04-img/home.png';
import biography from '../../../assets/project-img/project04-img/biography.png';
import start from '../../../assets/project-img/project04-img/start.png';
import resume from '../../../assets/project-img/project04-img/resume.png';
import project from '../../../assets/project-img/project04-img/project.png';
import mini from '../../../assets/project-img/project04-img/mini.gif';
import full from '../../../assets/project-img/project04-img/full.gif';
import close from '../../../assets/project-img/project04-img/close.gif';

const ProjectStyledFrame = styled.div`
    .divider{
        margin: 5px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
`

function Project04(){
    return (
        <ProjectStyledFrame>
            <br/>
            <br/>
            <h2>첫 페이지 BIOS</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="Bios"
                contents={bios}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>두번째 페이지 Loading</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="Loading"
                contents={loading}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>로딩 후 홈 화면 튜토리얼</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="튜토리얼"
                contents={home}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>튜토리얼을 닫으면 뜨는 나의 소개</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="나의 소개"
                contents={biography}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>DockBar & 바탕화면</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="시작화면 바탕화면"
                contents={start}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>이력서 보기 & 다운로드</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="이력서"
                contents={resume}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>프로젝트를 볼 수 있는 곳</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="프로젝트"
                contents={project}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>최소화 , 최대화 , 닫기 구현</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="최소화"
                contents={mini}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="최대화"
                contents={full}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="닫기"
                contents={close}
            ></FakeFrame>
        </ProjectStyledFrame>
    );
};

export default Project04;