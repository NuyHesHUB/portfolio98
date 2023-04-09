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
    width: ${props=>props.isMaximized? '20%' : '30%'};
    height: 99.7%;
    overflow-y: scroll;
    margin-top: 2px;
    margin-left: 2px;
    background: #fff;
    position: relative;
    .Biography-bg{
        /* height: 408px; */
        /* height: 100%; */
        /* width: 100%; */
        /* background-size: cover; */
        /* background-position: -81px -62px; */
        width: 100%;
        height: 100%;
        background-size: 100% 200px;
        /* background-image: url('https://cdn.wallpapersafari.com/49/71/tmazOQ.jpg'); */
        background-repeat: repeat-y;
        padding: ${props=>props.isMaximized ? '10px 20px 30px 20px' : '10px 10px 20px 10px'};
        /* background: ${props=>props.isMaximized ? 'red' : 'blue'}; */
        /* padding-top: 20px;
        padding-bottom: 20px; */
           .bg-wrap{
            width: 100%;
            /* height: 100%; */
            height: 97%;
            background: #c3c7cb;
            margin-top: 5px;
            padding: 7px;
            box-shadow: 
                rgb(10, 10, 10) -1px -1px inset, 
                rgb(223, 223, 223) 1px 1px inset, 
                grey -2px -2px inset, 
                rgb(255, 255, 255) 2px 2px inset;
            .profile-wrap{
                width: 100%;
                height: ${props=>props.isMaximized? '15%' : '20%'};
                padding-top: ${props=>props.isMaximized? '10px' : '5px'};
                /* background: #fff; */
                /* background: #c3c7cb; */
                background: transparent;
                margin: 0 auto;
                margin-bottom: ${props=>props.isMaximized? '9%' : '1%'};
                /* padding: 10px; */
                /* box-shadow: 
                    inset -1px -1px #fff, 
                    inset 1px 1px grey, 
                    inset -2px -2px #dfdfdf, 
                    inset 2px 2px #0a0a0a; */
                /* outline: 5px double #fff; */
                .profile{
                    width: 50px;
                    height: 50px;
                    margin: 0px auto;
                    border: 2px double #000;
                    /* border-radius: 5px; */
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: 0px -12px;
                }
                p{
                /* margin-top: 5px; */
                font-size: 11px;
                color: #222;
                text-align: center;
            }
            }
            .content-wrap{
                width: 100%;
                height: 79.6%;
                background: #fff;
                margin: 0 auto;
                margin-bottom: 1%;
                padding: 10px 5px;
                box-shadow: 
                    inset -1px -1px #fff, 
                    inset 1px 1px grey, 
                    inset -2px -2px #dfdfdf, 
                    inset 2px 2px #0a0a0a;
                /* -webkit-font-smoothing: none; */
                font-family: "Pixelated MS Sans Serif",Arial;
                font-size: 11px;
                position: relative;
                    .tree-view{
                        list-style: none;
                        position: relative;
                        margin-left: 5px;
                        div{
                            display: flex;
                            align-items: center;
                            img{
                                width: 14px;
                                margin-right: 2px;
                            }
                        }
                        a{    
                            color: #000;
                            text-decoration: none;
                        }
                        ul{
                            list-style: none;
                            border-left: 1px dotted grey;
                            /* margin-left: 16px; */
                            margin-left: 7px;
                            padding-left: 16px;
                            li{
                                margin-top: 3px;
                                position: relative;
                                display: list-item;
                                text-align: -webkit-match-parent;
                            >ul{
                                li{
                                    display: flex;
                                    align-items: center;
                                    img{
                                        width: 14px;
                                        margin-right: 2px;
                                    }
                                }
                            }
                            >div{
                                display: flex;
                                align-items: center;
                                width: 110px;
                                img{
                                    width: 14px;
                                    margin-right: 2px;
                                }
                            }
                            &::before{
                                border-bottom: 1px dotted grey;
                                content: "";
                                display: block;
                                left: -16px;
                                position: absolute;
                                top: 6px;
                                /* width: 12px; */
                                width: 14px;
                            }
                            &:last-child::after{
                                background: #fff;
                                bottom: 0;
                                content: "";
                                display: block;
                                left: -20px;
                                position: absolute;
                                top: 7px;
                                width: 8px;
                            }
                        }
                        }
                    }
            }
    }
    }
    /* .line-list{
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
    } */
`
export const RightContent=styled.div`
    width: ${props=>props.isMaximized? '80%' : '70%'};
    height: 100%;
    overflow-y: scroll;
    margin-top: 2px;
    padding: ${props=>props.isMaximized ? '20px 150px' : '20px'};
    /* background: ${props=>props.isMaximized ? 'red' : 'blue'}; */
    >div{
        /* border-left: 1px solid #fff;
        margin-bottom: 30px;
        padding-left: 20px;
        position: relative; */
        /* &::after{
            content: '';
            width: 1px;
            height: 100%;
            position: absolute;
            background: #808080;
            top: 0;
            left: -2px;
        } */
        /* padding: 20px;
        box-shadow: rgb(255, 255, 255) -1px -1px inset, grey 1px 1px inset, rgb(223, 223, 223) -2px -2px inset, rgb(10, 10, 10) 2px 2px inset; */
    }
    .divider{
        margin: 40px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
    .readme-box{
        .readme-content{
            background: #fff;
            padding: 15px;
            box-shadow: 
                    rgb(255, 255, 255) -1px -1px inset, 
                    grey 1px 1px inset, 
                    rgb(223, 223, 223) -2px -2px inset, 
                    rgb(10, 10, 10) 2px 2px inset;
            div{
                line-height: 1.4;
                .ani-box{
                    box-shadow: 
                    rgb(255, 255, 255) -1px -1px inset, 
                    grey 1px 1px inset, 
                    rgb(223, 223, 223) -2px -2px inset, 
                    rgb(10, 10, 10) 2px 2px inset;
                    margin: 5px 0px;
                    justify-content: center;
                }
                u{
                    text-decoration: none;
                    font-weight: bold;
                }
                i{
                    font-style: normal;
                    font-size: 20px;
                    /* margin-bottom: 5px; */
                    margin: 0 10px 5px 10px;
                }
                img{
                    display: inline-block;
                    font-size: 16px;
                    color: red;
                    animation: rotate linear 16000ms infinite;
                    @keyframes rotate {
                    0%{
                        -ms-transform: rotate(0deg);
                        -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
                    }
                    100%{
                        -ms-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                    }
                }
                }
            }
        }
    }
`
export const MyskillsFrame=styled.div`
    .content-wrap{
                    width: 100%;
                    height: 79.6%;
                    background: #fff;
                    margin: 0 auto;
                    margin-bottom: 1%;
                    padding: 10px 5px;
                    box-shadow: 
                        inset -1px -1px #fff, 
                        inset 1px 1px grey, 
                        inset -2px -2px #dfdfdf, 
                        inset 2px 2px #0a0a0a;
                    /* -webkit-font-smoothing: none; */
                    font-family: "Pixelated MS Sans Serif",Arial;
                    font-size: 12px;
                    position: relative;
                        .tree-view{
                            list-style: none;
                            position: relative;
                            margin-left: 5px;
                            div{
                                display: flex;
                                align-items: center;
                                img{
                                    width: 14px;
                                    margin-right: 2px;
                                }
                            }
                            ul{
                                list-style: none;
                                border-left: 1px dotted grey;
                                margin-left: 7px;
                                padding-left: 16px;
                                li{
                                    margin-top: 5px;
                                    position: relative;
                                    text-align: -webkit-match-parent;
                                >ul{
                                    li{
                                        display: flex;
                                        align-items: center;
                                        img{
                                            width: 14px;
                                            margin-right: 2px;
                                        }
                                    }
                                }
                                &::before{
                                    border-bottom: 1px dotted grey;
                                    content: "";
                                    display: block;
                                    left: -16px;
                                    position: absolute;
                                    top: 6px;
                                    /* width: 12px; */
                                    width: 14px;
                                }
                                &:last-child::after{
                                    background: #fff;
                                    bottom: 0;
                                    content: "";
                                    display: block;
                                    left: -20px;
                                    position: absolute;
                                    top: 7px;
                                    width: 8px;
                                }
                            }
                            }
                        }
    }
`
export const TableFrame=styled.div`
    .table-wrap{
        width: 100%;
        margin-top: 3px;
        table, td, th{
            border : 1px solid #fff;
            border-image: 
        url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;
        }
        table{
            width: 100%;
            thead{
                tr{
                    th{
                        padding: 5px;
                        font-weight: 400;
                        box-shadow: 
                        rgb(10, 10, 10) -1px -1px inset, 
                        rgb(223, 223, 223) 1px 1px inset, 
                        grey -2px -2px inset, 
                        rgb(255, 255, 255) 2px 2px inset;
                    }
                }
            }
            tbody{
                background: #fff;
                tr{
                    text-align: center;
                    td{
                        padding: 5px;
                        box-shadow: 
                            rgb(255, 255, 255) -1px -1px inset, 
                            grey 1px 1px inset,
                            rgb(223, 223, 223) -2px -2px inset, 
                            rgb(10, 10, 10) 2px 2px inset;
                    }
                }
            }
        }
    }
`

export const Fieldset=styled.fieldset`
    padding: 10px;
    border-image: 
        url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;
    i{
        font-style: normal;
    }
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