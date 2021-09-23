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
    const setView = get().setView;

    set(() => ({ experienceStarted: true }));
    setView('main');
  },
  loaded: false,
  setLoaded: () => {
    set(() => ({ loaded: true }));
  },
  moving: false,
  setMoving: (moving) => {
    set(() => ({ moving: moving }));
  },
  gamma: 0,
  setGamma: (gamma) => {
    set(() => ({ gamma: gamma }));
  },
});

const useStore = create(store);

export default useStore;
