import React, { Component } from 'react';
import './App.css';

import ProjectsContainer from './components/ProjectsContainer';
import StatisticsContainer from './components/StatisticsContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <p>TecnoEmprende 2018</p>
        </header>
        <StatisticsContainer />
        <ProjectsContainer />
      </div>
    );
  }
}