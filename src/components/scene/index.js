import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import FakeHero from '../FakeHero';
import LoadingScreen from '../LoadingScreen';
import useStore from './store';
import Camera from './Camera';
import Cursor from './Cursor';
import screenVid from '../../video/screenVid.mp4';
import { sRGBEncoding } from 'three';

const Scene = (props) => {
  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  const setView = useStore((state) => state.setView);
  const experienceStarted = useStore((state) => state.experienceStarted);
  const hovering = useStore((state) => state.hovering);

  var videoEl = null;

  if (typeof document !== 'undefined') {
    videoEl = document.createElement('video');

    videoEl.src = screenVid;
    videoEl.autoplay = true;
    videoEl.loop = true;
    videoEl.playsInline = true;
    videoEl.muted = true;
    videoEl.play();
  }

  return (
    <>
      <LoadingScreen />
      {!experienceStarted && <FakeHero />}
      {experienceStarted && <Cursor />}
      <Canvas
        id='heroCanvas'
        dpr={Math.min(pixelRatio, 2)}
        gl={{ alpha: true, outputEncoding: sRGBEncoding }}
        onCreated={(state) => {
          state.gl.setClearAlpha('#f1f6f9');
        }}
      >
        <Camera fov={60} near={0.01} far={10} />
        <Suspense fallback={null}>
          <Model
            onClick={() => {
              const el = document.querySelector('.cursor');
              if (!el.classList.contains('hovering') && experienceStarted) {
                setView('main');
              }
            }}
            onWheel={() => {
              const el = document.querySelector('.cursor');
              if (
                !el.classList.contains('hovering') === undefined &&
                experienceStarted
              ) {
                setView('main');
              }
            }}
            data={props.query}
            videoEl={videoEl}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;
