import * as React from 'react';
import '../styles/main.scss';
import Header from '../components/header';
import Hero from '../components/scenes/hero';

// markup
const IndexPage = () => {
  return (
    <div id='index'>
      <Header />
      <main id='hero'>
        <Hero />
      </main>
    </div>
  );
};

export default IndexPage;
