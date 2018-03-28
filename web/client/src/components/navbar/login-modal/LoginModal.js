import React, { Component } from 'react';
import './LoginModal.css'
import Modal from 'react-modal';

const modalStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    textAlign            : 'center'
  }
};

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      username: '',
      password: ''
    };
    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  handleSubmit(event) {
    //this.attemptLogin();
    event.preventDefault();
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render () {
    return (
      <div>
        <span onClick={this.openModal}>Login</span>
        <Modal isOpen={this.state.isOpen}
               onRequestClose={this.hideModal}
               contentLabel="Login Modal"
               ariaHideApp={false}
               style={modalStyles}>
          <span className="login-modal-close" onClick={this.hideModal}>X</span>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <span>Username:</span><br />
            <input type="text" value={this.state.value} onChange={this.handleUsernameChange} /><br />
            <span>Password:</span><br />
            <input type="text" value={this.state.value} onChange={this.handlePasswordChange} /><br />
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
