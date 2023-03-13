import React from 'react';
import styled from 'styled-components';

const BiosLogoStyled=styled.div`
    display: flex;
    height: 120px;
    justify-content: flex-end;
    white-space: pre-line;
    font-family: monospace;
    margin-top: 20px;
    animation: 1000ms linear 1ms normal forwards 1 running on;
    animation-iteration-count : 1;
    @keyframes on {
    0% {
      transform: scale(1, 1) translate3d(0, 0, 0);
      filter: brightness(4);
      opacity: 1;
    }
    5% {
      transform: scale(0.8, 0.8) translate3d(0, 100%, 0);
    }
    10% {
      transform: scale(0.8, 0.8) translate3d(0, -100%, 0);
      opacity: 1;
    }
    35% {
      transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
      filter: brightness(4);
      opacity: 0;
    }
    60% {
      transform: scale(1.1, 1.1) translate3d(0, 0, 0);
      filter: contrast(0) brightness(0);
      opacity: 0;
    }
    100% {
      transform: scale(1, 1) translate3d(0, 0, 0);
      filter: contrast(1) brightness(1.2) saturate(1.3);
      opacity: 1;
    }
  }
`
const BiosLogo = () => {
    return (
        <BiosLogoStyled>
            <pre className='pre-wrap name-logo-title' contentEditable={false} style={{color:'tomato',fontSize:'12px',/* margin:'auto' */}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____ _______ _______ ________ ________ ___  ___ ___  ___ ________ _______ ___   __<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/   //  _   //  _   //  _____//  _____//  / /  //  / /  //  _____//  _   //  /  / /<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/   //  //  //  //  //  /____ /  /____ /  /_/  //  /_/  //  /____ /  //  //   | / /<br/> 
                &nbsp;____ /   //  //  //  //  //____   //  _____//   _   //_    _ //  _____//  //  //  /|   /<br/> 
                &nbsp;/  //   //  //  //  //  //_____/ //  /____ /  / /  /  /   /  /  /____ /  //  //  / /  /<br/> 
                /_______//______//______//_______//_______//__/ /__/  /___/  /_______//______//__/ /__/<br/>
                &nbsp;                                                                              v. 0.01.11
            </pre>
        </BiosLogoStyled>
    );
};

export default BiosLogo;