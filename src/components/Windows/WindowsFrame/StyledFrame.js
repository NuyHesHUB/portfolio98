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
    padding: 3px 4px 4px 4px;
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
            /* height: 700px; */
            height: ${props=>props.isMaximized? `calc(100vh - 78px)` : `700px`};
            padding: ${props=>props.isMaximized? `3px 100px 0 100px;` : `3px 50px 0 50px;`};
            /* max-height: calc(100vh - 78px);
            min-height: 700px; */
            /* overflow:auto; */
            overflow-y:scroll;
            /* box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px 0 inset; */
            box-shadow: rgb(240, 240, 240) 1.5px 1.5px 0 inset;
            /* border-right: 2px solid rgb(240, 240, 240); 
            border-bottom: 2px solid rgb(240, 240, 240);  */
            box-sizing: border-box;
            /* padding: 3px 0 0 4px; */
            font-size: 13px;
            position: absolute
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
`;

export const TitleBar = styled.div`
    background-color: ${props=>props.blurred? `rgb(0,0,0,0.4)` : `rgb(0,0,127)`};
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
    display: flex;
    flex-direction: row;
    width: 25%;
    /* justify-content: space-between; */
    span {
        padding: 1px 8px;
        margin: 1px;
        font-size: 12px;
    }
    span:hover {
        background-color: rgb(0, 0, 127);
        color: rgb(255, 255, 255);
    }
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