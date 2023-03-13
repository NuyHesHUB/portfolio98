import React/* , {useCallback, useEffect, useState} */ from 'react';
import styled from 'styled-components';

import { BiosInfoEntry } from './BiosInfoEntry';
import { BiosInfoSection, BiosInfoSectionStyled} from './BiosInfoSection';

import BiosLogo from './BiosLogo';

/* import { useBiosLoading } from '../../hooks/useBiosLoading'; */
import { useBrowserInfo } from '../../hooks/useBrowserInfo';
import { useOnKeyDownOnce } from '../../hooks/useOnkeyDownOnce';

/* import { getEnvConfig } from '../utiles/getEnvConfig'; */

import energylogo from '../../assets/bios-img/epa-logo.png'
import blurlogo from '../../assets/bios-img/a-logo.png'



const StyledBios=styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 200px;
    display: flex;
    background-color: #000;
`;

const BiosInfoSections=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: darkgray;
    >${BiosInfoSectionStyled}{
        margin-bottom: 26px;
    }
    >div:last-child{
        margin-top: auto;
        strong{
            color: white;
            text-transform: uppercase;
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


const LOAD_WITH_SOUND_KEY = 'Enter'
const LOAD_WITHOUT_SOUND_KEY = 'm'


const Bios = () => {
    /* const { projectUrl } = getEnvConfig(); */
    const browserInfo = useBrowserInfo();
    /* const [browserInfoLoadedValues, setBrowserInfoLoadedValues] = useState(); */
    
    /* useEffect(() => {
        
        (async () => {
            const storageEstimate = await browserInfo.storageEstimate;
            setBrowserInfoLoadedValues({ storageEstimate });
        })();
    }, [browserInfo.storageEstimate]); */

/*     const loadBase = useCallback(() => {
        setIsBiosLoaded(true);
        setIsSystemLoading(true);
    }, [setIsBiosLoaded, setIsSystemLoading]); */


    useOnKeyDownOnce(LOAD_WITH_SOUND_KEY)
    return(
        <StyledBios>
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
                    <BiosInfoEntry label="Platform" value={browserInfo.platform}/>
                    <BiosInfoEntry label="Agent" value={browserInfo.userAgent}/>
                    <BiosInfoEntry label="Vendor" value={browserInfo.vendor}/>
                </BiosInfoSection>
                <BiosInfoSection>
                    <BiosInfoEntry label="Cores" value={browserInfo.cores} />
                    <BiosInfoEntry label="RAM" value={browserInfo.minimalRam} />
                </BiosInfoSection>
                <BiosInfoSection>
                    <BiosInfoEntry label="Current Date Time" value={new Date().toLocaleString()}/>
                    <BiosInfoEntry label="Timezone" value={Intl.DateTimeFormat().resolvedOptions().timeZone}/>
                </BiosInfoSection>
                <div style={{marginBottom:'20px'}}>
                    <p>
                        Press <strong>{LOAD_WITH_SOUND_KEY}</strong> to startup WIN98.
                    </p>
                    <p>
                        Press <strong>{LOAD_WITHOUT_SOUND_KEY}</strong> to do it without
            sound.
                    </p>
                </div>
            </BiosInfoSections>
            {/* <BiosLogo/> */}
            <Energylogo src={energylogo} alt="energy_logo" width={266} height={168} style={{marginTop:'20px'}}/>
        </StyledBios>
    )
    
};

export default Bios;