import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stats, OrbitControls, Stars } from '@react-three/drei';
import HeroModel from './HeroModel';

const HeroScene = () => {
  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  const camRef = useRef();
  const controls = useRef();

  const Sky = () => {
    const stars = useRef();

    useEffect(() => {
      stars.current.rotation.reorder('YXZ');
    }, []);

    useFrame(({ clock }) => {
      stars.current.rotation.y =
        Math.sin(clock.elapsedTime * 0.002) * Math.PI * 2;
      stars.current.rotation.x =
        Math.sin(clock.elapsedTime * 0.0013) * Math.PI * -2;
    });

    return <Stars saturation={50} factor={4} ref={stars} fade={false} />;
  };

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
          <Sky />
        </Suspense>
        <Stats />
        {/* <OrbitControls camera={camRef.current} ref={controls} /> */}
      </Canvas>
    </div>
  );
};

export default HeroScene;
