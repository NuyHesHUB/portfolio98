import React, {useEffect, useState/* , useMemo */} from 'react';

/* Library */
import styled from 'styled-components';

/* Styles */
/* import '../styles/Typing.css' */

const StyledBiosTyping = styled.span`
    white-space: pre-wrap;
    line-height: 1.4;
    animation: cursor 1s step-end infinite;
    animation-duration: 0.3s; 
    animation-iteration-count: 20;
    @keyframes cursor{
    0%{border-right: 5px solid #fff} 
    50%{border-right: 5px solid #000} 
    100%{border-right: 5px solid #fff} 
}
`

const BiosTyping = () => {
  const txt = `안녕하세요. 프론트엔드 개발자를 꿈꾸는 주세현입니다. \n웹 개발 업무 프로세스에 전반적인 이해력을 습득하였습니다.\n개발하면서 제가 느낀 좋은 IT 서비스는 사용자의 입장에서 쓰기편한 서비스라 생각하고, \n늘 사용자의 관점을 고안하며 개발하고 있습니다.\n현재는 거창한 업무성과보다 사용자의 작은 문제해결에 끝까지 몰입할 수 있는 신입 개발자입니다.\n이런 저의 성장가능성을 믿고 이끌어줄 회사를 찾고 있습니다.\n저의 PORTFOLIO98\n페이지에 오신것을 환영합니다.`
  /* 'Hello World This is my portfolio space. \nBIOS(C)2023 JooSeHyeon OS, Inc\nASUS P4C800 ACPI BIOS Revision 1002\nCPU : Intel(R) Pentium(R) 4 CPU 2.80GHz \nSpeed : 2.82 GHz \nPress DEL to run Setup \nPress <F8> for BBS POPUP \nDDR Frequency 400 Mhz, Dual-Channel, Liner Mode \nChecking NVRAM.. \n \n512MB OK \nNuyhes Portfolio Setup OK......\n안녕하세요\n프론트엔드 개발자 \n주세현 입니다. \n주세현 이력서 Memory Checking ........\n'; */
  
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
  	<StyledBiosTyping className="text">{ Text }</StyledBiosTyping>
  )
}

export default BiosTyping;