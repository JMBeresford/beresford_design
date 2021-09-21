import React from 'react';
import '../styles/main.scss';
import Scene from '../components/scene/';

// markup
const IndexPage = () => {
  const handlePointerMove = (e) => {
    let el = document.querySelector('.cursor');

    if (el !== null) {
      document.querySelector('.cursorWrapper').style.top = `${e.clientY}px`;
      document.querySelector('.cursorWrapper').style.left = `${e.clientX}px`;
    }
  };

  return (
    <div id='index'>
      <main id='hero' onPointerMove={handlePointerMove}>
        <Scene />
      </main>
    </div>
  );
};

export default IndexPage;
