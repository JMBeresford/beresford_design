import create from 'zustand';

const store = (set, get) => ({
  view: 'landing',
  setView: (newView) => {
    if (newView === get().view || get().moving) {
      return;
    }

    set(() => ({ moving: true }));
    set(() => ({ view: newView }));
  },
  experienceStarted: false,
  startExperience: () => {
    set(() => ({ experienceStarted: true, view: 'main', moving: true }));
  },
  loaded: false,
  setLoaded: () => {
    set(() => ({ loaded: true }));
  },
  moving: false,
  setMoving: (moving) => {
    set(() => ({ moving: moving }));
  },
  touchCoords: { x: 0, y: 0 },
  setTouchCoords: (x, y) => {
    set(() => ({ touchCoords: { x, y } }));
  },
});

const useStore = create(store);

export default useStore;
