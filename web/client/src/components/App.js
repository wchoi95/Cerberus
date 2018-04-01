import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

// components
import Navbar from './navbar/Navbar';
import Index from './index/Index';
import Surveillance from './surveillance/Surveillance';
import AboutCerberus from './about-cerberus/AboutCerberus';
import Team from './team/Team';
import Contact from './contact/Contact';
import Profile from './profile/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' render={(props) => (
            <Index />
          )} />
          <Route exact path='/surveillance' render={(props) => (
              <Surveillance />
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
          <Route exact path='/profile' render={(props) => (
              <Profile />
            )} />
        </div>
      </Router>
    );
  }
}

export default App;
