import React from 'react';
import styled from "styled-components";

const WallpaperTextFrame = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    /* z-index: 100; */
    pointer-events: none;
    div{
        /* width: 100%;
        height: 100%; */
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
    h1{
        font-size: 70px;
        color: rgb(58, 110, 165);
        text-shadow: 1px 3px 1px #000;
        i{
            font-style: normal;
            font-size: 120px;
        }
    }
    @media screen and (max-width: 1260px){
        h1{
            font-size: 60px;
            i{font-size: 80px;}
        }
    }
    @media screen and (max-width: 1000px){
        h1{
            font-size: 30px;
            i{font-size: 60px;}
        }
    }
    @media screen and (max-width: 590px){
        h1{
            font-size: 20px;
            i{font-size: 40px;}
        }
    }
    @media screen and (max-width: 400px){
        h1{
            font-size: 10px;
            i{font-size: 20px;}
        }
    }
}
`
const WallpaperText = () => {
    return (
        <WallpaperTextFrame>
            <div>
                <h1><i>P</i>ORT <i>F</i>OLIO <i>98</i></h1>
            </div>
        </WallpaperTextFrame>
    );
};

export default WallpaperText;