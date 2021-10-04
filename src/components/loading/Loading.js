import React, { useEffect, useRef } from 'react';
import logo from '../../img/logo.svg';
import useStore from '../../store';

const Loading = () => {
  const ref = useRef();

  useEffect(() => {
    useStore.subscribe(
      (isLoaded) => {
        if (isLoaded) {
          ref.current.classList.add('out');
        }
      },
      (state) => state.isLoaded
    );
  }, []);

  return (
    <div ref={ref} id='loading' className='out'>
      <div className='imgWrapper'>
        <img className='logo' src={logo} alt='Beresford Design Logo' />
      </div>

      <div className='load'>
        <h2>LOADING</h2>
        <div className='bar' />
      </div>
    </div>
  );
};

export default Loading;
