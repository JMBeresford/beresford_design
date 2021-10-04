import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HeroImage from './HeroImage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Router>
      <div id='landing'>
        <HeroImage />
        <Header />
        <Switch>
          <Route path='/'>
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Landing;
