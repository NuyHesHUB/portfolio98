import React, {useEffect} from 'react';
import styled from 'styled-components';
import loadingImg from '../../assets/bios-img/windows98_logo_수정.png'

const StyledLoading=styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;
const LoadingImg = styled.img`
    width: 100vw;
    height: 100vh;
`
const LoadingAni = styled.div`
    position: absolute;
    left:0;
    bottom:0;
    width:100%;
    height:30px;
    background: linear-gradient(
        0.25turn,
        transparent,
        #fff 45% 55%,
        transparent
      );
      animation: loading steps(16) 1s infinite;
      @keyframes loading {
        0% {
          background-position-x: -812px;
        }
        100% {
          background-position-x: 812px;
        }
      }
`

const Loading = () => {
    useEffect(() => {
        const fakeLoadingtimer = setTimeout(() => {
            window.location.href='/windows'
            console.log('Initial timeout!')
        }, 5000);
        return () => clearTimeout(fakeLoadingtimer);
      }, []);

    return (
        <StyledLoading>
            <LoadingImg src={loadingImg} alt="logo"/>
            <LoadingAni/>
        </StyledLoading>
    );
};

export default Loading;