import React from 'react';
import styled from 'styled-components';
import FakeFrame from './FakeFrame';
import page from '../../../assets/project-img/project06-img/page.png';
import register from '../../../assets/project-img/project06-img/register.png';
import login from '../../../assets/project-img/project06-img/login.png';
import create from '../../../assets/project-img/project06-img/create.png';
import community from '../../../assets/project-img/project06-img/community.png';
import post from '../../../assets/project-img/project06-img/post.png';
import comment from '../../../assets/project-img/project06-img/comment.png';
import user from '../../../assets/project-img/project06-img/user.png';
import aws from '../../../assets/project-img/project06-img/aws.png';
import docker from '../../../assets/project-img/project06-img/docker.png';
import pm2 from '../../../assets/project-img/project06-img/pm2.png';
import pgadmin from '../../../assets/project-img/project06-img/pgadmin.png';

const ProjectStyledFrame = styled.div`
    .divider{
        margin: 5px auto;
        width: 100%;
        height: 3px;
        background: #808080;
        border-bottom: 1.2px solid #fff;
    }
`

function Project06(){
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
            <h2>AWS 배포</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="AWS 인스턴스"
                contents={aws}
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
            <h2>커뮤니티 생성</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="커뮤니티 생성"
                contents={create}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>생성한 커뮤니티</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="커뮤니티"
                contents={community}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>커뮤니티 포스트 생성</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="포스트 생성"
                contents={post}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>포스트에 댓글 & 좋아요/싫어요 기능</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="포스트 댓글 & 좋아요/싫어요"
                contents={comment}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>유저 활동내역</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="유저 활동내역"
                contents={user}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>AWS : ubuntu Docker 실행</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="AWS : ubuntu Docker 실행"
                contents={docker}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>AWS : ubuntu PM2 실행</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="AWS : ubuntu PM2 실행"
                contents={pm2}
            ></FakeFrame>
            <br/>
            <br/>
            <h2>pgAdmin4 : DataBase</h2>
            <div className='divider'/>
            <br/>
            <FakeFrame
                title="pgAdmin4 : DataBase"
                contents={pgadmin}
            ></FakeFrame>
        </ProjectStyledFrame>
    );
};

export default Project06;