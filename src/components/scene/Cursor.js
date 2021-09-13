import React from 'react';
import useStore from './store';

const Cursor = () => {
  const hovering = useStore((state) => state.hovering);

  return <div className={`${hovering ? 'cursor hovering' : 'cursor'}`} />;
};

export default Cursor;
