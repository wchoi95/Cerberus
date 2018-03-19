import React, { Component } from 'react';
import './Index.css';
import $ from 'jquery';

class IndexComponent extends Component {

  constructor() {
    super();
    this.state = {
      createdUser: '',
      name: '',
      id: '',
      getName: ''
    };
    this.handleGetChange = this.handleGetChange.bind(this);
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
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

  createUser() {
    $.post("38.88.74.71:80/user", {name: this.state.name},
      function(data) {
        this.setState({createdUser: data});
      }.bind(this));
  }

  getUser() {
    $.get("38.88.74.71:80/user/".concat(this.state.id), {id: this.state.id},
      function(data) {
        this.setState({getName: data.name});
      }.bind(this));
  }

  handleCreateChange(event) {
    this.setState({name: event.target.value});
  }

  handleGetChange(event) {
    this.setState({id: event.target.value});
  }

  handleCreateSubmit(event) {
    this.createUser();
    event.preventDefault();
  }

  handleGetSubmit(event) {
    this.getUser();
    event.preventDefault();
  }

  render () {
    return (
      <div className="index-page">
        <form onSubmit={this.handleCreateSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleCreateChange} />
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.createdUser}</p>

        <form onSubmit={this.handleGetSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleGetChange} />
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.getName}</p>
      </div>
    );
  }
}

export default IndexComponent;
