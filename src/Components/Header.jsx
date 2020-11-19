import React from 'react';
import '../Styles/Header.css';
import pfp from '../Assets/pfp.png'

function Header() {
  return (
    <div>
    <div className='Header' id='about'>
    <div data-aos='fade-up' data-aos-duration="2000">
        <img src={pfp}  alt="Profile" className='Picture' />
        <div className='header-h2'>
        <h2 className='center-align'>SHUBHRA AGARWAL</h2>
        <p className='center-align'>Started as a tech enthusiast, <br />later developed a keen interest in programming.
        <br /> I have always been interested in learning new technical things <br />
        
        </p>
        <h3 className='center-align'> Currently, I'm a front-end developer, <br />
        Soon to be a full stack dev</h3>
        </div>

    </div>
    
    </div>
    </div>
  );
}

export default Header;