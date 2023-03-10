import styled from "styled-components";

export const StyledFrame = styled.div.attrs(({top, left})=>({
    style: {
        top, left
    }
}))`
    background-color: rgb(195,199,203);
    width: ${props=>props.width+'px'};
    position: absolute;
    box-shadow: rgb(0,0,0) -1.5px -1.5px 0.5px inset, rgba(255,255,255,0.8) 2px 2px 1px inset;
    z-index: ${props=>props.blurred? `1` : `8`};
    padding: 3px 4px 4px 4px;
    display: ${props=>props.isMinimized ? `none` : `initial`};
    margin: 8px;
    div.Notepad {
    height: 300px;
    background-color: rgb(255, 255, 255);
    overflow-y: auto;
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
    div.Resume {
    height: 800px;
    overflow-y: auto;
    /* box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px 0 inset; */
    box-shadow: rgb(240, 240, 240) 1.5px 1.5px 0 inset;
    /* border-right: 2px solid rgb(240, 240, 240); 
    border-bottom: 2px solid rgb(240, 240, 240);  */
    box-sizing: border-box;
    padding: 3px 0 0 4px;
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
    box-shadow: rgb(0, 0, 0) -1px -1px 1px inset, 
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
`

export const StyledMenu = styled.div`
display: flex;
flex-direction: row;
width: 25%;
justify-content: space-between;
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