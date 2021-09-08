import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import FakeHero from '../FakeHero';
import LoadingScreen from '../LoadingScreen';

const Scene = (props) => {
  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  const [loaded, setLoaded] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const liftState = (state) => {
    setLoaded(state);
  };

  const handleInteract = () => {
    setInteracted(true);
  };

  return (
    <>
      <LoadingScreen loaded={loaded} />
      <FakeHero handleInteract={handleInteract} interacted={interacted} />
      <Canvas
        id='heroCanvas'
        dpr={Math.min(pixelRatio, 2)}
        gl={{ alpha: false }}
        camera={{ position: [0.34019, 1.12988, -0.72] }}
        onCreated={(state) => {
          state.camera.lookAt(0.34019, 1.12988, -0.91913);
        }}
      >
        <Suspense fallback={null}>
          <Model
            data={props.query}
            isLoaded={liftState}
            interacted={interacted}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;
