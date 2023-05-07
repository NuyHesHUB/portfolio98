
import styled from "styled-components"

export const TutorialContentWrap=styled.div`
      padding: 0 20px 20px 20px;
`;
export const TutorialTitle=styled.h1`
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
`;
export const TutorialText=styled.p`
      text-align: center;
      margin-bottom: 5px;
      i{
        font-style: normal;
        font-weight: bold;
      }
`;
export const TutorialSubTitle=styled.h2`
      margin-top: 10px;
`;
export const TutorialList=styled.ul`
      margin-top: 10px;
      margin-left: 18px;
`;
export const TutorialItem=styled.li`
      margin-bottom: 10px;
      /* width: 300px; */
      /* display: flex; */
      /* justify-content: space-between; */
      span{
        font-size: 14px;
        font-weight: bold;
        background: #ededed;
        padding: 2px 5px;
      }
      i{
        font-style: normal;
        font-weight: bold;
      }
      &:last-child{
        margin-bottom: 0;
      }
`