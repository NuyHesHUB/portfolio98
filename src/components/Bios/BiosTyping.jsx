import React, { useEffect, useState } from 'react';

/* Library */
import styled from 'styled-components';

const StyledBiosTyping = styled.span`
        >div{
            /* height: 500px; */
            span{
                animation: cursor 1s step-end infinite;
                animation-duration: 0.3s; 
                animation-iteration-count: 35;
                @keyframes cursor{
                    0%{border-right: 5px solid #fff} 
                    50%{border-right: 5px solid #000} 
                    100%{border-right: 5px solid #fff} 
                }
            }
        }
        white-space: pre-wrap;
        line-height: 1.5;
`

const BiosTyping = () => {
  /* const txt = `안녕하세요. 프론트엔드 개발자를 꿈꾸는 주세현입니다. \n웹 개발 업무 프로세스에 전반적인 이해력을 습득하였습니다.\n개발하면서 제가 느낀 좋은 IT 서비스는 사용자의 입장에서 쓰기편한 서비스라 생각하고, \n늘 사용자의 관점을 고안하며 개발하고 있습니다.\n현재는 거창한 업무성과보다 사용자의 작은 문제해결에 끝까지 몰입할 수 있는 신입 개발자입니다.\n이런 저의 성장가능성을 믿고 이끌어줄 회사를 찾고 있습니다.\n저의 PORTFOLIO98\n페이지에 오신것을 환영합니다.` */
  const txt = `Booting... 나의 역량 로딩...\n$: > Total memory found: 256kb\n$: > Scanning for 문제해결능력   ■■■■■■■■■■■■■■■■■■■■■■ 100%\n$: > Scanning for 의사소통능력   ■■■■■■■■■■■■■■■■■■■■■■ 100%\n$: > Scanning for 자기주도능력   ■■■■■■■■■■■■■■■■■■■■■■ 100%\n부팅 나의 역량 로딩 완료...\n\n안녕하세요! 웹 프론트엔드 개발자를 꿈꾸는 주세현입니다.\n\n열정적이고 창의적인 개발자로서 사용자 경험을 개선하고 멋진 웹 인터페이스를 구현하기 위해 노력합니다.\n\nHTML, CSS, JavaScript, React 등의 기술을 활용하여 다양한 프로젝트를 만들며 빠르게 성장하고 있습니다.\n\n문제 해결 능력과 협업 능력을 갖추고 있으며, 항상 새로운 도전을 받아들이고 적응합니다.\n\n꾸준한 자기 개발과 열정을 통해 웹 개발 분야에서 성공적인 경력을 쌓고자 합니다.\n\n저의 PORTFOLIO98 페이지에 오신것을 환영합니다.`
  /* $: > Scanning for 문제해결능력   ■■■■■■■■■■■ 100% */
  /*   $: > Booting systems...
  $: > Total memory found: 256kb
  $: > Scanning for bootable media    ■■■■■■■■■■■ 100%
  $: > No media found. Booting from network address 3E:40:9C:75
  $: > Loading BIOS 2.3               ■■■■■■■■■■■ 100%
  $: > Reticulating splines           ■■■■■■■■■■■ 100%
  $: > Booting console                ■■■■■■■■■■■ 100%
  $:
  $: > Welcome to the retro console version 0.1a
  $:
  $: > Hello Designer023. How can I help you today?
  $: I can has matrix?
  $: > buffering matrix... 20%
  $: > buffering matrix... 66%
  $: > buffering matrix... 100%
  $: > So, would you like a red or blue pill? 
  열람하시겠습니까? (Y/N)  
  */
  
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);
  
  useEffect(() => {
    let a=true;
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
    }, 10);
    if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
        clearInterval(interval);// 문자열 체크를 통해 setInterval을 해제합니다
        a=false;
        console.log(a);
        if(a===false){
          /* 타이핑이 다 되면 useRef를 실행해서 input에 focus가 되어야함.. 해결 못함 */
        }
    }
    console.log(useEffect);
    return () => {clearInterval(interval)}; // 언마운트시 setInterval을 해제합니다
  })
  
  return (
  	<StyledBiosTyping className="text">
        <div>
            <span className='typing'>{ Text }</span>
        </div>
    </StyledBiosTyping>
  )
}

export default BiosTyping;