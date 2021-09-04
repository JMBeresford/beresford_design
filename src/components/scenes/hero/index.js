import React, { useLayoutEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Color, sRGBEncoding } from 'three';
import { Box } from '@react-three/drei';
import Model from './Beresford_design';

const Hero = () => {
  return (
    <Canvas
      id='heroCanvas'
      dpr={Math.min(window.devicePixelRatio, 2)}
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
