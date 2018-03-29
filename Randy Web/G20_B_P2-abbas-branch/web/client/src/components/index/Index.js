import React, { Component } from 'react';
import './Index.css';


class IndexComponent extends Component {




  render () {
    return (
      <div className="index-page">

        <div className="index-landing-image">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-lg-offset-3 col-md-5 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
              <h1 className="index-landing-header">Security Anywhere You Need It </h1>
              <h2 className="index-landing-subheader">Get Your <strong>CERBERUS</strong> Today!</h2>
                <p className= "index-header-button"><a href="http://localhost:9001/surveillance" className="btn btn-default btn-lg">Login/Register »</a></p>
              </div>
            </div>
          </div>
        </div>



        <div className="row index-rows">
            <div className="col-lg-2 col-lg-offset-2 col-md-3 col-md-offset-1 col-sm-5 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <a target="_blank" href="https://goo.gl/AkMehF">
                  <img className = "index-img" src="https://goo.gl/AkMehF" alt="Forest"/>
                </a>
            </div>
            <div className="col-lg-5 col-lg-offset-2 col-md-5 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
              <h2> <strong>CERBERUS</strong>  </h2>
               <h2>Wireless Locking!</h2>
              Lock or unlock your door from anywhere in the world at the push of a button.
              <p className= "index-header-button"><a href="http://localhost:9001/about-cerberus" className="btn btn-default btn-lg">Learn More »</a></p>
            </div>
        </div>


        <div className="row index-rows">
            <div className="col-lg-2 col-lg-offset-2 col-md-3 col-md-offset-1 col-sm-5 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <a target="_blank" href="https://goo.gl/zqkeMb">
                  <img className = "index-img" src="https://goo.gl/zqkeMb" alt="Streaming"/>
                </a>
            </div>
            <div className="col-lg-5 col-lg-offset-2 col-md-5 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
              <h2> <strong>CERBERUS</strong>  </h2>
               <h2>Video Streaming & Messaging!</h2>
              View visitors via live video feeds, then send and receive messages.
              <p className= "index-header-button"><a href="http://localhost:9001/about-cerberus" className="btn btn-default btn-lg">Learn More »</a></p>
            </div>
        </div>


        <div className="row index-rows">
            <div className="col-lg-2 col-lg-offset-2 col-md-3 col-md-offset-1 col-sm-5 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <a target="_blank" href="https://goo.gl/XykpgS">
                  <img className = "index-img" src="https://goo.gl/XykpgS" alt="Lock"/>
                </a>
            </div>
            <div className="col-lg-5 col-lg-offset-2 col-md-5 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
               <h2> <strong>CERBERUS</strong>  </h2>
               <h2>Maximum Security!</h2>
              Secret knock patterns and numerical codes can bypass the system. Never worry about forgetting your keys again.
              <p className= "index-header-button"><a href="http://localhost:9001/about-cerberus" className="btn btn-default btn-lg">Learn More »</a></p>
            </div>
        </div>







      </div>
    );
  }
}

export default IndexComponent;
