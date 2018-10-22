import React, { Component } from 'react';
import '../App.css';

import firebaseApp from '../firebase';

export default class StatisticsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      APTI: 0
    }
    this.APTIRef = firebaseApp.database().ref().child('all_projects_total_investment');
  }

  componentWillMount() {
    this.listenForAPTI(this.APTIRef)
  }

  listenForAPTI(APTIRef) {
    APTIRef.on('value', (snap) => {
      let APTI = snap.val();
      this.setState({ APTI: APTI });
    });
  }
  
  render() {
		return(
			<div className="center-container">
        Total de inversiones: $ {this.state.APTI}
			</div>
		);
	}
}