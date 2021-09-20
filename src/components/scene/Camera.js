import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { gsap, Power3 } from 'gsap';
import useStore from './store';

const Camera = (props) => {
  const ref = useRef();

  const view = useStore((state) => state.view);
  const moving = useStore((state) => state.moving);
  const setMoving = useStore((state) => state.setMoving);

  const views = useMemo(
    () => ({
      landing: {
        position: [0.34019, 1.12988, -0.72],
        rotation: [0, 0, 0],
      },
      main: {
        position: [0, 1.4, 1.5],
        rotation: [-0.23608012159022193, 0, 0],
      },
      case1: {
        position: [-1.1, 1.58, -0.22],
        rotation: [-0.257, 0, 0],
      },
      case2: {
        position: [-1.1, 1.22, -0.22],
        rotation: [-0.257, 0, 0],
      },
      case3: {
        position: [-1.1, 0.86, -0.22],
        rotation: [-0.257, 0, 0],
      },
      socials: {
        position: [-1.03, 1.87, -0.22],
        rotation: [
          -0.3302973548292537, 0.0943139513271806, 0.03227708057782552,
        ],
      },
    }),
    []
  );

  const changeView = useCallback(
    (newView) => {
      let position = views[newView].position;
      let rotation = views[newView].rotation;

      gsap.to(ref.current.rotation, {
        duration: 1.5,
        x: rotation[0],
        y: rotation[1],
        z: rotation[2],
        ease: Power3.easeInOut,
      });

      gsap.to(ref.current.position, {
        duration: 1.5,
        x: position[0],
        y: position[1],
        z: position[2],
        ease: Power3.easeInOut,
        onComplete: () => {
          setMoving(false);
        },
      });
    },
    [setMoving, views]
  );

  // initial config
  useEffect(() => {
    ref.current.position.set(0.34019, 1.12988, -0.72);
    ref.current.lookAt(0.34019, 1.12988, -0.91913);
  }, []);

  // update config on view change
  useEffect(() => {
    changeView(view);
  }, [view]);

  useFrame(({ mouse }) => {
    if (view !== 'landing' && !moving) {
      ref.current.position.x = views[view].position[0] - mouse.x * 0.05;
      ref.current.position.y = views[view].position[1] - mouse.y * 0.05;

      ref.current.rotation.x = views[view].rotation[0] + mouse.y * 0.05;
      ref.current.rotation.y = views[view].rotation[1] - mouse.x * 0.05;
    }
  });

  return <PerspectiveCamera ref={ref} makeDefault {...props} />;
};

export default Camera;
