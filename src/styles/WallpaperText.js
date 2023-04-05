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
        text-shadow: 10px 5px 1px rgba(0, 0, 0, .1);
        background-size: 100% 5px;
        background-image: -webkit-linear-gradient(#000 10%, rgb(58, 110, 165) 40%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* background-image: -webkit-linear-gradient(#000 10%, #fff 50%);
        background-position: 0 0;
        background-size: 100% 10px;
        background-repeat: repeat; */
        /* -webkit-text-fill-color: transparent; */
        
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