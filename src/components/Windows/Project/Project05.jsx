import React from 'react';
import styled from 'styled-components';
import FakeFrame from './FakeFrame';
import page from '../../../assets/project-img/project05-img/page.png';
import register from '../../../assets/project-img/project05-img/register.png';
import login from '../../../assets/project-img/project05-img/login.png';
import profile from '../../../assets/project-img/project05-img/profile.png';
import chatroom from '../../../assets/project-img/project05-img/chatroom.png';
import image from '../../../assets/project-img/project05-img/image.png';
import chat from '../../../assets/project-img/project05-img/chat.png';
import direct from '../../../assets/project-img/project05-img/direct.png';
import count from '../../../assets/project-img/project05-img/count.png';
import firebase from '../../../assets/project-img/project05-img/firebase.png';

const ProjectStyledFrame = styled.div`
    .divider{
        margin: 5px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
`

function Project05(){
    return (
        <ProjectStyledFrame>
            <br/>
            <br/>
            <h2>전체 페이지</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="전체 페이지"
                contents={page}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>파이어 베이스</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="파이어 베이스"
                contents={firebase}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>회원가입</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="회원가입"
                contents={register}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>로그인</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="로그인"
                contents={login}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>프로필 사진변경</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="프로필 사진변경"
                contents={profile}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>채팅룸 생성</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="채팅룸 생성"
                contents={chatroom}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>이미지 전송</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="이미지 전송"
                contents={image}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>상대방 채팅 입력여부 확인</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="채팅을 입력하고 있습니다"
                contents={chat}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>다이렉트 메세지 전송</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="다이렉트 메세지"
                contents={direct}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>채팅 카운트</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="채팅 카운트"
                contents={count}
            ></FakeFrame>
        </ProjectStyledFrame>
    );
};

export default Project05;