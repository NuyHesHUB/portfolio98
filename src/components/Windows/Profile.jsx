import React from 'react';
import styled from 'styled-components';
import ProfileIMG from '../../assets/resume-img/profile.jpg'
import {connect} from 'react-redux'
import { openTutorial } from '../../store/actions/actions'
/* import Tutorial from './Tutorial'; */
/* import Button from '../Button'; */

const ProfileFrame=styled.div`
    width: 250px;
    /* height: 310px; */
    background-color: rgb(195,199,203);
    box-shadow: rgb(0,0,0) -1.5px -1.5px 0.5px inset, rgba(255,255,255,0.8) 2px 2px 1px inset;
    /* box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px 0 inset; */
    /* border-right: 2px solid rgb(240, 240, 240); 
    border-bottom: 2px solid rgb(240, 240, 240); */
    padding: 3px 4px 4px 4px;
    position: absolute;
    top: 2%;
    right: 2%;
    z-index: ${props => props.showTutorial ? '999' : ''};
    animation: ${props => props.showTutorial ? 'tutorial1 1s infinite;' : null};
    @keyframes tutorial1 {
        0%,
        100%{outline: 5px solid red}
        50%{outline: 5px solid #ededed}
    }
`
const ProfileWrap=styled.div`
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    background: blue;
    >div{
        width: 100%;
        height: 100%;
        border-top: 1px double #ededed;
        border-left: 1px double #ededed;
        border-right: 1px double #ededed;
        border-bottom: 1px dotted #ededed;
    }
    .title{
        text-align: center;
        padding: 5px 0;
        /* border-top: 1px dotted #ededed; */
        border-bottom: 1px dotted #ededed;
        color: #fff;
        font-weight: 600;
    }
    .picture{
        margin-top: 5px;
        margin-bottom: 5px;
        div{
            width: 80px;
            height: 80px;
            margin: 0 auto;
            border-radius: 5px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 2px -22px;

        }
    }
    ul{
        border-top: 1px dotted #ededed;
        list-style: none;
        /* padding: 5px; */
        li{
            border-bottom: 1px dotted #ededed;
            color: yellow;
            font-weight: 600;
            padding: 3px 10px;
            &:first-child{
                padding: 7px;
            }
            &:last-child{
                border: none;
            }
            &:hover:not(:first-child){
                background: #ededed;
                color: blue;
            }
            /* &:hover{
                background: #ededed;
                color: blue;
            } */
        }
    }
`
/* function Button ({pressed}){
    return <Button pressed={pressed}/>
} */
const StyledButtonInside = styled.div`
  border: 1px dotted transparent;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: ${props=>props.pressed? '21px':'30px'};
  &:active{
    line-height: 21px;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* width: ${props => props.pad ? `auto` : `160px`}; */

  /* div {
    display: flex;
    
    span, b {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 3px;
    }
  } */
`;
const StyledTutoBtn = styled.div`
  /* box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
  border: none;
  padding: 3px;
  background: rgb(195, 199, 203);
  margin-right: 4px;
  height: 100%; */
  width: 100%;
  height: 30px;
  /* background: blue; */
  /* box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px; */
  color:yellow;
  animation: ${props=>props.pressed ? '': 'tutorial 2s infinite'};
  @keyframes tutorial {
                0%{color: red}
                50% {color: yellow;}
                100% {color: red;}
            }
  ${props => props.pressed ? `
    box-shadow: rgb(255, 255, 255) 1px 1px 0 1px, rgb(0, 0, 0) 1px 1px 0px 1px inset !important;
    font-weight: bold;
    background-color: #blue !important;
    padding: 4px 2px 2px 4px;
  `: `box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
        rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;`};
  
  &:focus {
    box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
      rgba(0, 0, 0, 0.4) 0px 0px 0 1.5px inset, rgb(0, 0, 0) 1px 1px 0px 1px;
  }
  
  &:active {
    box-shadow: rgb(255, 255, 255) 1px 1px 0 1px, rgb(0, 0, 0) 1px 1px 0px 1px inset !important;
    padding: 4px 2px 2px 4px;
  }
  
  &:focus ${StyledButtonInside} {
    border-color: black;
  }
`;

function TutoBtn({ id, children, pressed, clicked, pad}){
    console.log('pressed',pressed);
    return(
        <StyledTutoBtn onClick={clicked} pressed={pressed} id={id}>
            <StyledButtonInside
                pressed={pressed}
            >User Tutorial</StyledButtonInside>
        </StyledTutoBtn>
    )
}

function Profile({showTutorial, onTutorialClick}){
    
    console.log('showTutorial',showTutorial);
    /* console.log('onTutorialClick',onTutorialClick); */
    /* const tutorialButton = showTutorial ?
        <Tutorial/> : null; */
    return (
        <ProfileFrame
            showTutorial={showTutorial}
        >
            <ProfileWrap>
                <div>
                    <h3 style={{textAlign:'center',background:'rgb(0,216,215)', color:'blue'}}>Quick Menu</h3>
                    <p className='title'>Please Select boot device :</p>
                    <div className='picture'>
                       <div style={{backgroundImage:`url(${ProfileIMG})`}}></div>
                    </div>
                    <ul>
                        <li>
                            <TutoBtn
                                    id="StartTutorial"
                                    clicked={()=>onTutorialClick()}
                                    pressed={showTutorial}
                                    pad="0"
                                >
                            </TutoBtn>
                        </li>
                        <li>&gt; Biography</li>
                        <li>&gt; Resume</li>
                        <li>&gt; Project</li>
                        <li>&gt; Contact</li>
                    </ul>
                </div>
            </ProfileWrap>
        </ProfileFrame>
    );
};

const mapStateToProps = (state) => {
    return{
        showTutorial: state.showTutorial,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onTutorialClick: () => dispatch(openTutorial())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);