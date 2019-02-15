import React, { Component } from 'react';
import EmbededReport from './EmbededReport';
import './App.css';

export default class App extends Component {
  constructor() {
    super(); 
    this.state = {
      EmbededReport: [
        {
          link: 'https://app.powerbi.com/view?r=eyJrIjoiOTYxYjY3NTQtM2UzMy00ODg4LWIxZjEtNTAzNTgyOTEzMTQ1IiwidCI6IjAwZWQ1ZmFiLWUxZGEtNGQ3Mi1iMzU4LWVhODExN2MwNTYyMyIsImMiOjh9'
        },
      ] 
    };
  }
  render() {
    return (
      <div className="App">
        <EmbededReport link={this.state.EmbededReport[0].link} />  
      </div>
    );
  }
}

