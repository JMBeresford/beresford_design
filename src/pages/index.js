import React from 'react';
import '../styles/main.scss';
import Scene from '../components/scene/';
import { Helmet } from 'react-helmet';
import useStore from '../components/scene/store';
import { useMediaQuery } from 'react-responsive';

const IndexPage = () => {
  const handlePointerMove = (e) => {
    let el = document.querySelector('.cursor');

    if (el !== null) {
      document.querySelector('.cursorWrapper').style.top = `${e.clientY}px`;
      document.querySelector('.cursorWrapper').style.left = `${e.clientX}px`;
    }
  };

  const experienceStarted = useStore((state) => state.experienceStarted);
  const isMobile = useMediaQuery({ maxWidth: '1200px' });

  const desc =
    'John Beresford is a multidisciplinary designer and developer based in California. ' +
    'He develops creative web exeperiences using a synthesis of 3D design and web UI/UX fundamentals.' +
    'Companies and individuals, alike, can stand out amongst the crowd with their bespoke digital experiences from Beresford Design.';

  return (
    <>
      <Helmet>
        <title>Beresford Design</title>
        <meta title='desription' content={desc} />
        <meta property='og:url' content='http://beresford-design.com/' />
        <meta
          property='og:title'
          content='Beresford Design - Bespoke Digital Experiences'
        />
        <meta property='og:description' content={desc} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://i.imgur.com/7jTV5ql.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='theme-color' content='#ff9e9e' />
      </Helmet>
      <div id='index'>
        <main id='hero' onPointerMove={handlePointerMove}>
          <Scene />
          <div className={experienceStarted ? 'brand in' : 'brand'}>
            <h1>Beresford Design</h1>
            {isMobile ? (
              <h3>Tap to explore</h3>
            ) : (
              <h3>Use your mouse to explore</h3>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default IndexPage;
