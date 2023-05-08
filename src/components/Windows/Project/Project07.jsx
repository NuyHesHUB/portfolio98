import React from 'react';
import FakeFrame from './FakeFrame';
import function01 from '../../../assets/project-img/suwon01.png'
import function02 from '../../../assets/project-img/suwon02.png'


function Project07(){
    return (
        <div>
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

export default Project07;