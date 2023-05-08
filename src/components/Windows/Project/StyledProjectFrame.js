import styled from "styled-components";

export const StyledFrame=styled.div`
    /* hr{
        border: none;
        height: 1px;
        opacity: 0.5;
        margin-bottom: 10px;
        background: linear-gradient( to 
                right, 
                red 20%, 
                yellow 20%, 
                yellow 36%, 
                green 36%, 
                green 60%, 
                blue 60%, 
                blue 100% 
            );
    } */
    hr{
        margin: 0;
        border: none;
        width: 100%;
        height: 2px;
        opacity: 0.5;
        background: linear-gradient( to right, red 20%, yellow 20%, yellow 36%, green 36%, green 60%, blue 60%, blue 100% );
    }
`
export const TextSlide=styled.div`
    width: 100%;
    display: flex;
    padding: 5px 0;
    box-sizing: border-box;
    margin-bottom: 5px;
    height: 40px;
        .logo-wrap{
            width: 5%;
            height: 100%;
            box-shadow: 
                rgb(10, 10, 10) -1px -1px inset, 
                rgb(223, 223, 223) 1px 1px inset, 
                grey -2px -2px inset, 
                rgb(255, 255, 255) 2px 2px inset;
            text-align: center;
            line-height: 40px;
            img{
                width: 20px;
                height: 20px;
            }
        }
        .text-wrap{
            width: 95%;
            height: 100%;
            padding: 2px 10px;
            line-height: 23px;
            box-shadow: 
                    rgb(10, 10, 10) -1px -1px inset, 
                    rgb(223, 223, 223) 1px 1px inset, 
                    grey -2px -2px inset, 
                    rgb(255, 255, 255) 2px 2px inset;
            .marquee{
                padding: 2px 10px;;
                margin: 0 auto;
                overflow: hidden;
                white-space: nowrap;
                box-sizing: border-box;
                animation: marquee 50s linear infinite;
                .title{
                    background: black;
                    color: #fff;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-decoration: none;
                }
                u{
                    text-decoration: none;
                    font-weight: bold;
                    color: #242424;
                    background: #fff;
                }
                &:hover {
                    animation-play-state: paused
                }
                @keyframes marquee {
                    0%   { text-indent: 30em }
                    100% { text-indent: -105em }
                }
                .microsoft {
                    padding-left: 1.5em;
                    position: relative;
                    font: 16px 'Segoe UI', Tahoma, Helvetica, Sans-Serif;
                }
                span{
                    color: #000eee;
                    text-decoration: underline;
                }
                i{      
                        background: blue;
                        font-style: normal;
                        color: #fff;
                    }
            }
        }
`
export const TabList=styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0 0 -2px;
    padding-left: 3px;
    position: relative;
    text-indent: 0;
`
export const TabItem=styled.li`
    padding: 7px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    box-shadow: 
        inset -1px 0 #0a0a0a, 
        inset 1px 1px #dfdfdf, 
        inset -2px 0 grey, 
        inset 2px 2px #fff;
    z-index: 1;
    color: #0000ee;
    text-decoration: underline;
        &[disabled]{
            background-color: rgb(195, 199, 203);
            color: #551a8b;
            margin-left: -3px;
            margin-top: -3px;
            padding-bottom: 2px;
            position: relative;
            z-index: 6;
            outline: 1px dotted #000000;
            outline-offset: -6px;
        }
`
export const ContentsFrame=styled.div`
    background: rgb(195, 199, 203);
    box-shadow: 
        inset -1px -1px #0a0a0a, 
        inset 1px 1px #dfdfdf, 
        inset -2px -2px grey, 
        inset 2px 2px #fff;
    padding: 3px;
    position: relative;
    height: ${props=>props.isMaximized? `calc(100vh - 230px)` : `500px`};
    padding-left: 2px;
    padding-bottom: 2px;
    box-sizing: border-box;
    padding:5px;
`
export const TotalContentWrap=styled.div`
    width:100%;
    height: ${props => props.isMaximized ? 'calc(100vh - 245px);' : '485px'};
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px  inset;
`
export const LeftContent=styled.div`
    width: 30%;
    height: 99.7%;
    overflow-y: scroll;
    margin-top: 2px;
    margin-left: 2px;
    background: #fff;
    position: relative;
    .Project-bg{
        height: 408px;
        background-size: cover;
        background-position: -81px -62px;
        background-repeat: no-repeat;
        padding: 0 20px;
            img{
                width: 36px;
                height: 36px;
                margin-top: 20px;
            }
            h3{
                font-size: 20px;
            }
    }
    .line-list{
        position: absolute;
        display: flex;
        top: 110px;
        list-style: none;
        width: 100%;
        height: 2px;
        li{
            width: 25%;
            margin-right: 1px;
            &:nth-child(1){background:rgb(250,133,103);}
            &:nth-child(2){background:rgb(255,232,138);}
            &:nth-child(3){background:rgb(151,221,117);}
            &:nth-child(4){background:rgb(138,208,255);}
        }
    }
`
export const RightContent=styled.div`
    width:70%;
    height: 100%;
    overflow-y: scroll;
    margin-top: 2px;
    padding: 20px;
`

export const DisplayFrame=styled.div`
    position: relative;
    text-align: center;
    height: 280px;
`

export const DisplayImg=styled.img`
    width: 392px;
    @media screen and (max-width: 800px){
        width: 300px;
    }
`

export const ProjectImgFrame=styled.div`
    position: relative;
    top: -248px;
    left: 0;
    @media screen and (max-width: 800px){
        top: -190px;
    }
`
export const ProjectImg=styled.img`
    width: 323px;
    height: 179px;
    @media screen and (max-width: 800px){
        width: 247px;
        height: 138px;
    }
`

export const Fieldset=styled.fieldset`
    padding: 10px;
    border-image: 
        url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;
    

`
export const Subtitle=styled.div`

`

export const SkillWrap=styled.div`
    width: 100%;
    height: 130px;
    margin-top: 10px;
    background: #fff;
    overflow-y: scroll;
    box-shadow: 
        inset -1px -1px #fff, 
        inset 1px 1px grey, 
        inset -2px -2px #dfdfdf, 
        inset 2px 2px #0a0a0a;
        box-sizing: border-box;
`

export const SkillList=styled.div`
    display: flex;
    margin: 3px 3px;
    padding: 1px;
    &:hover span{
        color: rgb(255, 255, 255);
        background-color: rgb(0, 0, 127);
        outline: 1px dotted rgba(200, 200, 200);
    }
`
export const SkillImg=styled.img`
    width: 16px;
    margin-right: 3px;
`
export const SkillText=styled.span`

`
export const StatusBar=styled.div`
    gap: 5px;
    display: flex;
    margin: 0 1px;
    margin-top: 10px;
    margin-bottom: 5px;
    p{
        width: 33.3%;
        line-height: 1.5;
        box-shadow: inset -1px -1px #dfdfdf, inset 1px 1px grey;
        flex-grow: 1;
        margin: 0;
        padding: 2px 3px;
        padding-left: 5px;
        /* color: rgb(0, 0, 238); */
        text-decoration: underline;
    }
`