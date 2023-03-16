import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import ModalFrame from './WindowsFrame/ModalFrame';
import {blurAbout, focusAbout, exitAbout} from '../../store/actions/actions'

import aboutImage from '../../assets/dockbar-icon/about.png'
import logo from '../../assets/about-img/about_logo.png'

function About({ about, onAboutFocus, onAboutBlur, onAboutExit }) {

    useEffect(() => {
      window.addEventListener('click', aboutBlur);
  
      return () => window.removeEventListener('click', aboutBlur);
      // eslint-disable-next-line
    }, []);
  
    function aboutBlur(event) {
      if (!document.querySelector('#About').contains(event.target) &&
        !document.querySelector('#about-button').contains(event.target)) {
            onAboutBlur();
      } else { onAboutFocus(); }
    }

    const displayContent =
      about.show ?
        <ModalFrame
          id="About"
          x="120"
          y="90"
          width="510"
          /* height="348" */
          img={aboutImage}
          title="about"
          blurred={about.blurred}
          showMenu={true}
          onExit={onAboutExit}
          >
          <div className='About' style={{display:'flex', justifyContent:'left'}}>
            <img src={logo} alt='logo' style={{width:'25%', height:'42%',marginLeft:'20px', marginTop:'20px'}}/>
            <span style={{ marginLeft:'30px', marginTop:'40px'}}>
                Microsoft(R)Windows<br/>
                Windows98<br/>
                Copyright(C)1981-1997 Microsoft Corp.<br/>
                <br/>
                <br/>
                This product is licensed to:<br/>
                Jim Midnite<br/>
                Setec Astronomy<br/>
                <br/>
                <hr/>
                <br/>
                {/* <span onClick={()=>window.open('http://www.naver.com')}>http://www.naver.com</span> */}
                <Link style={{display:'block'}} to='http://www.naver.com' target="_blank">http://www.naver.com</Link>
                <br/>
                <hr/>
                Physical memory available to Windows: 196.052 KB<br/>
                System resources: 90% Free<br/>
            </span>
            
          </div>
        </ModalFrame> : null;
  
    return displayContent;
  }
  
  const mapStateToProps = (state) => {
    return {
      about: state.about
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onAboutBlur: () => dispatch(blurAbout()),
      onAboutFocus: () => dispatch(focusAbout()),
      onAboutExit: () => dispatch(exitAbout()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(About);