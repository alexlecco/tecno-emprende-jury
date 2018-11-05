import React, { Component } from 'react';
import './App.css';

import ProjectsContainer from './components/ProjectsContainer';
import StatisticsContainer from './components/StatisticsContainer';
import HeaderContainer from './components/HeaderContainer';
import WinnerInvestorsContainer from './components/WinnerInvestorsContainer'
import LoginCard from './components/LoginCard'

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
      project: {
        name: '',
        author: '',
        description: '',
        total_investment: 0,
        total_stars: 0,
        id: '',
      },
      showWinnerInvestors: false,
      investments: [],
      loggedJuryId: '',
      logged: false,
    }
    this.juriesRef = firebaseApp.database().ref().child('juries');
    this.investmentsRef = firebaseApp.database().ref().child('investments');
  }

  componentWillMount() {
    //this.selectJury(this.juriesRef);
    this.listenForInvestments(this.investmentsRef);
  }

  listenForInvestments(investmentsRef) {
    investmentsRef.on('value', (snap) => {
      let investments = [];
      snap.forEach((child) => {
        investments.push({
          investor: child.val().investor,
          money_assigned: child.val().money_assigned,
          project: child.val().project,
          timestamp: child.val().timestamp,
          _key: child.key,
        });
      });

      this.setState({
        investments: investments
      })
    });
  }

  showWinnerInvestors(project) {
    if(!this.state.showWinnerInvestors) {
      this.setState({showWinnerInvestors: !this.state.showWinnerInvestors,
                     project: {
                       name: project.name,
                       author: project.author,
                       description: project.description,
                       total_investment: project.total_investment,
                       total_stars: project.total_stars,
                       id: project.id,
                     }
      });
    }
    else {
      this.setState({
          showWinnerInvestors: !this.state.showWinnerInvestors,
          project: {
            name: '',
            author: '',
            description: '',
            total_investment: '',
            total_stars: '',
            id: '',
          }
      });
    }
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
        },
        logged: true,
      })
    });
  }

  render() {
    if(this.state.logged) {
      if(this.state.showWinnerInvestors) {
        return (
          <div>
            <HeaderContainer loggedJury={this.state.loggedJury}  />
            <StatisticsContainer investments={this.state.investments} />
            <WinnerInvestorsContainer
              investments={this.state.investments}
              showWinnerInvestors={this.showWinnerInvestors.bind(this)}
              project={this.state.project} />
          </div>
        );
      } else {
        return (
          <div>
            <HeaderContainer loggedJury={this.state.loggedJury}  />
            <StatisticsContainer investments={this.state.investments} />
            <ProjectsContainer
              jury={this.state.loggedJury}
              showWinnerInvestors={this.showWinnerInvestors.bind(this)} />
          </div>
        );
      }
    } else {
      return(
        <div>
          <HeaderContainer loggedJury={this.state.loggedJury} />
          <LoginCard />
        </div>
      );
    }
  }
}