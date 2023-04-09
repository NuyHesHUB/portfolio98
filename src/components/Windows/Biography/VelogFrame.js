/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Iframe from 'react-iframe'
import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls } from '../Project/FakeFrame'
import velog from '../../../assets/desktop-icon/velog.png'

function VelogFrame(){

    return (
        <TitleBarWrap style={{width:'406px', margin:'0 auto'}}>
            <TitleBar>
                <TitleBarText><img style={{width:'16px'}} src={velog} alt='icon'/>Joo Sehyeon - Velog</TitleBarText>
                <TitleBarControls><button/></TitleBarControls>    
            </TitleBar>
            <iframe style={{width:'400px', height:'420px'}} src="https://velog.io/@nuyhes/"  scrolling="yes"></iframe>
        </TitleBarWrap>
    );
};

export default VelogFrame;