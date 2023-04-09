import React from 'react';
import styled from 'styled-components';

export const TitleBarWrap=styled.div`
    /* background: silver; */
    background: #c3c7cb;
    box-shadow: 
        inset -1px -1px #0a0a0a, 
        inset 1px 1px #dfdfdf, 
        inset -2px -2px grey, 
        inset 2px 2px #fff;
    padding: 3px;
`
export const TitleBar=styled.div`
    align-items: center;
    background: linear-gradient(90deg,navy,#1084d0);
    display: flex;
    justify-content: space-between;
    padding: 3px 2px 3px 3px;
`
export const TitleBarText=styled.div`
    color: #fff;
    font-weight: 700;
    letter-spacing: 0;
    margin-right: 24px;
    display: flex;
    align-items: center;
`
export const TitleBarControls=styled.div`
    display: flex;
    button{
        display: block;
        min-height: 14px;
        min-width: 16px;
        padding: 0;
        /* background: silver; */
        background: #c3c7cb;
        box-shadow: inset -1px -1px #0a0a0a, 
        inset 1px 1px #fff, 
        inset -2px -2px grey, 
        inset 2px 2px #dfdfdf;
        border: none;
    }/* 
    & button:nth-child(1){
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");
        background-position: bottom 3px left 4px;
        background-repeat: no-repeat;
    }
    & button:nth-child(2){
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");
        background-position: top 2px left 3px;
        background-repeat: no-repeat;
    } */
    & button:nth-child(1){
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E");
        background-position: top 3px left 4px;
        background-repeat: no-repeat;
        margin-left: 2px;
    }
`

const FakeFrameBody=styled.div`
    img{
        width: 100%;
    }
`


function FakeFrame({title, contents}){
    return (
        <TitleBarWrap>
            <TitleBar>
                <TitleBarText>{title}</TitleBarText>
                <TitleBarControls>
                    {/* <button></button>
                    <button></button> */}
                    <button></button>
                </TitleBarControls>
            </TitleBar>
            <FakeFrameBody><img src={contents} alt={title}/></FakeFrameBody>
        </TitleBarWrap>
    );
};

export default FakeFrame;