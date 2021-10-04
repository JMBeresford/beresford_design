import React from 'react';
import Header from './Header';
import logo from '../../img/logo.svg';

const Landing = () => {
  return (
    <div id='landing'>
      <Header />
      <main>
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
    </div>
  );
};

export default Landing;
