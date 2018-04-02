import React, { Component } from 'react';
import './Surveillance.css';
import $ from 'jquery';

class SurveillanceComponent extends Component {

  constructor() {
    super();
    this.state = {
      chat0: '',
      chat1: '',
      chat2: '',
      chat3: '',
      chat4: '',
      chat5: '',
      chat6: '',
      chat7: '',
      chat8: '',
      chat9: '',
      message: '',
      image: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendMessage() {
    $.post("http://localhost:8080/chat/".concat(localStorage.getItem('loggedUser')), {username: localStorage.getItem('loggedUser'), message: "You: ".concat(this.state.message)},
      function(data) {
        console.log("sent message");
      });
  }

  receiveMessage() {
    $.get("http://localhost:8080/chatget/".concat(localStorage.getItem('loggedUser')), {username: localStorage.getItem('loggedUser')},
      function(data) {
        this.setState({chat0: data[0],
                       chat1: data[1],
                       chat2: data[2],
                       chat3: data[3],
                       chat4: data[4],
                       chat5: data[5],
                       chat6: data[6],
                       chat7: data[7],
                       chat8: data[8],
                       chat9: data[9]});
      }.bind(this));
  }

  getImage() {
    $.get("http://localhost:8080/image/".concat(localStorage.getItem('loggedUser')), {username: localStorage.getItem('loggedUser')},
      function(data) {
        this.setState({image: "data:image/jpg;base64, ".concat(data)});
      }.bind(this));
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    this.sendMessage();
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
        <img src={this.state.image} alt="not loaded"/><br />
        <span>{this.state.chat9}</span><br />
        <span>{this.state.chat8}</span><br />
        <span>{this.state.chat7}</span><br />
        <span>{this.state.chat6}</span><br />
        <span>{this.state.chat5}</span><br />
        <span>{this.state.chat4}</span><br />
        <span>{this.state.chat3}</span><br />
        <span>{this.state.chat2}</span><br />
        <span>{this.state.chat1}</span><br />
        <span>{this.state.chat0}</span><br />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SurveillanceComponent;
