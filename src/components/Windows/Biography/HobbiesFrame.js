import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls } from '../Project/FakeFrame'

import icon from '../../../assets/biography-img/hobbies.png'
import img01 from '../../../assets/biography-img/a1.jpg'
import img02 from '../../../assets/biography-img/a2.JPG'
import img03 from '../../../assets/biography-img/a3.jpg'
import img04 from '../../../assets/biography-img/a4.JPG'

const StyledHobbies=styled.div`
    .images-leaning {
    box-sizing: border-box;
    overflow: hidden;
    /* width: 100%; */
    /* width: 80%; */
    /* min-width: 800px; */
    /* margin: 10em auto 0; */
    min-height: 330px;
    position: relative;
    background-repeat: no-repeat;
    /* background-image: linear-gradient(352deg, transparent 45.2%, #bbb 45.5%, #bbb 45.6%, #ccc 45.8%, #eee 60%), linear-gradient(30deg, #ccc, #eee 90%); */
    background-image: linear-gradient(352deg, transparent 37.2%, rgb(187, 187, 187) 38.5%, rgb(187, 187, 187) 37.6%, rgb(204, 204, 204) 50.8%, rgb(238, 238, 238) 80%), linear-gradient(30deg, rgb(204, 204, 204), rgb(238, 238, 238) 90%);
    background-size: 100% 32.4em;
    background-position: 50% 100%;
    /* background: ${props=>props.isMaximized ? 'rgb(1, 130, 129);' : 'blue'}; */
}
.images-leaning > div {
    /* width: 250px; */
    /* width: 190px; */
    width: ${props=>props.isMaximized ? '190px' : '150px'};
    position: absolute;
    /* left: 50%; */
    /* left: 76%; */
    left: ${props=>props.isMaximized ? '76%' : '83%'};
    bottom: 7.8em;
    z-index: 0;
    display: flex;
    justify-content: flex-end;
}
.images-leaning > div:before {
    content: '';
    /* width: 60%; */
    width: 96%;
    height: 94%;
    position: absolute;
    left: 0;
    top: 13%;
    z-index: 1;
    background-repeat: no-repeat;
    background-image: linear-gradient(120deg, transparent 42%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.35) 65%), linear-gradient(20deg, transparent 38%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.23) 55%, rgba(0,0,0,0.13) 75%), radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.15) 3%, transparent 40%);
    transform: rotate(-8deg);
}
.images-leaning > div:after {
    content: '';
    /* width: 60%; */
    width: 50%;
    height: 100%;
    position: absolute;
    z-index: 3;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.3), transparent 70%), linear-gradient(45deg, rgba(255,255,255,0) 60%, rgba(255,255,255,0.3) 80%);
    transform: perspective(20em) rotateY(1deg) rotateZ(-5deg) skewY(-2deg) skewX(-1deg) scaleX(var(--resize));
}
.images-leaning > div > img {
    width: 50%;
    height: 100%;
    display: block;
    position: relative;
    z-index: 2;
    border-left: 0.3em solid;
    border-image: linear-gradient(105deg, transparent 0.5%, #aaa 0.7%) 1;
    box-shadow: 0.1em 0.2em 0 -0.1em #666;
    filter: saturate(90%);
    transform: perspective(20em) rotateY(1deg) rotateZ(-5deg) skewY(-2deg) skewX(-1deg) scaleX(var(--resize));
}
.images-leaning > div:nth-of-type(1) {
    --resize: 0.895;
    margin-left: 35.2em;
    /* transform: scaleY(0.94) translate(-26.6em, -6.2em); */
    transform: scaleY(0.94) translate(-43.6em, -4.2em);
}
.images-leaning > div:nth-of-type(1):before {
    background-size: 100% 82%, 100% 18%, 100% 10%;
    background-position: 0.8em 0, 0.1em 100%, -3em 80%;
}
.images-leaning > div:nth-of-type(2) {
    --resize: 0.925;
    margin-left: 10em;
    /* transform: scaleY(0.965) translate(-17em, -4.2em); */
    transform: scaleY(0.965) translate(-28em, -3.2em);
}
.images-leaning > div:nth-of-type(2):before {
    background-size: 100% 83%, 100% 17%, 100% 10%;
    background-position: 0.6em 0, 0.1em 100%, -3em 81%;
}
.images-leaning > div:nth-of-type(3) {
    --resize: 0.96;
    margin-left: -15.3em;
    /* transform: scaleY(0.98) translate(-8em, -2.1em); */
    transform: scaleY(0.98) translate(-13em, -1.7em);
}
.images-leaning > div:nth-of-type(3):before {
    background-size: 100% 84%, 100% 16%, 100% 10%;
    background-position: 0.4em 0, 0 100%, -3em 81%;
}
.images-leaning > div:nth-of-type(4) {
    --resize: 0.99;
    margin-left: -40.4em;
    display: ${props=>props.isMaximized ? '' : 'none'};
}
.images-leaning > div:nth-of-type(4):before {
    background-size: 100% 85%, 100% 15%, 100% 10%;
    background-position: 0.1em 0, 0 100%, -3em 83%;
}
`


function HobbiesFrame({biography}){
    return (
        <TitleBarWrap>
            <TitleBar>
                <TitleBarText><img style={{width:'16px'}} src={icon} alt='icon'/>Hobbies</TitleBarText>
                <TitleBarControls><button/></TitleBarControls>
            </TitleBar>
            <StyledHobbies isMaximized={biography.maximized}>
                <div className="images-leaning">
                    <div>
                        <img src={img01} alt="Eleanor from The Good Place" />
                    </div>
                    <div>
                        <img src={img02} alt="Chidi from The Good Place" />
                    </div>
                    <div>
                        <img src={img03} alt="Jason from The Good Place" />
                    </div>
                    <div>
                        <img src={img04} alt="Tahani from The Good Place" />
                    </div>
                </div>
            </StyledHobbies>
        </TitleBarWrap>
    );
};
const mapStateToProps = (state) => {
    return{
        biography: state.biography
    }
}

export default connect(mapStateToProps)(HobbiesFrame);