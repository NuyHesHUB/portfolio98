import styled from 'styled-components';

export const StyledStart = styled.div`
  z-index: 1000;
  left: 0px;
  bottom: 28px;
  height: auto;
  position: absolute;
  background-color: rgb(195, 199, 203);
  border-top: 2px solid rgba(255, 255, 255, 1);
  border-left: 2px solid rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.7) -2px -2px 1px inset;
  padding-bottom: 2px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Vertical = styled.div`
  background: linear-gradient(#000184 60%, #0f80cd);
  color: rgba(255, 255, 255);
  font-size: 20px;
  width: 35px;
  span {
    display: inline-block;
    transform-origin: 0 0;
    transform: rotate(270deg) !important;
    color: rgb(220, 220, 220);
    /* font-size: 25px; */
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    bottom: -15px;
  }
  span strong {
    font-size: 20px;
    font-family: Arial Black, Arial Bold, Gadget, sans-serif;
    font-weight: 700;
    margin-right: 1px;
  }
`;

export const AllPrograms = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3px;
  font-size: 13px;
`;

export const ProgramGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 180px; */
  width: 230px;
  /* padding: 5px 0 5px 5px; */
  padding: 7px 0 7px 5px;
  position: relative;
  /* z-index: 99; */
  /*----------------------------------------*\
                  PROGRAMS ALIGN
  \*----------------------------------------*/
  &:nth-child(4){
    padding-left: 10px;
  }
  &:nth-child(4) img{
    margin-right: 12px;
  }
  /*----------------------------------------*\
            PROGRAMS UNDERLINE :: AFTER
  \*----------------------------------------*/
  &:first-child::after{
    position: absolute;
    bottom: 0;
    content: '';
    width: 95%;
    height: 1px;
    background: #777;
    box-shadow: 0px 1px #fff;
  }
  &:nth-child(3)::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 95%;
    height: 1px;
    background: #777;
    box-shadow: 0px 1px #fff;
  }
  &:nth-child(11)::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 95%;
    height: 1px;
    background: #777;
    box-shadow: 0px 1px #fff;
  }
  &:hover {
    background: rgb(0, 0, 127);
    color: rgba(255, 255, 255);
  }
  img {
    margin-right: 10px;
  }
  span {
    flex: 2;
    padding-right: 10px;
    display: block;
    text-align: right;
    font-size: 9px;
  }
  em {
    font-style: normal;
  }
  em::first-letter {
    text-decoration: underline;
  }
`;

