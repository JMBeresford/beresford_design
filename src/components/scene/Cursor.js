import React from 'react';

const Cursor = () => {
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
