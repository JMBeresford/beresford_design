import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stats, OrbitControls, Stars, useDetectGPU } from '@react-three/drei';
import HeroModel from './3d/HeroModel';
import Sky from './3d/Sky';

const HeroScene = () => {
  var pixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  const GPU = useDetectGPU();

  if (GPU.tier < 3) {
    //pixelRatio = 1;
  }

  const camRef = useRef();
  const controls = useRef();

  return (
    <div className='heroScene'>
      <Canvas
        dpr={Math.min(pixelRatio, 2)}
        gl={{ alpha: true }}
        camera={{
          fov: 60,
        }}
        mode='concurrent'
        onCreated={(state) => {
          camRef.current = state.camera;
          state.camera.rotation.reorder('YXZ');
          state.camera.position.set(0, 5, 22.5);
          state.camera.rotation.set(0, 0, 0);

          state.gl.setClearColor('#000000', 0);
        }}
      >
        <Suspense fallback={null}>
          <HeroModel />
          <Sky position={[0, 0, -20]} />
        </Suspense>
        <Stats />
        {/* <OrbitControls camera={camRef.current} ref={controls} /> */}
      </Canvas>
    </div>
  );
};

export default HeroScene;
