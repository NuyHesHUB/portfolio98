import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
    z-index: 100;
    pointer-events: none;
    background: -webkit-gradient(linear,left top,left bottom,color-stop(50%,rgba(18,16,16,0)),color-stop(50%,rgba(0,0,0,.25))),-webkit-gradient(linear,left top,right top,from(rgba(255,0,0,.06)),color-stop(rgba(0,255,0,.02)),to(rgba(0,0,255,.06)));
    background: -webkit-linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,.25) 0),-webkit-linear-gradient(left,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06));
    background: linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,.25) 0),linear-gradient(90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06));
    /* background-size: 100% 2px,3px 100%; */
    background-size: 100% 2px,3px 100%;
    
`