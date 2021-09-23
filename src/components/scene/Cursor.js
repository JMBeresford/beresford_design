import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Cursor = () => {
  const isMobile = useMediaQuery({ maxWidth: '1200px' });

  return (
    <div className='cursorWrapper mobile'>
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
