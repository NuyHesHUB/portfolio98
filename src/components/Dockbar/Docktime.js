import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledDocktime=styled.div`
    float: right;
    width: 110px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    border-width: 1px 1.5px 1.5px 1px;
    border-color: rgba(0, 0, 0, 0.5) rgba(255, 255, 255) rgb(255, 255, 255) rgba(0, 0, 0, 0.5);
    border-style: solid;
    /* 임시 */
    font-size: 13px;
`

const Docktime = () => {
    const [time, setTime] = useState({hour: '', min: '', 오전오후: ''})

    useEffect(()=>{
        getTime();
        setInterval(getTime,30000)
    },[])

    function getTime(){
        let date=new Date();
        let hour=date.getHours();
        let min=date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
        let 오전오후=date.getHours() >= 12 ? '오후' : '오전';
        setTime({hour, min, 오전오후})
    }


    return (
        <StyledDocktime>{`${time.오전오후} ${time.hour}:${time.min}`}</StyledDocktime>
    );
};

export default Docktime;