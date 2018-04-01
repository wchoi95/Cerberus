import React, { Component } from 'react';
import './Surveillance.css';
import $ from 'jquery';

class SurveillanceComponent extends Component {

  constructor() {
    super();
    this.state = {
      reply: '',
      message: '',
      image: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendMessage() {
    $.post("http://localhost:8080/chat", {message: this.state.message},
      function(data) {
        if (data) {
          console.log("Message sent");
        } else {
          console.log("Error sending message");
        }
      });
  }

  receiveMessage() {
    $.get("http://localhost:8080/chatget",
      function(data) {
        if (!(data === ""))
          this.setState({reply: data});
      }.bind(this));
  }

  getImage() {
    $.get("http://localhost:8080/image", {username: localStorage.getItem('loggedUser')},
      function(data) {
        this.setState({image: "data:image/jpg;base64, ".concat(data)});
      }.bind(this));
  }

  setSerialID() {
    $.post("http://localhost:8080/setserialid", {username: localStorage.getItem('loggedUser'), serialID: parseInt(this.state.message)},
      function(data) {
        if (data) {
          console.log("id set");
        } else {
          console.log("id not set");
        }
      });
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    //this.sendMessage();
    this.setSerialID();
    event.preventDefault();
  }

  componentDidMount() {
    this.messageTimer = setInterval(
      () => this.receiveMessage(),
      100
    );

    this.imageTimer = setInterval(
      () => this.getImage(),
      10
    );
  }

  componentWillUnmount() {
    clearInterval(this.messageTimer);
    clearInterval(this.imageTimer);
  }

  render () {
    return (
      <div className="surveillance-page">
        <img src={this.state.image} alt="not loaded"/>
        <p>{this.state.reply}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SurveillanceComponent;
