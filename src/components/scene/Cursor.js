import React from 'react';
import useStore from './store';

const Cursor = () => {
  const hovering = useStore((state) => state.hovering);
  const view = useStore((state) => state.view);

  return (
    <div className='cursorWrapper'>
      <div
        className={
          'cursor' +
          (hovering ? ' hovering' : ' ') +
          (hovering === 'case1' ? ' case1' : '') +
          (hovering === 'case2' ? ' case2' : '') +
          (hovering === 'case3' ? ' case3' : '') +
          (hovering === 'email'
            ? view === 'socials'
              ? ' email'
              : ' socials'
            : '') +
          (hovering === 'instagram'
            ? view === 'socials'
              ? ' instagram'
              : ' socials'
            : '') +
          (hovering === 'linkedIn'
            ? view === 'socials'
              ? ' linkedIn'
              : ' socials'
            : '') +
          (hovering === 'github'
            ? view === 'socials'
              ? ' github'
              : ' socials'
            : '')
        }
      >
        <div className='ripple' />
      </div>
      <div className='tooltip'>
        <p className='tooltipContent' />
      </div>
    </div>
  );
};

export default Cursor;
