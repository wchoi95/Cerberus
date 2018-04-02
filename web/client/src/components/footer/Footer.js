import React, { Component } from 'react';
import './Footer.css';

class FooterComponent extends Component {
  render () {
    return (
      <footer>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-1 col-md-5 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
              <ul className="list-inline social">
                <li><font size= "3" color="white"> Connect with us on</font></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>

            <div className="col-lg-5 col-lg-offset-0 col-md-5 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
              <p><font size= "3" color="white"> &copy; Copyright Cerberus 2018. All rights reserved. <br/></font></p>
            </div>
          </div>
      </footer>
    );
  }
}

export default FooterComponent;
