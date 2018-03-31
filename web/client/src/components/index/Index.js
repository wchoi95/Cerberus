import React, { Component } from 'react';
import './Index.css';


class IndexComponent extends Component {
  render () {
    return (
      <div className="index-page">
        <div className="index-landing-image">
          <div className="container-fluid">
            <div className="row">
              <h1 className="index-landing-header">Security Anywhere You Need It </h1>
              <h2 className="index-landing-subheader">Get Your <strong>CERBERUS</strong> Today!</h2>
              <p className= "index-header-button"><a href="/surveillance" className="btn btn-default btn-lg">Login/Register »</a></p>
            </div>
          </div>
        </div>

        <div className="row index-rows">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="col-md-6 col-sm-12">
                <img className="img-responsive index-img" src="https://goo.gl/AkMehF" alt="Forest"/>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2> <strong>CERBERUS</strong>  </h2>
               <h2>Wireless Locking!</h2>
              Lock or unlock your door from anywhere in the world at the push of a button.
              <p className="index-header-button"><a href="/about-cerberus" className="btn btn-default btn-lg">Learn More »</a></p>
            </div>
          </div>
        </div>

        <div className="row index-rows">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="col-md-6 col-sm-12">
                <img className="img-responsive index-img" src="https://goo.gl/zqkeMb" alt="Streaming"/>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2> <strong>CERBERUS</strong>  </h2>
               <h2>Video Streaming & Messaging!</h2>
              View visitors via live video feeds, then send and receive messages.
              <p className= "index-header-button"><a href="/about-cerberus" className="btn btn-default btn-lg">Learn More »</a></p>
            </div>
          </div>
        </div>

        <div className="row index-rows">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="col-md-6 col-sm-12">
                <img className="img-responsive index-img" src="https://goo.gl/XykpgS" alt="Lock"/>
            </div>
            <div className="col-md-6 col-sm-12">
               <h2> <strong>CERBERUS</strong>  </h2>
               <h2>Maximum Security!</h2>
              Secret knock patterns and numerical codes can bypass the system. Never worry about forgetting your keys again.
              <p className= "index-header-button"><a href="/about-cerberus" className="btn btn-default btn-lg">Learn More »</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexComponent;
