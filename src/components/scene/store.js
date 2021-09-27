import create from 'zustand';

const store = (set, get) => ({
  prevView: 'main',
  setPrevView: (view) => {
    set({ prevView: view });
  },
  view: 'landing',
  setView: (newView) => {
    if (newView === get().view || get().moving) {
      return;
    }

    switch (newView) {
      case 'caseStudy1': {
        set({ prevView: 'case1' });
        break;
      }
      case 'caseStudy2': {
        set({ prevView: 'case2' });
        break;
      }
      case 'caseStudy1': {
        set({ prevView: 'case3' });
        break;
      }
      default: {
        set({ prevView: 'main' });
      }
    }

    set(() => ({ moving: true }));
    set(() => ({ view: newView }));
  },
  goBack: () => {
    get().setView(get().prevView);
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
