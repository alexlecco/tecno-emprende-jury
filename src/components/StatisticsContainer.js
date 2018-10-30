import React, { Component } from 'react';
import '../App.css';

import firebaseApp from '../firebase';
import { Button, } from 'react-bootstrap';

export default class StatisticsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      APTI: 0
    }
    this.APTIRef = firebaseApp.database().ref().child('all_projects_total_investment');
  }

  updateAPTI(APTIRef, investors) {
    APTIRef.once('value', (snap) => {
      let APTI = snap.val();
      
      investors.map(
        (investor) =>
          APTI += investor.invested_funds
        );
      
        this.setState({ APTI: APTI });
    });
  }

  render() {
		return(
			<div className="center-container">
        Total de inversiones: $ {this.state.APTI}
        <Button 
          bsStyle="primary"
          onClick={() => this.updateAPTI(this.APTIRef, this.props.investors)}>
            Actualizar
        </Button>
			</div>
		);
	}
}