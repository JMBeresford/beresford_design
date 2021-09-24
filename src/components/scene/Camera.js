import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { gsap, Power1, Power3 } from 'gsap';
import useStore from './store';
import { useMediaQuery } from 'react-responsive';
import { Euler, Quaternion, Vector3 } from 'three';

const Camera = (props) => {
  const ref = useRef();

  const view = useStore((state) => state.view);
  const moving = useStore((state) => state.moving);
  const setMoving = useStore((state) => state.setMoving);
  const setView = useStore((state) => state.setView);

  const isMobile = useMediaQuery({ maxWidth: '1200px' });
  var rotationRef = useRef(useStore.getState().rotation);
  var eulerRef = useRef(new Euler(0, 0, 0, 'YXZ'));

  const views = useMemo(
    () =>
      isMobile
        ? {
            landing: {
              position: [0.34019, 1.12988, -0.72],
              rotation: [0, 0, 0],
            },
            mainMobile: {
              position: [-1.1215, 1.4, 1.5],
              rotation: [-0.23608012159022193, 0, 0],
            },
            main: {
              position: [0, 1.4, 1.5],
              rotation: [-0.23608012159022193, 0, 0],
            },
            case1: {
              position: [-1.26527, 1.5, -0.25],
              rotation: [-0.287, 0.13, 0],
            },
            case2: {
              position: [-0.9778, 1.1, -0.25],
              rotation: [-0.287, -0.13, 0],
            },
            case3: {
              position: [-1.26527, 0.78, -0.25],
              rotation: [-0.287, 0.13, 0],
            },
            socials: {
              position: [-1.03, 1.87, 0],
              rotation: [
                -0.3302973548292537, 0.0943139513271806, 0.03227708057782552,
              ],
            },
          }
        : {
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
          },
    [isMobile]
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
        ease: Power1.easeInOut,
        onComplete: () => {
          setMoving(false);
          if (isMobile && newView === 'main') setView('mainMobile');
        },
      });

      gsap.to(ref.current.position, {
        duration: 1.5,
        x: position[0],
        y: position[1],
        z: position[2],
        ease: Power1.easeInOut,
      });
    },
    [setMoving, views]
  );

  // initial config
  useEffect(() => {
    ref.current.position.set(0.34019, 1.12988, -0.72);
    ref.current.lookAt(0.34019, 1.12988, -0.91913);
    ref.current.rotation.reorder('YXZ');

    useStore.subscribe(
      (rotation) => {
        rotationRef.current = rotation;
      },
      (state) => state.rotation
    );
  }, []);

  // update config on view change
  useEffect(() => {
    changeView(view);
  }, [view]);

  useFrame(({ mouse }) => {
    if (!isMobile && view !== 'landing' && !moving) {
      ref.current.position.x = views[view].position[0] - mouse.x * 0.05;
      ref.current.position.y = views[view].position[1] - mouse.y * 0.05;

      ref.current.rotation.x = views[view].rotation[0] + mouse.y * 0.05;
      ref.current.rotation.y = views[view].rotation[1] - mouse.x * 0.05;
    } else if (isMobile && view !== 'landing' && !moving) {
      eulerRef.current.x = ((rotationRef.current.b * Math.PI) / 180) * 0.25;
      eulerRef.current.y = ((rotationRef.current.g * Math.PI) / 180) * 0.25;
      eulerRef.current.z = ((rotationRef.current.a * Math.PI) / 180) * 0.25;

      ref.current.rotation.copy(eulerRef.current);
    }
  });

  return <PerspectiveCamera ref={ref} makeDefault {...props} />;
};

export default Camera;
