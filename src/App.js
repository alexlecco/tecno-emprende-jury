import React, { Component } from 'react';
import './App.css';

import ProjectCard from './components/ProjectCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>TecnoEmprende 2018</p>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </header>
      </div>
    );
  }
}

export default App;
