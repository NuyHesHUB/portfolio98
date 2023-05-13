import React from 'react';
import FakeFrame from './FakeFrame';
import styled from 'styled-components';
import responsive from '../../../assets/project-img/project02-img/responsive.gif';
import menu01 from '../../../assets/project-img/project02-img/menu.gif';
import menu02 from '../../../assets/project-img/project02-img/design.gif';
import slide01 from '../../../assets/project-img/project02-img/slide01.gif';
import slide02 from '../../../assets/project-img/project02-img/slide02.png';
import slide03 from '../../../assets/project-img/project02-img/slide03.png';
import slide04 from '../../../assets/project-img/project02-img/slide04.png';


const ProjectStyledFrame = styled.div`
    .divider{
        margin: 5px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
`

function Project02(){
    return (
        <ProjectStyledFrame>
            <br/>
            <h2>전체페이지 & 반응형</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="반응형"
                contents={responsive}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>메뉴</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="메뉴 01"
                contents={menu01}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="메뉴 02"
                contents={menu02}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>슬라이드</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="슬라이드 01"
                contents={slide01}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="슬라이드 02"
                contents={slide02}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="슬라이드 03"
                contents={slide03}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="슬라이드 04"
                contents={slide04}
            ></FakeFrame>
            <br/>
        </ProjectStyledFrame>
    );
};

export default Project02;