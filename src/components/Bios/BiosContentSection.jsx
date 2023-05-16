import React from 'react';
import styled from 'styled-components';

export const BiosContentSectionStyled = styled.table`
    width: 100%;
    tbody{
      height: 100px;
    }
    /* animation: 1000ms linear 1ms normal forwards 1 running on;
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
  } */
`

export const BiosContentSection = ({children}) => {
    return (
        <BiosContentSectionStyled>
            <tbody>{children}</tbody>
        </BiosContentSectionStyled>
    );
};

export default BiosContentSection;
