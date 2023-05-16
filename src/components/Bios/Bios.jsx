import React from 'react';
/* import { Link } from 'react-router-dom'; */

/* Library */
import styled from 'styled-components';

/* Styles */
import { Container } from '../../styles/Container';
import { BiosInfoEntry } from './BiosInfoEntry';
import { BiosInfoSection/* , BiosInfoSectionStyled */} from './BiosInfoSection';

/* Component */
import BiosLogo from './BiosLogo';
import BiosContentSection from './BiosContentSection';
import BiosTyping from './BiosTyping'
/* import { useBiosLoading } from '../../hooks/useBiosLoading'; */
/* import { useBrowserInfo } from '../../hooks/useBrowserInfo'; */ /* safari 오류.. */
import { useOnKeyDownOnce } from '../../hooks/useOnkeyDownOnce';
/* import { useFullscreen } from '../../hooks/useFullscreen'; */
/* import { getEnvConfig } from '../utiles/getEnvConfig'; */

/* Image */
import energylogo from '../../assets/bios-img/epa-logo.png'
import blurlogo from '../../assets/bios-img/a-logo.png'

const StyledBios=styled.div`
    font-family: 'retro';
    font-size: 20px;
    width: 100vw;
    height: 100vh;
    padding: 0 0 0 50px;
    /* padding: 0 400px; */
    position: relative;
    background-color: #000;
    animation: 700ms linear 100ms normal forwards 1 running on;
    animation-iteration-count : 1;
    @keyframes on {
    0% {
      transform: scale(1, 1) translate3d(0, 0, 0);
      filter: brightness(4);
      opacity: 1;
    }
    5% {
      transform: scale(0.8, 0.8) translate3d(0, 100%, 0);
    }
    10% {
      transform: scale(0.8, 0.8) translate3d(0, -100%, 0);
      opacity: 1;
    }
    35% {
      transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
      filter: brightness(4);
      opacity: 0;
    }
    60% {
      transform: scale(1.1, 1.1) translate3d(0, 0, 0);
      filter: contrast(0) brightness(0);
      opacity: 0;
    }
    100% {
      transform: scale(1, 1) translate3d(0, 0, 0);
      filter: contrast(1) brightness(1.2) saturate(1.3);
      opacity: 1;
    }
  }
`;

const BiosInfoSections=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: darkgray;
    >div:last-child{
        margin-top: auto;
        strong{
            color: white;
            text-transform: uppercase;
            animation: box1 2s ease-in-out 0.4s infinite;
            animation-delay: 10s;
        }
    }
    .title-wrap{
        width:65%;
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
    }
    @media screen and (max-width:1200px){
        .none{display: none;}
    }
    @media screen and (max-width:1080px){
        font-size: 14px;
        .title-wrap{width: 50%}
    }
    @media screen and (max-width:660px){
        .title-wrap{display: none;}
        .none2{display: none;}
    }

    @keyframes box1 {0%,100% {color: white} 50% {color: red}}
`

const Energylogo =styled.img`
    margin-left: auto;
`
const LinkFrame=styled.div`
    position: fixed;
    bottom: 2rem;
`

/* const FALLBACK_LABEL = 'Unknown'; */
/* const getStorageUsage = ({ usage, quota }) => {
    if (usage && quota) {
        const percentUsage = ((usage / quota) * 100).toFixed(4);
        return `${usage}B (${percentUsage}%)`;
    }
    else if (usage) {
        return `${usage}B`;
    }
    else {
        return FALLBACK_LABEL;
    }
}; */

/* const LOAD_WITH_SOUND_KEY = 'Enter' */
/* const LOAD_WITH_SOUND_KEY = 'F11'
const LOAD_WITHOUT_SOUND_KEY = 'm' */

/* const LOAD_WITH_FULLSCREEN_KEY = 'Enter' */
const LOAD_WITH_FULLSCREEN_KEY = 'F11'
const LOAD_WITHOUT_FULLSCREEN_KEY = 'Enter'

const Bios = () => {
    /* const { projectUrl } = getEnvConfig(); */
    /* const browserInfo = useBrowserInfo(); */ /* safari 오류.. */
    /* const [browserInfoLoadedValues, setBrowserInfoLoadedValues] = useState(); */
    /* const Fullscreen = useFullscreen();
    const { element, triggerFull, exitFull } = Fullscreen; */

    /* const onKeyPressed=(e)=>{
        e.preventDefault();
        console.log(e.key);
      }; */

    /* function onKeyPressed(e, key, onKeyDown) {
                e.preventDefault();
                console.log(e.key);
                triggerFull();
    } */
    
    /* useEffect(() => {
        (async () => {
            const storageEstimate = await browserInfo.storageEstimate;
            setBrowserInfoLoadedValues({ storageEstimate });
        })();
    }, [browserInfo.storageEstimate]); */

    /* const loadBase = useCallback(() => {
        setIsBiosLoaded(true);
        setIsSystemLoading(true);
    }, [setIsBiosLoaded, setIsSystemLoading]); */

    useOnKeyDownOnce(LOAD_WITH_FULLSCREEN_KEY)
    useOnKeyDownOnce(LOAD_WITHOUT_FULLSCREEN_KEY)
    
    return(
        <StyledBios /* ref={element} onKeyDown={onKeyPressed} tabIndex={0} */>
            <BiosInfoSections>
                <div>
                <BiosInfoSection>
                    <tr className='title-wrap'>
                        <td style={{marginTop:'10px'}}>
                            <div>
                                <img style={{width:'50px'}} src={blurlogo} alt="blurlogo" />
                            </div>
                        </td>
                        <td className='title'>
                            <BiosLogo/>
                        </td>
                        <td className='none' style={{position:'absolute', right:'100px'}}>
                            {/* <Energylogo src={energylogo} alt="energy_logo" width={266} height={168} style={{marginTop:'10px'}}/> */}
                            <Energylogo src={energylogo} alt="energy_logo" width={300} height={189} style={{marginTop:'0px'}}/>
                        </td>
                    </tr>
                </BiosInfoSection>
                </div>
                {/* safari 오류.. */}
                {/* {<BiosInfoSection>
                    <BiosInfoEntry label="Platform" value={browserInfo.platform}/>
                    <BiosInfoEntry label="Agent" value={browserInfo.userAgent}/>
                    <BiosInfoEntry label="Vendor" value={browserInfo.vendor}/>
                    <BiosInfoEntry label="Cores" value={browserInfo.cores} />
                    <BiosInfoEntry label="RAM" value={browserInfo.minimalRam} />
                </BiosInfoSection>} */}
                <div>
                    <BiosInfoSection>
                        <BiosInfoEntry label="Current Date Time" value={new Date().toLocaleString()}/>
                        <BiosInfoEntry label="Timezone" value={Intl.DateTimeFormat().resolvedOptions().timeZone}/>
                        <BiosInfoEntry label="Project Title" value="PORTFOLIO 98"/>
                        <BiosInfoEntry label="Project Content" value="안녕하세요 PORTFOLIO 98 에 오신것을 환영합니다."/>
                    </BiosInfoSection>
                    {/* <BiosInfoSection>
                        <BiosInfoEntry label="나의 역량" value="로딩 완료..."/>
                        <BiosInfoEntry label="의사소통능력" value="■■■■■■■■■■■■■■ 100%"/>
                        <BiosInfoEntry label="문제 해결 능력" value="■■■■■■■■■■■■■■ 100%"/>
                        <BiosInfoEntry label="학습능력" value="■■■■■■■■■■■■■■ 100%"/>
                        <BiosInfoEntry label="자기주도 능력, 탐구력" value="■■■■■■■■■■■■■■ 100%"/>
                    </BiosInfoSection> */}
                    <div>
                        {/* <br/> */}
                        <BiosContentSection>
                            <tr>
                                <td style={{height:'460px'}}>
                                    <BiosTyping />
                                </td>
                            </tr>
                        </BiosContentSection>
                    </div>
                </div>
                    <br/>
                    <br/>
                    <LinkFrame>
                        {/* <Link style={{color:'#fff'}} to={`/windows`}>윈도우링크</Link> */}
                        <p>Press <strong>{LOAD_WITH_FULLSCREEN_KEY}</strong> to Full-Screen startup PortFolio 98.</p>
                        <p>Press <strong>{LOAD_WITHOUT_FULLSCREEN_KEY}</strong> to Normal-Screen Startup PortFolio 98.</p>
                    </LinkFrame>
            </BiosInfoSections>
            {/* <BiosLogo/> */}
            {/* <Energylogo src={energylogo} alt="energy_logo" width={266} height={168} style={{marginTop:'20px'}}/> */}
            <Container/>
        </StyledBios>
    )
};

export default Bios;