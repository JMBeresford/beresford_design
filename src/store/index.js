import create from 'zustand';
import createCameraSlice from './camera';
import { Clock, Vector2 } from 'three';

const useStore = create((set, get) => ({
  isLoaded: false,
  isMobile: false,
  time: new Clock(false),

  // store slices
  ...createCameraSlice(set, get),

  init: (camera) => {
    set({ camera });
    let { time } = get();
    time.start();
  },
  loaded: () => {
    set({ loaded: true });
  },
  debug: {
    pane: undefined,
  },
}));

export default useStore;
