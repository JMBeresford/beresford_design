import create from 'zustand';
import createCameraSlice from './camera';
import { Clock } from 'three';

const useStore = create((set, get) => ({
  isLoaded: false,
  isMobile: false,
  time: new Clock(false),

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
}));

export default useStore;
