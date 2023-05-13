import React from 'react';
/* import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls} from './FakeFrame'; */
import styled from 'styled-components';
import FakeFrame from './FakeFrame';
import menu from '../../../assets/project-img/project01-img/suwon01.png';
import sub01 from '../../../assets/project-img/project01-img/sub01.png';
import sub02 from '../../../assets/project-img/project01-img/sub02.png';
import sub03 from '../../../assets/project-img/project01-img/sub03.png';
import sub04 from '../../../assets/project-img/project01-img/sub04.png';
import sub05 from '../../../assets/project-img/project01-img/sub05.png';
import slide01 from '../../../assets/project-img/project01-img/slide01.gif';
import slide02 from '../../../assets/project-img/project01-img/slide02.png';
import slide03 from '../../../assets/project-img/project01-img/slide03.png';
import map from '../../../assets/project-img/project01-img/suwon02.png';

const ProjectStyledFrame = styled.div`
    .divider{
        margin: 5px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
`

function Project01(){
    return (
        <ProjectStyledFrame>
            <br/>
            <br/>
            <h2>메뉴 & 서브페이지</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="메뉴"
                contents={menu}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="서브페이지 01"
                contents={sub01}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="서브페이지 02"
                contents={sub02}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="서브페이지 03"
                contents={sub03}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="서브페이지 04"
                contents={sub04}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="서브페이지 05"
                contents={sub05}
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
            <br/>
            <h2>지도 API</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="지도 API"
                contents={map}
            ></FakeFrame>
            <br/>
        </ProjectStyledFrame>
    );
};

export default Project01;