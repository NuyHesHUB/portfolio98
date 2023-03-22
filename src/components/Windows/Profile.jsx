import React from 'react';
import styled from 'styled-components';
import ProfileIMG from '../../assets/resume-img/profile.jpg'

const ProfileFrame=styled.div`
    width: 220px;
    height: 350px;
    background-color: rgb(195,199,203);
    box-shadow: rgb(0,0,0) -1.5px -1.5px 0.5px inset, rgba(255,255,255,0.8) 2px 2px 1px inset;
    /* box-shadow: rgba(0, 0, 0, 0.8) 1.5px 1.5px 0 inset; */
    /* border-right: 2px solid rgb(240, 240, 240); 
    border-bottom: 2px solid rgb(240, 240, 240); */
    padding: 3px 4px 4px 4px;
    position: absolute;
    top: 2%;
    right: 2%;
    padding-top: 10px;
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
        border: 1px double #ededed;
    }
    .title{
        text-align: center;
        padding: 5px 0;
        border: 1px dotted #ededed;
        color: #fff;
        font-weight: 600;
    }
    .picture{
        /* width: 80px;
        height: 80px;
        border-radius: 50%; */
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
        li{
            border-bottom: 1px dotted #ededed;
            color: yellow;
            font-weight: 600;
            padding: 3px 10px;
            &:hover{
                background: #ededed;
                color: blue;
            }
        }
    }
`

const Profile = () => {
    return (
        <ProfileFrame>
            <ProfileWrap>
                <div>
                    <p className='title'>Please Select boot device :</p>
                    <div className='picture'>
                       <div style={{backgroundImage:`url(${ProfileIMG})`}}></div>
                    </div>
                    <ul>
                        <li>1st FLOPPY DRIVE</li>
                        <li>SM-TSSTcorp</li>
                        <li>SS-HL-DT-ST DVDRAM</li>
                        <li>3M-WDC</li>
                        <li>*TUTORIAL*</li>
                    </ul>
                </div>
            </ProfileWrap>
        </ProfileFrame>
    );
};

export default Profile;