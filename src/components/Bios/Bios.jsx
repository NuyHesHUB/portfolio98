import React from 'react';
import { Link } from 'react-router-dom';

/* Library */
import styled from 'styled-components';

/* Styles */
import { Container } from '../../styles/Container';
import { BiosInfoEntry } from './BiosInfoEntry';
import { BiosInfoSection, BiosInfoSectionStyled} from './BiosInfoSection';

/* Component */
import BiosLogo from './BiosLogo';
/* import { useBiosLoading } from '../../hooks/useBiosLoading'; */
/* import { useBrowserInfo } from '../../hooks/useBrowserInfo'; */ /* safari 오류.. */
import { useOnKeyDownOnce } from '../../hooks/useOnkeyDownOnce';
/* import { useFullscreen } from '../../hooks/useFullscreen'; */
/* import { getEnvConfig } from '../utiles/getEnvConfig'; */

/* Image */
import energylogo from '../../assets/bios-img/epa-logo.png'
import blurlogo from '../../assets/bios-img/a-logo.png'
import BiosTyping from './BiosTyping'

const StyledBios=styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 300px;
    display: flex;
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
    >${BiosInfoSectionStyled}{
        margin-bottom: 20px;
    }
    >div:last-child{
        margin-top: auto;
        strong{
            color: white;
            text-transform: uppercase;
            animation: box1 2s ease-in-out 0.4s infinite;
            animation-delay: 6s;
        }
    }
    @keyframes box1 {
                0%,
                100% {
                    color: red;
                }
                50% {
                    color: white;
                }
            }
`;
/* const BiosLink=styled.a`
    color: inherit;
`; */

const Energylogo =styled.img`
    margin-left: auto;
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
                <BiosInfoSection>
                    <tr>
                        <td>
                            <img style={{width:'40px'}} src={blurlogo} alt="blurlogo" />
                        </td>
                        <td>
                        <BiosLogo/>
                        </td>
                    </tr>
                </BiosInfoSection>
                <BiosInfoSection>
                    {/* safari 오류.. */}
                    {/* <BiosInfoEntry label="Platform" value={browserInfo.platform}/>
                    <BiosInfoEntry label="Agent" value={browserInfo.userAgent}/>
                    <BiosInfoEntry label="Vendor" value={browserInfo.vendor}/>
                    <BiosInfoEntry label="Cores" value={browserInfo.cores} />
                    <BiosInfoEntry label="RAM" value={browserInfo.minimalRam} /> */}
                </BiosInfoSection>
                <BiosInfoSection>
                    <BiosInfoEntry label="Current Date Time" value={new Date().toLocaleString()}/>
                    <BiosInfoEntry label="Timezone" value={Intl.DateTimeFormat().resolvedOptions().timeZone}/>
                    <BiosInfoEntry label="Front-End Developer" value="'HELLO WORLD' 주세현 포트폴리오 입니다."/>
                </BiosInfoSection>
                <BiosInfoSection>
                    <BiosInfoEntry label="나의 역량" value="로딩 완료..."/>
                    <BiosInfoEntry label="의사소통능력" value="■■■■■■■■■■■■■■ 100%"/>
                    <BiosInfoEntry label="문제 해결 능력" value="■■■■■■■■■■■■■■ 100%"/>
                    <BiosInfoEntry label="학습능력" value="■■■■■■■■■■■■■■ 100%"/>
                    <BiosInfoEntry label="자기주도 능력, 탐구력" value="■■■■■■■■■■■■■■ 100%"/>
                </BiosInfoSection>
                <BiosInfoSection height={300}>
                    <tr>
                        <td>
                            <BiosTyping />
                        </td>
                    </tr>
                </BiosInfoSection>
                <div style={{marginBottom:'30px'}}>
                <Link style={{color:'#fff'}} to={`/windows`}>윈도우링크</Link>
                    <p>
                        Press <strong>{LOAD_WITH_FULLSCREEN_KEY}</strong> to Full-Screen startup PortFolio 98.
                    </p>
                    <p>
                        Press <strong>{LOAD_WITHOUT_FULLSCREEN_KEY}</strong> to Normal-Screen Startup PortFolio 98.
                    </p>
                </div>
            </BiosInfoSections>
            {/* <BiosLogo/> */}
            
            <Energylogo src={energylogo} alt="energy_logo" width={266} height={168} style={{marginTop:'20px'}}/>
            <Container/>
        </StyledBios>
    )
};

export default Bios;