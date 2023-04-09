/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';
import Iframe from 'react-iframe'
import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls } from '../Project/FakeFrame'
import insta from '../../../assets/biography-img/insta.png'

function InstagramFrame(){
    return (
        <TitleBarWrap style={{width:'406px', margin:'0 auto'}}>
            <TitleBar>
                <TitleBarText><img style={{width:'16px'}} src={insta} alt='icon'/>Joo Sehyeon - Instagram</TitleBarText>
                <TitleBarControls><button/></TitleBarControls>    
            </TitleBar>
            <iframe style={{width:'400px', height:'420px'}} src="https://www.instagram.com/nuy_hes/embed" scrolling="no" allowtransparency="true" /* width={400} */ /* height={415} */></iframe>
        </TitleBarWrap>
    );
};

export default InstagramFrame;