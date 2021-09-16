import create from 'zustand';
import { devtools } from 'zustand/middleware';

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
  hovering: null,
  setHovering: (hovering) => {
    set(() => ({ hovering: hovering }));
  },
});

const useStore = create(devtools(store));

export default useStore;
