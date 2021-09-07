import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Beresford_design';

const Hero = (props) => {
  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  return (
    <Canvas id='heroCanvas' dpr={Math.min(pixelRatio, 2)} gl={{ alpha: false }}>
      <Suspense fallback={null}>
        <Model data={props.query} />
      </Suspense>
    </Canvas>
  );
};

export default Hero;
