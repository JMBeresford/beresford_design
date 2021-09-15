import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import FakeHero from '../FakeHero';
import LoadingScreen from '../LoadingScreen';
import useStore from './store';
import Camera from './Camera';
import Cursor from './Cursor';

const Scene = (props) => {
  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  const setView = useStore((state) => state.setView);
  const experienceStarted = useStore((state) => state.experienceStarted);
  const hovering = useStore((state) => state.hovering);

  return (
    <>
      <LoadingScreen />
      {!experienceStarted && <FakeHero />}
      {experienceStarted && <Cursor />}
      <Canvas
        id='heroCanvas'
        dpr={Math.min(pixelRatio, 2)}
        gl={{ alpha: true }}
        onCreated={(state) => {
          state.gl.setClearColor('#000000');
          state.gl.setClearAlpha('#f1f6f9');
        }}
      >
        <Camera fov={75} near={0.01} far={100} />
        <Suspense fallback={null}>
          <Model
            onClick={() => {
              if (!hovering && experienceStarted) {
                setView('main');
              }
            }}
            onWheel={() => {
              if (!hovering && experienceStarted) {
                setView('main');
              }
            }}
            data={props.query}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;
