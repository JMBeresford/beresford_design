import React, { useEffect, useCallback, useRef } from 'react';
import useStore from './scene/store';
import { useMediaQuery } from 'react-responsive';

const Tooltip = () => {
  const isMobile = useMediaQuery({ maxWidth: '1200px' });
  const view = useStore((state) => state.view);
  const moving = useStore((state) => state.moving);
  const experienceStarted = useStore((state) => state.experienceStarted);

  const visible = () => {
    return (
      moving ||
      !experienceStarted ||
      view === 'main' ||
      view === 'landing' ||
      view === 'beforeMain'
    );
  };

  var tip = useRef('');

  const getTip = useCallback(() => {
    const action = isMobile ? 'Tap' : 'Click';
    switch (view) {
      case 'socials': {
        return `${action} on a cube to view our social media or email us`;
      }
      case 'case1': {
        return `${action} on the tablet to see more`;
      }
      case 'case2': {
        return `This project isn't ready to be shown, yet`;
      }
      case 'case3': {
        return `This project isn't ready to be shown, yet`;
      }
      default: {
        return ``;
      }
    }
  }, [view, isMobile]);

  useEffect(() => {
    setTimeout(() => (tip.current = getTip()), 700);
  }, [getTip]);

  return (
    <div className={`globalTooltip ${visible() ? 'hide ' : ''}`}>
      <p>{tip.current}</p>
    </div>
  );
};

export default Tooltip;
