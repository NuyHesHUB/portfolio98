import React from 'react';
import styled from 'styled-components';
import DemoFalling from '../../effect/DeleteEffect/DemoFalling';
import Burning from '../../effect/DeleteEffect/Burning';
import deleted from '../../../assets/desktop-icon/Delete.png';
import bg from '../../../assets/wallpaper/windows_98_clouds.jpg';
import {TitleBarWrap, TitleBar, TitleBarText, TitleBarControls} from '../Project/FakeFrame';

const StyledDemoDeleteFrame=styled.div`
            .Demo-Deleted{
            /* height: ${props=>props.isMaximized? `calc(100vh - 152px)` : `200px`}; */
            height: 200px;
            background: #018281;
            /* background-image: url(${bg});
            background-size: cover; */
            box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px  inset;
            border-right: 2px solid rgb(240, 240, 240); 
            border-bottom: 2px solid rgb(240, 240, 240); 
            /* display: flex; */
            padding-left: 2px;
            padding-bottom: 2px;
            box-sizing: border-box;
            .democt{
                width: 100%;
                height: 100%;
                position: relative;
                overflow: hidden;
            }
        }
`

function DemoDelete(){
    return (
        <TitleBarWrap>
            <TitleBar>
                <TitleBarText><img style={{width:'16px'}} src={deleted} alt='icon'/>바탕화면 - 휴지통</TitleBarText>
                <TitleBarControls><button/></TitleBarControls>
            </TitleBar>
            <StyledDemoDeleteFrame>
                <div className="Demo-Deleted">
                    <div className='democt' >
                        <DemoFalling/>
                        <Burning/>
                    </div>
                </div>
            </StyledDemoDeleteFrame>
        </TitleBarWrap>
    );
};

export default DemoDelete;