import React from 'react';
import styled from 'styled-components';
const StyledTutorial = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    z-index: 999;
    .dockbar_content{
        position: absolute;
        bottom: 79px;
        left: 86px;
        color: #ededed;
        font-weight: 400;
        font-size: 16px;
        &::after{
            position: absolute;
            top: 27px;
            left: -48px;
            width: 3px;
            height: 61px;
            content: "";
            background: #ededed;
        }
        &::before{
            position: absolute;
            top: 27px;
            left: -47px;
            width: 60px;
            height: 3px;
            content: '';
            background: #ededed;
        }
    }
`
const Dockbar = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 999;
    width: 80px;
    height: 30px;
    /* background: red; */
    border: 3px solid #ededed;
    animation: tutorial1 2s infinite;
    /* &::after{
        position: absolute;
        top: -102px;
        left: 35px;
        width: 3px;
        height: 100px;
        content: '';
        background: #ededed;
    }
    &::before{
        position: absolute;
        top: -139px;
        left: 69px;
        width: 3px;
        height: 71px;
        content: '';
        background: #ededed;
        rotate: 90deg;
    } */
    @keyframes tutorial1 {
        0%,
        100%{opacity:1}
        50%{opacity:0}
    }
`
const QuickMenu = styled.div`
    position: absolute;
    top: 15px;
    right: 22px;
    z-index: 999;
    width: 225px;
    height: 356px;
    border: 3px solid #ededed;
    animation: tutorial2 2s infinite;
    @keyframes tutorial2 {
        0%,
        100%{opacity:1}
        50%{opacity:0}
    }
`
const Icons = styled.div`
    position: absolute;
    top: 16px;
    left: 4px;
    z-index: 999;
    width: 70px;
    height: 470px;
    border: 3px solid #ededed;
    animation: tutorial3 2s infinite;
    @keyframes tutorial3 {
        0%,
        100%{opacity:1}
        50%{opacity:0}
    }
`

const Tutorial = () => {
    return (
        <StyledTutorial>
            <Dockbar>
            </Dockbar>
            <div className='dockbar_content'>
                    <p>
                    &#x27A4;시작 메뉴 포트폴리오 프로젝트 깃허브 , 블로그 메뉴가 있습니다.
                    </p>
                </div>
            <QuickMenu></QuickMenu>
            <Icons></Icons>
        </StyledTutorial>
    );
};

export default Tutorial;