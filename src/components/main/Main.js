import React, { useEffect } from 'react';
import HeroScene from './HeroScene';
import Header from './Header';
import useStore from '../../store';

const Main = () => {
  return (
    <div id='landing'>
      <Header />
      <HeroScene />
    </div>
  );
};

export default Main;
