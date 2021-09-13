import React from 'react';
import Header from './Header';
import { useStaticQuery, graphql } from 'gatsby';
import gsap from 'gsap/all';
import useStore from './scene/store';

const FakeHero = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

  const [experienceStarted, startExperience] = useStore((state) => [
    state.experienceStarted,
    state.startExperience,
  ]);

  const delayInteractionUpdate = () => {
    gsap.to('#fakeHero', {
      opacity: 0,
      duration: 1,
      onComplete: startExperience,
    });
  };

  return (
    <div
      id='fakeHero'
      onWheel={delayInteractionUpdate}
      style={experienceStarted ? { display: 'none' } : {}}
    >
      <Header handleInteract={delayInteractionUpdate} />
      <main>
        <div className='heroText'>
          <h1>
            Stand out from the competition with a bespoke digital masterpiece.
          </h1>
          <div className='buttons'>
            <button className='mainBtn' onClick={delayInteractionUpdate}>
              Our Work
            </button>
            <button onClick={delayInteractionUpdate}>Get Yours</button>
          </div>
        </div>
        <img
          className='logo'
          src={data.logo.publicURL}
          alt='Beresford Design Logo'
        />
      </main>
    </div>
  );
};

export default FakeHero;
