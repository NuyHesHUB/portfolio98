import React, {useEffect} from 'react';
import styled from 'styled-components';
import loadingImg from '../../assets/bios-img/windows98_logo_수정2.png'
import '../../styles/loading.scss'
import { Container } from '../../styles/Container';

const StyledLoading=styled.div`
    padding-top: 10px;
    width: 100vw;
    height: 100vh;
    position: relative;
    background: rgb(119,173,214);
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
          background-position-x: -1012px;
        }
        100% {
          background-position-x: 1012px;
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
        <StyledLoading >
            <div className='glitch-bg glitch--style-1'>
              <LoadingImg className='glitch__img' src={loadingImg} alt="logo"/>
              <LoadingImg className='glitch__img' src={loadingImg} alt="logo"/>
              <LoadingImg className='glitch__img' src={loadingImg} alt="logo"/>
              <LoadingImg className='glitch__img' src={loadingImg} alt="logo"/>
              <LoadingImg className='glitch__img' src={loadingImg} alt="logo"/>
            </div>
            <LoadingAni/>
            <Container/>
        </StyledLoading>
    );
};

export default Loading;