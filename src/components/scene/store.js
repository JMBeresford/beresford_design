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
  startExperienceMobile: () => {
    set({ experienceStarted: true, view: 'beforeMain', moving: true });
  },
  loaded: false,
  setLoaded: () => {
    set(() => ({ loaded: true }));
  },
  moving: false,
  setMoving: (moving) => {
    set(() => ({ moving: moving }));
  },
});

const useStore = create(store);

export default useStore;
