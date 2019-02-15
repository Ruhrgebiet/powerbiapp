import React, { Component } from 'react';
import EmbededReport from './EmbededReport';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor() {
    super(); 
    this.state = {
      ListItem:[
      {
        title: 'Dashboard 1',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiOTYxYjY3NTQtM2UzMy00ODg4LWIxZjEtNTAzNTgyOTEzMTQ1IiwidCI6IjAwZWQ1ZmFiLWUxZGEtNGQ3Mi1iMzU4LWVhODExN2MwNTYyMyIsImMiOjh9'
      },
      {
        title:'Dashboard 2',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiOTYxYjY3NTQtM2UzMy00ODg4LWIxZjEtNTAzNTgyOTEzMTQ1IiwidCI6IjAwZWQ1ZmFiLWUxZGEtNGQ3Mi1iMzU4LWVhODExN2MwNTYyMyIsImMiOjh9'
      },
      {
        title:'Dashboard 3', 
        link: 'https://app.powerbi.com/view?r=eyJrIjoiOTYxYjY3NTQtM2UzMy00ODg4LWIxZjEtNTAzNTgyOTEzMTQ1IiwidCI6IjAwZWQ1ZmFiLWUxZGEtNGQ3Mi1iMzU4LWVhODExN2MwNTYyMyIsImMiOjh9' 
      }
    ],
    activeIndex: 0
    };
  }

  handleClick(newIndex) {
    console.log("Test");
    this.setState({activeIndex: newIndex});
  }

  render() {
    return (
      <div className="App">
        <List 
          title="DashboardList" 
          items={this.state.ListItem}
          onItemClicked={(idx) => this.handleClick(idx)}
        /> 
        <EmbededReport link={this.state.ListItem[this.state.activeIndex].link} />  
      </div>
    );
  }
}

