import React, { Suspense, useEffect } from 'react';
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
  const view = useStore((state) => state.view);

  useEffect(() => {
    const el = document.querySelector('.tooltipContent');

    if (el) {
      if (view !== 'socials') {
        switch (hovering) {
          case 'case1': {
            el.textContent = 'Case Study: Beresford Design';
            break;
          }
          case 'case2': {
            el.textContent = 'Case Study: TBA';
            break;
          }
          case 'case3': {
            el.textContent = 'Case Study: TBA';
            break;
          }
          case 'email': {
            el.innerHTML = 'Social Media';
            break;
          }
          case 'instagram': {
            el.textContent = 'Social Media';
            break;
          }
          case 'linkedIn': {
            el.textContent = 'Social Media';
            break;
          }
          case 'github': {
            el.textContent = 'Social Media';
            break;
          }
          default: {
            return;
          }
        }
      } else {
        switch (hovering) {
          case 'case1': {
            el.textContent = 'Case Study: Beresford Design';
            break;
          }
          case 'case2': {
            el.textContent = 'Case Study: TBA';
            break;
          }
          case 'case3': {
            el.textContent = 'Case Study: TBA';
            break;
          }
          case 'email': {
            el.innerHTML = 'Email <u>consult@beresforddesign.net</u>';
            break;
          }
          case 'instagram': {
            el.textContent = 'Check out my Instagram';
            break;
          }
          case 'linkedIn': {
            el.textContent = 'View my Linked In';
            break;
          }
          case 'github': {
            el.textContent = 'Head to my GitHub';
            break;
          }
          default: {
            return;
          }
        }
      }
    }
  }, [hovering]);

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
          state.gl.setClearAlpha('#f1f6f9');
        }}
      >
        <Camera fov={60} near={0.01} far={10} />
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
