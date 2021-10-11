import React, { Suspense, useEffect } from 'react';
import HeroScene from './HeroScene';
import Header from './Header';
import useStore from '../../store';

const Main = () => {
  return (
    <div id='landing'>
      <Header />
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </div>
  );
};

export default Main;
