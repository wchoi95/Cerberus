import React, { Component } from 'react';
import './AboutCerberus.css';

class AboutCerberusComponent extends Component {
  render () {
    return (
      <div className="about-cerberus-page">

        <div className="header-image">
          <div className="container-fluid">
              <h1 className="index-landing-header"> About Cerberus </h1>
          </div>
        </div>

        <div className="about-paragraph-set">
          <p className= " about-paragraph-1 col-lg-9 col-lg-offset-2 col-md-9 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          Ever leave your keys at work and get locked out of your home? Hate it when a delivery arrives at your door but you are not home? 
          Do you wish you could let someone into your home to feed your pets without giving them the key? Well, we've got you covered! </p>

          <p className= "about-paragraph-2 col-lg-9 col-lg-offset-2 col-md-9 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          Cerberus Pro is the brainchild of a young group of UBC Computer Engineering students who wished to find a solution to these 
          common problem. In a nutshell, the device allows the owner to view and communicate with visitors at the door on a mobile app
          or website, and choose to unlock the door wirelessely at a simple push of a button. The goal is to provide a slew of
          features based on having the convenience of not needing a key to access one's home, including secret knocks and keypad
          codes that bypass the system. With Cerberus Pro, life is made simpler. </p>
        </div>


      </div>
    );
  }
}

export default AboutCerberusComponent;
