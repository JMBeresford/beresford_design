import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { gsap, Power2 } from 'gsap';
import useStore from './store';
import { useMediaQuery } from 'react-responsive';

const Camera = (props) => {
  const ref = useRef();

  const view = useStore((state) => state.view);
  const moving = useStore((state) => state.moving);
  const setMoving = useStore((state) => state.setMoving);
  const setView = useStore((state) => state.setView);

  const isMobile = useMediaQuery({ maxWidth: '1200px' });

  const views = useMemo(
    () =>
      isMobile
        ? {
            landing: {
              position: [0.01893, 0.8, -0.80597],
              rotation: [-Math.PI / 2, 0, 0.08],
            },
            main: {
              position: [-1.1215, 1.4, 1.5],
              rotation: [-0.23608012159022193, 0, 0],
            },
            beforeMain: {
              position: [0.01893, 1.4, -0.80597],
              rotation: [-Math.PI / 2, 0, 0.08],
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
              position: [-1.03, 1.87, -0.22],
              rotation: [
                -0.3302973548292537, 0.0943139513271806, 0.03227708057782552,
              ],
            },
            caseStudy1: {
              position: [-1.33327, 1.38233, -0.70324],
              rotation: [-0.3, 0.1, 0],
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
            caseStudy1: {
              position: [-1.33327, 1.38233, -0.70324],
              rotation: [-0.3, 0.1, 0],
            },
          },
    [isMobile]
  );

  const changeView = useCallback(
    (newView) => {
      let position = views[newView].position;
      let rotation = views[newView].rotation;

      const dur = newView === 'beforeMain' ? 3 : 1.5;

      gsap.to(ref.current.rotation, {
        duration: dur,
        x: rotation[0],
        y: rotation[1],
        z: rotation[2],
        ease: Power2.easeInOut,
        onComplete: () => {
          setMoving(false);
          if (newView === 'beforeMain') {
            setView('main');
          }
        },
      });

      gsap.to(ref.current.position, {
        duration: dur,
        x: position[0],
        y: position[1],
        z: position[2],
        ease: Power2.easeInOut,
      });
    },
    [views]
  );

  // initial config
  useEffect(() => {
    ref.current.position.set([...views['landing'].position]);
    ref.current.rotation.set([...views['landing'].rotation]);
    ref.current.rotation.reorder('YXZ');
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
    }
  });

  return <PerspectiveCamera ref={ref} makeDefault {...props} />;
};

export default Camera;
