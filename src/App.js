import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      ListItem:[{
        title: 'Dashboard 1', done:false,
        link:'google.de'
      },
        {
        title:'Dashboard 2', done:false,
        link:'google.de'
            },
        {
        title:'Dashboard 3', done:false,
        link:'google.de'
      }
    ]
  };
}
  render() {
    return (
      <div className="App">
      <List title="DashboardList" items={this.state.ListItem}/> 
      </div>
    );
  }
}

