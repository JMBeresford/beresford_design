import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { gsap, Power1, Power3 } from 'gsap';
import useStore from './store';
import { useMediaQuery } from 'react-responsive';

const Camera = (props) => {
  const ref = useRef();

  const view = useStore((state) => state.view);
  const moving = useStore((state) => state.moving);
  const setMoving = useStore((state) => state.setMoving);

  const isMobile = useMediaQuery({ maxWidth: '1200px' });
  var gamma = useRef(0);

  const views = useMemo(
    () =>
      isMobile
        ? {
            landing: {
              position: [0.34019, 1.12988, -0.72],
              rotation: [0, 0, 0],
            },
            main: {
              position: [-1.1215, 1.4, 1.5],
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

  const arrEquality = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const handleRotation = (e) => {
    console.log(e);
    gamma.current = e.gamma;
  };

  const changeView = useCallback(
    (newView) => {
      let position = views[newView].position;
      let rotation = views[newView].rotation;

      let dur = 1.5;
      let ease = Power3.easeInOut;

      if (arrEquality(ref.current.position.toArray(), views.landing.position)) {
        dur = 3;
        ease = Power1.easeOut;
      }

      gsap.to(ref.current.rotation, {
        duration: dur,
        x: rotation[0],
        y: rotation[1],
        z: rotation[2],
        ease: ease,
        onComplete: () => {
          setMoving(false);
        },
      });

      gsap.to(ref.current.position, {
        duration: dur,
        x: position[0],
        y: position[1],
        z: position[2],
        ease: ease,
      });
    },
    [setMoving, views]
  );

  // initial config
  useEffect(() => {
    ref.current.position.set(0.34019, 1.12988, -0.72);
    ref.current.lookAt(0.34019, 1.12988, -0.91913);
    window.addEventListener('deviceorientation', handleRotation);
    console.log(window.DeviceOrientationEvent);
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
      ref.current.position.x = views[view].position[0] - gamma.current / 540;

      ref.current.rotation.y = views[view].rotation[1] - gamma.current / 540;
    }
  });

  return <PerspectiveCamera ref={ref} makeDefault {...props} />;
};

export default Camera;
