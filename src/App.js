import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col, } from 'react-bootstrap';

import ProjectsContainer from './components/ProjectsContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <p>TecnoEmprende 2018</p>
        </header>

        <ProjectsContainer />
        
      </div>
    );
  }
}