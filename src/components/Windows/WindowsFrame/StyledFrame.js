import styled from "styled-components";


export const StyledFrame = styled.div.attrs(({top, left})=>({
    style: {
        top, left
    }
}))`
    /*----------------------------------------*\
                  StyledFrame 공통 속성
    \*----------------------------------------*/
    background-color: rgb(195,199,203);
    width: ${props=>props.width+'px'};
    position: absolute;
    box-shadow: rgb(0,0,0) -1.5px -1.5px 0.5px inset, rgba(255,255,255,0.8) 2px 2px 1px inset;
    z-index: ${props=>props.blurred? `` : `8`};
    z-index: ${props=>props.showTutorial ? '9999' : ''};
    padding: 3px 4px 4px 2px;
    display: ${props=>props.isMinimized ? `none` : `initial`};
    /*----------------------------------------*\
                      Notepad
    \*----------------------------------------*/
        div.Notepad {
            height: ${props=>props.isMaximized? `calc(100vh - 78px)` : `600px`};
            background-color: rgb(255, 255, 255);
            overflow:auto;
            box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px 0 inset;
            border-right: 2px solid rgb(240, 240, 240); 
            border-bottom: 2px solid rgb(240, 240, 240); 
            box-sizing: border-box;
            padding: 3px 0 0 4px;
            font-size: 13px;
            /* &::-webkit-scrollbar {
            width: 20px;
            background: green;
            }
            &::-webkit-scrollbar-thumb {
                background: red;
            } */
        }
    /*----------------------------------------*\
                    Biography
    \*----------------------------------------*/
        div.Biography {
            height: ${props=>props.isMaximized? `calc(100vh - 170px)` : `700px`};
            padding: ${props=>props.isMaximized? `3px 100px 0 100px;` : `3px 50px 0 50px;`};
            /* max-height: calc(100vh - 78px);
            min-height: 700px; */
            /* overflow:auto; */
            overflow-y:scroll;
            /* box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px 0 inset;
            box-shadow: rgb(240, 240, 240) 1.5px 1.5px 0 inset; */
            box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;
            background: #fff;
            border-right: 2px solid rgb(240, 240, 240); 
            border-bottom: 2px solid rgb(240, 240, 240); 
            box-sizing: border-box;
            font-size: 13px;
                h2{
                    text-align: center;
                    font-size: 30px;
                    font-weight: bold;
                    margin-top: 20px;
                }
                .profile{
                    display: block;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
                .project01{
                    width: 250px;
                    display: block;
                    margin: 0 auto;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
        }
    /*----------------------------------------*\
                    Deleted
    \*----------------------------------------*/
        div.Deleted{
            height: ${props=>props.isMaximized? `calc(100vh - 78px)` : `400px`};
            box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px  inset;
            border-right: 2px solid rgb(240, 240, 240); 
            border-bottom: 2px solid rgb(240, 240, 240); 
            display: flex;
            padding-left: 2px;
            padding-bottom: 2px;
            box-sizing: border-box;
            >.bg{
                width: 30%;
                height: 100%;
                overflow-y: scroll;
                margin-top: 2px;
                background: #fff;
                position: relative;
                .Deleted-bg{
                    height: 500px;
                    background-size: cover;
                    background-position: -81px -62px;
                    background-repeat: no-repeat;
                    padding: 0 20px;
                    img{
                    width: 36px;
                    height: 36px;
                    margin-top: 20px;
                    /* margin-left: 20px; */
                    }
                    h3{
                        font-size: 20px;
                    }
                }
                .line-list{
                    position: absolute;
                    display: flex;
                    top: 120px;
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
            }
            .ct{
                width: 80%;
                position: relative;
                overflow: hidden;
            }
        }
    /*----------------------------------------*\
                    Resume
    \*----------------------------------------*/
    div.Resume{
        position: relative;
        background: green;
        height: ${props=>props.isMaximized? `calc(100vh - 104px)` : `600px`};
    }
    /*----------------------------------------*\
                    Project
    \*----------------------------------------*/
    div.Project{
        /* height: 700px; */
        height: ${props=>props.isMaximized? `calc(100vh - 128px)` : `700px`};
        padding: ${props=>props.isMaximized? `3px 100px 0 100px;` : `3px 50px 0 50px;`};
        /* max-height: calc(100vh - 78px);
        min-height: 700px; */
        /* overflow:auto; */
        overflow-y:scroll;
        box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px 0 inset;
        box-shadow: rgb(240, 240, 240) 1.5px 1.5px 0 inset;
        border-right: 2px solid rgb(240, 240, 240); 
        border-bottom: 2px solid rgb(240, 240, 240); 
        box-sizing: border-box;
        font-size: 13px;
            h2{
                text-align: center;
                font-size: 30px;
                font-weight: bold;
                margin-top: 20px;
            }
            .profile{
                display: block;
                margin: 0 auto;
                margin-bottom: 20px;
            }
            .project01{
                width: 250px;
                display: block;
                margin: 0 auto;
                margin-top: 20px;
                margin-bottom: 20px;
            }
        }
`;


export const TitleBar = styled.div`
    background: ${props=>props.blurred? `linear-gradient(90deg,grey,#b5b5b5);` : `linear-gradient(90deg,navy,#1084d0);`};
    color: ${props=>props.blurred? `rgb(200,200,200)` : `rgb(255,255,255)`};
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1px 2px;
        span{
            padding-left: 4px;
            font-size: 11px;
            flex: 5;
        }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 60px;
        button {
            text-align: center;
            margin-left: 2px;
            background-color: rgb(195, 199, 203);
            border: none;
            box-shadow: 
                rgb(0, 0, 0) -1px -1px 1px inset, 
                rgba(255, 255, 255, 0.8) 2px 2px 0 inset;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2px;
        }
        .clickable:active {
            box-shadow: rgb(0, 0, 0) 1px 1px 1px inset,
            rgba(255, 255, 255, 0.8) -1px -1px 0 inset;
            padding: 2.5px 1.5px 1.5px 2.5px;
        }
        button img {
            width: 13px;
        }
`;

export const StyledMenu = styled.div`
    overflow: hidden;
    display: flex;
    /* padding: 1px 0px; */
    .menuWrap{
        display: flex;
        width: 100%;
        /* background: green; */
        padding: 0px 0px 0px 4px;
        margin: 0px 1px;
        box-shadow: 
            rgb(128, 128, 136) 0px -1px 1px inset, 
            rgb(128, 128, 136) -2px 0px 1px inset, 
            rgb(255, 255, 255) 1px 0px 0px 1px inset, 
            rgb(128, 128, 136) -1px 0px 2px, rgb(255, 255, 255) 1px 0px 0px, 
            rgb(255, 255, 255) -1px 1px 0px 0px, 
            rgb(255, 255, 255) 1px 1px 0px 0px;
        .first-divider{
            border-left: 1px solid #808088;
            border-right: 1px solid #ffffff;
            width: 2px;
            height: 16px;
            margin-top: 3px;
        }
        span {
            padding: 3px 8px;
            /* margin: 1px; */
            margin: 0px 1px;
            font-size: 12px;
            /* background: red; */
        }
        span:hover {
            background-color: rgb(0, 0, 127);
            color: rgb(255, 255, 255);
        }
    }
`;

export const StyledMoreMenu = styled.div`
    /* display: flex;
    flex-direction: row;
    width: 25%; */
    overflow: hidden;
    padding: 1px 0px;
    .moreMenuWrap{
        display: flex;
        align-items: center;
        min-height: 40px;
        width: 100%;
        /* display: block; */
        padding: 5px 8px 5px 4px;
        position: relative;
        min-height: 22px;
        /* padding-left: 12px; */
        margin: 0px 1px;
        /* margin-top: 3px; */
        box-shadow: 
            rgb(128, 128, 136) 0px -1px 1px inset, 
            rgb(128, 128, 136) -2px 0px 1px inset, 
            rgb(255, 255, 255) 1px 0px 0px 1px inset, 
            rgb(128, 128, 136) -1px 0px 2px, rgb(255, 255, 255) 1px 0px 0px, 
            rgb(255, 255, 255) -1px 1px 0px 0px, 
            rgb(255, 255, 255) 1px 1px 0px 0px;
    .btn{
        border: 0px solid transparent;
        background-color: rgb(195, 199, 203);
        position: relative;
        user-select: none;
    }
    .first-divider{
        border-left: 1px solid #808088;
        border-right: 1px solid #ffffff;
        width: 2px;
        height: 38px;
    }
    .divider{
        border-left: 1px solid #808088;
        border-right: 1px solid #ffffff;
        width: 3px;
        height: 33px;
        margin: 2px 3px;
    }
    .btnIconLarge{
        padding: 2px;
        width: 51px;
        min-width: 48px;
        height: 38px;
        /* display: inline-flex; */
        flex-direction: column;
        align-items: center;
        &:hover{
            box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff;
        }
        &:active{
            box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c;
            padding: 3px 1px 1px 3px;
        }
        /* &:focus{
            box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c;
            padding: 3px 1px 1px 3px;
        } */
        
    }
    .btnIconLarge:hover .btnIconLarge-Icon img{
        filter: grayscale(0);
    }
    .btnIconLarge .btnIconLarge-Icon{
        flex-grow: 1;
        width: 20px;
        height: 20px;
        margin: 1px auto;
        align-content: center;
        
    }
    .btnIconLarge-Icon{
        img{
            max-width: 100px;
            max-height: 100px;
            display: block;
            filter: grayscale(1);
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            margin: 0 auto;
        }
    }
    .btnIconLarge-Text{
        margin-top: auto;
        font-size: 12px;
    }
}
    /* span {
        padding: 1px 8px;
        margin: 1px;
        font-size: 12px;
    }
    span:hover {
        background-color: rgb(0, 0, 127);
        color: rgb(255, 255, 255);
    } */
`;

export const StyledResumeMenu = styled.div`
    /* background: red; */
    /* justify-content: space-between; */
    div{
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 5px;
        /* border: 1px solid #fff; */
        box-shadow: rgb(255, 255, 255) 0px 1px 0px 1px, 
        rgb(0, 0, 0) 1px 1px 1px 0px inset;
    a {
        padding: 1px 8px;
        margin: 1px;
        margin-right: 5px;
        font-size: 12px;
        background: rgb(195, 199, 203);
        box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
        rgb(134, 138, 142) 0px 0px 0px 1px inset, 
        rgb(0, 0, 0) 1px 1px 0px 0px;
        padding: 5px 7px 5px 7px;
        display: flex;
        align-items: center;
        &:last-child{
            margin-right: 0;
        }
        img{margin-right: 3px;}
        &:active {
            box-shadow: rgb(255, 255, 255) 1px 1px 0 1px, rgb(0, 0, 0) 1px 1px 0px 1px inset !important;
            padding: 5px 7px 5px 7px;
        }
    }
}
    /* span:hover {
        background-color: rgb(0, 0, 127);
        color: rgb(255, 255, 255);
    } */
`