import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import HeroScene from './HeroScene';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import useStore from '../../store';

const Landing = () => {
  return (
    <Router>
      <div id='landing'>
        <Header />
        <main id='hero'>
          <HeroScene />
          <Switch>
            <Route path='/'>
              <Hero />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Landing;
