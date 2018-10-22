import React, { Component } from 'react';
import './App.css';

import ProjectsContainer from './components/ProjectsContainer';
import StatisticsContainer from './components/StatisticsContainer';

import firebaseApp from './firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedJury: {
        id: '',
        name: '',
        remaining_stars: 0,
      },
      loggedJuryId: '',
      logged: false,
    }
    this.juriesRef = firebaseApp.database().ref().child('juries');
  }

  componentWillMount() {
    this.selectJury(this.juriesRef);
  }

  getObjectOfArray(array, index) {
    return array[index] = array[index] || {};
  }

  selectJury(juriesRef) {
    juriesRef.on('value', (snap) => {
      const juryId = 'jur1';
      let juries = [];

      snap.forEach((child) => {
        if(child.val().id === juryId) {
          juries.push({
            name: child.val().name,
            remaining_stars: child.val().remaining_stars,
            id: child.val().id,
            _key: child.key,
          });
        }
      });

      this.setState({ 
        loggedJury: {
          name: this.getObjectOfArray(juries, 0).name,
          remaining_stars: this.getObjectOfArray(juries, 0).remaining_stars,
          id: this.getObjectOfArray(juries, 0).id,
        }
       })
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <p>TecnoEmprende 2018</p>
          <p>Jurado: {this.state.loggedJury.name}</p>
          <p>Estrellas restantes: {this.state.loggedJury.remaining_stars}</p>
        </header>
        <StatisticsContainer />
        <ProjectsContainer jury={this.state.loggedJury} />
      </div>
    );
  }
}