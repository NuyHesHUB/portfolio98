import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { exitTutorial } from '../../store/actions/actions'

const StyledTutorial = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    top: -18px;
    left: 0;
    background: rgba(0,0,0,.5);
    z-index: 999;
    .closewrap{
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        /* width: 168px; */
        height: 41px;
        background: rgb(195, 199, 203);
        box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
        padding: 5px;
        box-sizing: border-box;
    .content{
        color: yellow;
        background: blue;
        display: inline-block;
        line-height: 26px;
        font-weight: 600;
        padding: 2px 15px;
        box-sizing: border-box;
    }
    .close{
        position: relative;
        display: inline-block;
        width: 30px;
        height: 30px;
        background: rgb(195, 199, 203);
        box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
        rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
        &:focus {
            box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
            rgba(0, 0, 0, 0.4) 0px 0px 0 1.5px inset, rgb(0, 0, 0) 1px 1px 0px 1px;
        }
        &:active {
            box-shadow: rgb(255, 255, 255) 1px 1px 0 1px, rgb(0, 0, 0) 1px 1px 0px 1px inset !important;
            padding: 4px 2px 2px 4px;
        }
        .close-1{
            position: absolute;
            bottom: 14px;
            left: 5px;
            rotate: 45deg;
            content: '';
            width: 20px;
            height: 2px;
            background: #242424;
        }
        .close-2{
            position: absolute;
            bottom: 14px;
            left: 5px;
            rotate: -45deg;
            content: '';
            width: 20px;
            height: 2px;
            background: #242424;
        }
    }
    }
        
`


function Tutorial({onTutorialExit}){
    return (
        <StyledTutorial>
            <div className='closewrap'>
                <div className='content'>
                    <p>User Tutorial</p>
                </div>
                <div className='close'
                    onClick={()=>{onTutorialExit()}}
                >
                    <span className='close-1'></span>
                    <span className='close-2'></span>
                </div>
            </div>
        </StyledTutorial>
    );
};
const mapStateToProps=(state)=>{
    return{
        showTutorial: state.showTutorial,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      onTutorialExit: () => dispatch(exitTutorial()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial);