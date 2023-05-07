import React from 'react';
import ReactPlayer from 'react-player';
import { TitleBarWrap, TitleBar, TitleBarText, TitleBarControls} from './FakeFrame';
import FakeFrame from './FakeFrame';
import function01 from '../../../assets/project-img/suwon01.png'
import function02 from '../../../assets/project-img/suwon02.png'


function Project01(){
    return (
        <div>
            <TitleBarWrap>
                <TitleBar>
                    <TitleBarText>ff</TitleBarText>
                    <TitleBarControls>
                        <button></button>
                    </TitleBarControls>
                </TitleBar>
            
            {/* <iframe key={video.key} src={`https://www.youtube.com/embed/${video.key}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`} width='100%' height='100%' ></iframe> */}
            </TitleBarWrap>
            <ReactPlayer
                 className="player"
                 url={"https://www.youtube.com/watch?v=9x6KhvJNxwc"}
                 width="100%"
                 heigth="100%"
                 playing={false}
                 muted={true}
                 controls={true}
                 style={{margin:'2px 0'}}
            />
            <FakeFrame
                title="메뉴"
                contents={function01}
            ></FakeFrame>
            <br/>
            <FakeFrame
                title="지도 API"
                contents={function02}
            ></FakeFrame>
        </div>
    );
};

export default Project01;