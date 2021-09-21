import React from 'react';
import useStore from './store';

const Cursor = () => {
  const hovering = useStore((state) => state.hovering);
  const view = useStore((state) => state.view);

  return (
    <div className='cursorWrapper'>
      <div className='cursor'>
        <div className='ripple' />
      </div>
      <div className='tooltip'>
        <p className='tooltipContent' />
      </div>
    </div>
  );
};

export default Cursor;
