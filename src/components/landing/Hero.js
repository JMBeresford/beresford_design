import React from 'react';
import logo from '../../img/logo.svg';

const Hero = () => {
  return (
    <main id='hero'>
      <div className='heroText'>
        <h1>
          Stand out from the competition with a bespoke digital masterpiece.
        </h1>
        <div className='buttons'>
          <button className='mainBtn'>Our Work</button>
          <button>Get Yours</button>
        </div>
      </div>
      <img className='logo' src={logo} alt='Beresford Design Logo' />
    </main>
  );
};

export default Hero;
