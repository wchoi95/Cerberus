import React, { Component } from 'react';
import './Index.css';
import $ from 'jquery';

class IndexComponent extends Component {

  constructor() {
    super();
    this.state = {
      greeting: '',
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getGreetingFromServer() {
    var urlString = "http://localhost:8080/greeting?name=".concat(this.state.name);
    console.log(urlString);
    $.ajax({
      url: urlString
    }).then(function (data) {
      this.setState({greeting: data.content});
    }.bind(this));
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    this.getGreetingFromServer();
    event.preventDefault();
  }

  render () {
    return (
      <div className="index-page">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.greeting}</p>
      </div>
    );
  }
}

export default IndexComponent;
