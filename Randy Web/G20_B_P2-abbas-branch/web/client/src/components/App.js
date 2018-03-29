import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

// components
import Navbar from './navbar/Navbar';
import Index from './index/Index';
import Account from './account/Account';
import AboutCerberus from './about-cerberus/AboutCerberus';
import Team from './team/Team';
import Contact from './contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' render={(props) => (
            <Index />
          )} />
          <Route exact path='/account' render={(props) => (
              <Account />
            )} />
          <Route exact path='/about-cerberus' render={(props) => (
              <AboutCerberus />
            )} />
          <Route exact path='/team' render={(props) => (
              <Team />
            )} />
          <Route exact path='/contact' render={(props) => (
              <Contact />
            )} />
        </div>
      </Router>
    );
  }
}

export default App;
