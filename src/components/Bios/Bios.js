import React from 'react';
import styled from 'styled-components';


const StyledBios=styled.div`
    width: 100vw;
    height: 100vh;
    background: tomato;
    position: fixed;
    overflow: hidden;
`


const Bios = () => {

    let onChangeInputStart=(e)=>{
        let ch='Enter'
        if (e.key === ch) {
            console.log('Enter 확인')
            window.location.href='/windows'
          }
        }   

    return (
        <StyledBios>
            <h2>Bios 페이지</h2>
            <input 
                placeholder='Windows로 이동'
                onKeyUp={onChangeInputStart}
            />
        </StyledBios>
    );
};

export default Bios;