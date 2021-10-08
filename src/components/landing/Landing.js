import React, { useEffect } from 'react';
import HeroScene from './HeroScene';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import useStore from '../../store';

const Landing = () => {
  return (
    <Router>
      <div id='landing'>
        <Header />
        <HeroScene />
        <main id='hero'>
          <Switch>
            <Route path='/'></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Landing;
