import styled from "styled-components";

export const StyledFrame=styled.div`
    hr{
        /* margin: 0 auto; */
        border: none;
        width: 400px;
        height: 1px;
        opacity: 0.5;
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
        margin-bottom: 10px;
    }
    .bg{
                width: 100%;
                height: 131px;
                overflow-y: scroll;
                margin-top: 2px;
                background: #fff;
                position: relative;
                border: 1px double #000;
    box-sizing: border-box;
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
        
`

export const TabList=styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0 0 -2px;
    padding-left: 3px;
    position: relative;
    text-indent: 0;
`
export const Tab=styled.li`
    padding: 5px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    box-shadow: inset -1px 0 #0a0a0a, inset 1px 1px #dfdfdf, inset -2px 0 grey, inset 2px 2px #fff;
    z-index: 1;
    &[disabled]{
        background-color: silver;
        margin-left: -3px;
        margin-top: -3px;
        padding-bottom: 2px;
        position: relative;
        z-index: 6;
    }
`
export const ContentsFrame=styled.div`
    background: silver;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    padding: 3px;
    position: relative;
    /* z-index: 2; */
    /* height: 500px; */
`
export const Container=styled.div`
    .title-bar-wrap{
        background: silver;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    padding: 3px;
    .title-bar{
        align-items: center;
    background: linear-gradient(90deg,navy,#1084d0);
    display: flex;
    justify-content: space-between;
    padding: 3px 2px 3px 3px;
        .title-bar-text{
            color: #fff;
            font-weight: 700;
            letter-spacing: 0;
            margin-right: 24px;
        }
        .title-bar-controls{
            display: flex;
            button{
                display: block;
                min-height: 14px;
                min-width: 16px;
                padding: 0;
                background: silver;
                box-shadow: inset -1px -1px #0a0a0a, 
                inset 1px 1px #fff, 
                inset -2px -2px grey, 
                inset 2px 2px #dfdfdf;
                border: none;
            }
            .mini{
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");
                background-position: bottom 3px left 4px;
                background-repeat: no-repeat;
            }
            .maxi{
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");
                background-position: top 2px left 3px;
                background-repeat: no-repeat;
            }
            .exit{
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E");
                background-position: top 3px left 4px;
                background-repeat: no-repeat;
                margin-left: 2px;
            }

        }
    }
    }
    
`

export const DisplayFrame=styled.div`
    position: relative;
    text-align: center;
    height: 300px;
`

export const DisplayImg=styled.img`
    width: 392px;
`

export const ProjectImgFrame=styled.div`
    position: relative;
    top: -247px;
    left: 0;
`
export const ProjectImg=styled.img`
    width: 323px;
    height: 179px;
`

export const Fieldset=styled.fieldset`
    padding: 10px;
    border-image: 
        url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;
    
`

export const Legend=styled.legend`

`
export const Subtitle=styled.div`

`

export const SkillWrap=styled.div`
    width: 150px;
    height: 100px;
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
    margin: 2px 3px;
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