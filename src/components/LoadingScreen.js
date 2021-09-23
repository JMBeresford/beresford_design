import React from 'react';
import useStore from './scene/store';
import logo from '../images/logo.svg';

const LoadingScreen = () => {
  const loaded = useStore((state) => state.loaded);

  return (
    <div className={`${loaded ? 'loadingScreen disappear' : 'loadingScreen'}`}>
      <div className='imgWrapper'>
        <img className='logo' src={logo} alt='Beresford Design Logo' />
      </div>

      <h2>LOADING</h2>
    </div>
  );
};

export default LoadingScreen;
