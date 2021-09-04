import * as React from 'react';
import '../styles/main.scss';
import Hero from '../components/scenes/hero';

// markup
const IndexPage = () => {
  return (
    <div id='index'>
      <main id='hero'>
        <Hero />
      </main>
    </div>
  );
};

export default IndexPage;
