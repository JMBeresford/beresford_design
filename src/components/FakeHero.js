import React from 'react';
import Header from './Header';
import gsap from 'gsap/all';
import useStore from './scene/store';
import logo from '../images/logo.svg';
import { useMediaQuery } from 'react-responsive';

const FakeHero = (props) => {
  const [experienceStarted, startExperience, startExperienceMobile] = useStore(
    (state) => [
      state.experienceStarted,
      state.startExperience,
      state.startExperienceMobile,
    ]
  );

  const isMobile = useMediaQuery({ maxWidth: '1200px' });

  const handleStartExperience = () => {
    if (isMobile) {
      startExperienceMobile();
    } else {
      startExperience();
    }
  };

  const delayInteractionUpdate = () => {
    gsap.to('#fakeHero', {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        handleStartExperience();
      },
    });
  };

  return (
    <div
      id='fakeHero'
      onWheel={delayInteractionUpdate}
      style={experienceStarted ? { display: 'none' } : {}}
      {...props}
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
        <img className='logo' src={logo} alt='Beresford Design Logo' />
      </main>
    </div>
  );
};

export default FakeHero;
