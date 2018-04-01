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
      changeSerialID: '',
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    };

    this.handleSerialIDChange = this.handleSerialIDChange.bind(this);
    this.handleOldPasswordChange = this.handleOldPasswordChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
    this.handleNewPasswordConfirmChange = this.handleNewPasswordConfirmChange.bind(this);
    this.handleSerialIDSubmit = this.handleSerialIDSubmit.bind(this);
    this.handleChangePasswordSubmit = this.handleChangePasswordSubmit.bind(this);
  }

  setSerialID() {
    $.post("http://localhost:8080/setserialid/".concat(localStorage.getItem('loggedUser')), {username: localStorage.getItem('loggedUser'), serialID: parseInt(this.state.changeSerialID, 10)},
      function(data) {
        this.setState({serialID: data, changeSerialID: ''});
        localStorage.setItem('serialID', data);
      }.bind(this));
  }

  changePassword() {
    $.post("http://localhost:8080/changepassword/".concat(localStorage.getItem('loggedUser')), {username: localStorage.getItem('loggedUser'), oldPassword: this.state.oldPassword, newPassword: this.state.newPassword},
      function(data) {
        if (data) {
          console.log("changed successfully");
        } else {
          console.log("error changing password");
        }
      });
  }

  handleSerialIDChange(event) {
    this.setState({changeSerialID: event.target.value});
  }

  handleOldPasswordChange(event) {
    this.setState({oldPassword: event.target.value});
  }

  handleNewPasswordChange(event) {
    this.setState({newPassword: event.target.value});
  }

  handleNewPasswordConfirmChange(event) {
    this.setState({newPasswordConfirm: event.target.value});
  }

  handleSerialIDSubmit(event) {
    this.setSerialID();
    event.preventDefault();
  }

  handleChangePasswordSubmit(event) {
    this.changePassword();
    event.preventDefault();
  }

  render () {
    return (
      <section className="profile-section">
        <h1>{this.state.loggedUser}</h1>
        <span>SerialID: {this.state.serialID}</span><br />
        <input type="text" value={this.state.changeSerialID} onChange={this.handleSerialIDChange} />
        <input type="submit" value="Change ID" onClick={this.handleSerialIDSubmit} /><br />
        <span>Change Password</span><br />
        <input type="text" value={this.state.oldPassword} onChange={this.handleOldPasswordChange} />
        <input type="text" value={this.state.newPassword} onChange={this.handleNewPasswordChange} />
        <input type="text" value={this.state.newPasswordConfirm} onChange={this.handleNewPasswordConfirmChange} />
        <input type="submit" value="Change ID" onClick={this.handleChangePasswordSubmit} /><br />
      </section>
    );
  }
}

export default Profile;
