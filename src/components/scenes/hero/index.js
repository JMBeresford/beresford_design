import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Beresford_design';

const Hero = () => {
  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  return (
    <Canvas
      id='heroCanvas'
      dpr={Math.min(pixelRatio, 2)}
      camera={{ position: [7.815515, 8.291183, 10.41677] }}
      gl={{ alpha: false, antialias: true }}
      onCreated={({ gl }) => gl.setClearAlpha(0xf1f6f9)}
    >
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Hero;
