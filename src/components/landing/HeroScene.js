import React, { Suspense, useEffect, useRef } from 'react';
import logo from '../../img/logo_transparent.png';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Stats, OrbitControls } from '@react-three/drei';
import { clamp } from 'three/src/math/MathUtils';
import useStore from '../../store';
import HeroModel from './HeroModel';

const HeroScene = () => {
  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  const camRef = useRef();
  const controls = useRef();

  return (
    <div className='heroScene'>
      <Canvas
        dpr={Math.min(pixelRatio, 2)}
        gl={{ alpha: true }}
        mode='concurrent'
        onCreated={({ camera }) => (camRef.current = camera)}
      >
        <Suspense fallback={null}>
          <HeroModel />
        </Suspense>
        <Stats />
        <OrbitControls camera={camRef.current} ref={controls} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
