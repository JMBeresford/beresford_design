import { gsap, Power2 } from 'gsap';
import { Euler, Vector3 } from 'three';

const createCameraSlice = (set, get) => ({
  camera: undefined,
  cameraMoving: false,
  setCamera: (camera) => {
    set({ camera });
  },
  setCamPosition: (position, delay = 0, duration = 1.5) => {
    let camera = get().camera;

    let temp = camera.position.clone();

    gsap.to(temp, {
      onStart: () => {
        set({ cameraMoving: true });
      },

      x: position.x,
      y: position.y,
      z: position.z,

      duration: duration,
      delay: delay,
      ease: Power2.easeInOut,

      onUpdate: () => {
        camera.position.copy(temp);
      },
      onComplete: () => {
        set({ cameraMoving: false });
      },
    });
  },
  setCamRotation: (rotation, delay = 0, duration = 1.5) => {
    let { camera } = get();

    let temp = camera.rotation;

    gsap.to(temp, {
      onStart: () => {
        set({ cameraMoving: true });
      },

      x: rotation.x,
      y: rotation.y,
      z: rotation.z,

      duration: duration,
      delay: delay,
      ease: Power2.easeInOut,

      onUpdate: () => {
        camera.rotation.copy(temp);
        camera.rotation.reorder('YXZ');
      },
      onComplete: () => {
        set({ cameraMoving: false });
      },
    });
  },

  views: {
    landing: {
      main: {
        position: new Vector3(0, 5, 22.5),
        rotation: new Euler(0, 0, 0),
      },
      nextScene: {
        position: new Vector3(0, 5, 22.5),
        rotation: new Euler(-Math.PI * 0.5, 0, 0),
      },
    },
    studio: {},
  },
});

export default createCameraSlice;
