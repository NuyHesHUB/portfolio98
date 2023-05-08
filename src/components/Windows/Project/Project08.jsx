import React from 'react';
import styled from 'styled-components';
import FakeFrame from './FakeFrame';
import function01 from '../../../assets/project-img/project08-img/01.png';
import function02 from '../../../assets/project-img/project08-img/02.png';
import function02_01 from '../../../assets/project-img/project08-img/10.png';
import function02_02 from '../../../assets/project-img/project08-img/11.png';
import function02A from '../../../assets/project-img/project08-img/08.png';
import function03 from '../../../assets/project-img/project08-img/03.png';
import function04 from '../../../assets/project-img/project08-img/04.png';
import function04_01 from '../../../assets/project-img/project08-img/09.png';
import function04A from '../../../assets/project-img/project08-img/04A.png';
import function05 from '../../../assets/project-img/project08-img/05.png';
import function06 from '../../../assets/project-img/project08-img/06.png';
import function07 from '../../../assets/project-img/project08-img/07.png';

const ProjectStyledFrame = styled.div`
    .divider{
        margin: 5px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
`

function Project08(){
    return (
        <ProjectStyledFrame>
            <br/>
            <h2>전체 코드 구성 숙지 시키기</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 01. 간단한 프레임을 만들고 GPT에게 숙지시키기"
                contents={function01}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>부트스트랩 'hero' 만들기</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 02. 부트스트랩에 스타일 적용 시키기"
                contents={function02}
            ></FakeFrame>
            <br/>
            <h2>부트스트랩 'hero' 밑 날씨 API 삽입</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 02. hero 밑 날씨 API"
                contents={function02_01}
            ></FakeFrame>
            <FakeFrame
                title="ChatGPT 02. hero 밑 날씨 API"
                contents={function02_02}
            ></FakeFrame>
            <br/>
            <h2>부트스트랩 'hero' 밑 날씨 API 삽입(결과물)</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 02. hero 밑 날씨 API"
                contents={function02A}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>Container를 만들어 정렬</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 03. Container 중앙배치"
                contents={function03}
            ></FakeFrame>
            <br/>
            <h2>Card 정보를 만들어 배치</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 04. Card"
                contents={function04}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="ChatGPT 04. Card : 판매자 프로필 삽입"
                contents={function04_01}
            ></FakeFrame>
            <br/>
            <h2>Card 정보를 만들어 배치 (GPT 답변)</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 04. Card : GPT Answer"
                contents={function05}
            ></FakeFrame>
            <br/>
            <h2>Card 정보를 만들어 배치 (결과물)</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 04. Card"
                contents={function04A}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>최상단 버튼 생성</h2>
            <div className='divider'/>
            <FakeFrame
                title="ChatGPT 05. Top Button"
                contents={function06}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="ChatGPT 05. Top Button"
                contents={function07}
            ></FakeFrame>
        </ProjectStyledFrame>
    );
};

export default Project08;