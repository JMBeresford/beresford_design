import create from 'zustand';
import createCameraSlice from './camera';
import { Clock, Vector2 } from 'three';
import { Pane } from 'tweakpane';

const useStore = create((set, get) => ({
  isLoaded: false,
  isMobile: false,
  time: new Clock(false),
  globalMouse: new Vector2(0, 0),

  // store slices
  camera: {
    ...createCameraSlice(set, get),
  },

  init: (camera) => {
    set({ camera });
    const { time } = get();
    time.start();
  },
  loaded: () => {
    set({ loaded: true });
  },
  debug: {
    pane: process.env.GATSBY_PRODUCTION ? null : new Pane(),
  },
}));

export default useStore;
