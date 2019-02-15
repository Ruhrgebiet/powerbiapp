import React, { Component } from 'react';
import EmbededReport from './EmbededReport';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor() {
    super(); 
    this.state = {
      EmbededReport: [
        {
          link: 'https://app.powerbi.com/view?r=eyJrIjoiOTYxYjY3NTQtM2UzMy00ODg4LWIxZjEtNTAzNTgyOTEzMTQ1IiwidCI6IjAwZWQ1ZmFiLWUxZGEtNGQ3Mi1iMzU4LWVhODExN2MwNTYyMyIsImMiOjh9'
        },
      ],
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
        <EmbededReport link={this.state.EmbededReport[0].link} />  
      </div>
    );
  }
}

