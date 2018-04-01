import React, { Component } from 'react';
import './Profile.css';

import $ from 'jquery';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      isLogged: localStorage.getItem('isLogged'),
      loggedUser: localStorage.getItem('loggedUser'),
      serialID: localStorage.getItem('serialID'),
      changeSerialID: ''
    };

    this.handleSerialIDChange = this.handleSerialIDChange.bind(this);
    this.handleSerialIDSubmit = this.handleSerialIDSubmit.bind(this);
  }

  setSerialID() {
    $.post("http://localhost:8080/setserialid", {username: localStorage.getItem('loggedUser'), serialID: parseInt(this.state.changeSerialID)},
      function(data) {
        this.setState({serialID: data, changeSerialID: ''});
        localStorage.setItem('serialID', data);
      }.bind(this));
  }

  handleSerialIDChange(event) {
    this.setState({changeSerialID: event.target.value});
  }

  handleSerialIDSubmit(event) {
    this.setSerialID();
    event.preventDefault();
  }

  render () {
    return (
      <section className="profile-section">
        <h1>{this.state.loggedUser}</h1>
        <span>SerialID: {this.state.serialID}</span><br />
        <input type="text" value={this.state.changeSerialID} onChange={this.handleSerialIDChange} />
        <input type="submit" value="Change ID" onClick={this.handleSerialIDSubmit} /><br />
      </section>
    );
  }
}

export default Profile;
