import React from 'react';
import '../styles/main.scss';
import Scene from '../components/scene/';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  const handlePointerMove = (e) => {
    let el = document.querySelector('.cursor');

    if (el !== null) {
      document.querySelector('.cursorWrapper').style.top = `${e.clientY}px`;
      document.querySelector('.cursorWrapper').style.left = `${e.clientX}px`;
    }
  };

  const desc = `Beresford Design is a creative web design and development company based in California. Stand out from the crowd and template generated websites with a bespoke digital masterpiece from Beresford Design.`;

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
        </main>
      </div>
    </>
  );
};

export default IndexPage;
