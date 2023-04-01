import styled from "styled-components";

export const StyledFrame=styled.ul`
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
        z-index: 8;
    }
`
export const Contents=styled.div`
    background: silver;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    padding: 3px;
    position: relative;
    z-index: 2;
    /* height: 500px; */
`