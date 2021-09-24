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
  rotation: { a: 0, b: 0, g: 0 },
  setRotation: (a, b, g) => {
    set(() => ({ rotation: { a: 0, b: b - 90, g } }));
  },
});

const useStore = create(store);

export default useStore;
