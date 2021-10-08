import React, { useEffect } from 'react';
import HeroScene from './HeroScene';
import Header from './Header';
import useStore from '../../store';

const Landing = () => {
  return (
    <div id='landing'>
      <Header />
      <HeroScene />
      <main id='hero'></main>
    </div>
  );
};

export default Landing;
