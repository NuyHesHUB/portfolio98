import React from 'react';
import styled from 'styled-components';

const Fire = styled.div`
    position: absolute;
    bottom: 0;
    left: -7%;
    width: 100%;
    font-size: 1.5vmin;
    letter-spacing: -4em;
    white-space: nowrap;
    animation: fire-shift 1s infinite alternate ease-in-out;
    @keyframes fire-shift {
        0%   { transform: translateY(50%); }
        100% { transform: translateY(50%) translateX(3%); }
    }
`
const Flame = styled.span`
    display: inline-block;
    position: relative;
    padding: 10%;
    background-color: #ff0000;
    &::after,&::before{
        content: '';
        display: inline-block;
        position: absolute;
    }
    &::after{
        width: 60%;
        height: 60%;
        left: 20%;
        top: 20%;
        background-color: #fff700;
    }
    &::before{
        width: 80%;
        height: 80%;
        left: 10%;
        top: 10%;
        background-color: #ff8800;
    }
    animation: fire-scale .5s infinite alternate;
    &:nth-child(2n){animation: fire-scale .4s infinite alternate;}
    &:nth-child(3n){animation: fire-scale .6s infinite alternate;}
    &:nth-child(4n){animation: fire-scale .7s infinite alternate;}
    @keyframes fire-scale {
        0%   { transform: translateY(0%) /* scaleX(0.5) */ rotate(45deg); }
        100% { transform: translateY(30%) rotate(45deg); }
    }
`

const Burning = () => {
    return (
        <Fire className="fire">
            <Flame className="flame"></Flame>
            <Flame className="flame"></Flame>
            <Flame className="flame"></Flame>
            <Flame className="flame"></Flame>
            <Flame className="flame"></Flame>
            <Flame className="flame"></Flame>
        </Fire>
    );
};

export default Burning;