import React from 'react';

/* Library */
import styled from 'styled-components';

/* Image */
import Icon1 from '../../../assets/fall-img/clean_drive-5.png'
import Icon2 from '../../../assets/fall-img/calendar-1.png'
import Icon3 from '../../../assets/fall-img/application_hourglass_small-2.png'
import Icon4 from '../../../assets/fall-img/msagent-4.png'

const FallingWrap = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
    /* background-color: ${props=>props.isMaximized ? 'red' : 'blue'}; */
    font-size: 36px;
    font-weight: bold;
    animation: hurueru .2s infinite;
    @keyframes hurueru {
        0% {transform: translate(0px, 0px) rotateZ(0deg)}
        25% {transform: translate(2px, 2px) rotateZ(0.1deg)}
        50% {transform: translate(0px, 2px) rotateZ(0deg)}
        75% {transform: translate(2px, 0px) rotateZ(-0.1deg)}
        100% {transform: translate(0px, 0px) rotateZ(0deg)}
    }
`;

const FallingText = styled.span`
    div{
        display: flex;
        flex-direction: column;
        width: 55px;
        text-align: center;
        margin-right: 20px;
        img{width: 36px; margin: 0 auto;}
        span{
            padding: 1px 2px;
            margin-top: 7px;
            border: 1px solid transparent;
            font-size: 11px;
            color: #fff;
        }
    }
    &.fall-1{
        display: inline-block;
        animation: falldown 3s cubic-bezier(.57,.03,.47,.87) infinite;
        /* animation-iteration-count: 100; */
        animation-fill-mode : forwards;
    }
    &.fall-2{
        display: inline-block;
        animation: falldown 5s cubic-bezier(.57,.03,.47,.87) infinite;
        /* animation-iteration-count: 100; */
        animation-delay: 1000ms;
        animation-fill-mode : forwards;
    }
    &.fall-3{
        display: inline-block;
        animation: falldown 7s cubic-bezier(.57,.03,.47,.87) infinite;
        /* animation-iteration-count: 100; */
        animation-delay: 1500ms;
        animation-fill-mode : forwards;
    }
    &.fall-4{
        display: inline-block;
        animation: falldown 3s cubic-bezier(.57,.03,.47,.87) infinite;
        /* animation-iteration-count: 100; */
        animation-delay: 3500ms;
        animation-fill-mode : forwards;
    }
    @keyframes falldown {
            0% {transform: translate(0px, 0px) rotateZ(0deg)}
            /* 70% {transform: translate(0px, 0px) rotateZ(0deg)} */
            100% {transform: translate(0px, 900px) rotateZ(120deg)}
            /* 100% {transform: translate(0px, 100vh) rotateZ(120deg)} */
            /* 100% {transform: translate(0px, ${props=>props.show ? '1000px' : '100px'}) rotateZ(120deg)} */
    } 
`
const DemoFalling = ({deleted}) => {
    /* console.log(deleted); */
    return (
        <FallingWrap>
            <FallingText className="fall-1"><div><img src={Icon1} alt="" /><span>완벽주의</span></div></FallingText>
            <FallingText className="fall-2"><div><img src={Icon2} alt="" /><span>많은생각</span></div></FallingText>
            <FallingText className="fall-3"><div><img src={Icon3} alt="" /><span>실천부족</span></div></FallingText>
            <FallingText className="fall-4"><div><img src={Icon4} alt="" /><span>낯가림</span></div></FallingText>
        </FallingWrap>
    );
};
/* const mapStateToProps = (state) => {
    return {
      deleted: state.deleted
    }
  } */

export default DemoFalling