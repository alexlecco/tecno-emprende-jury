import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Button, } from 'react-bootstrap';

import WinnerInvestorCard from './WinnerInvestorCard';

export default class WinnerInvestorsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div bsStyle="container">
					<div className="center-container">
						<Button bsStyle="primary" onClick={() => {this.props.showWinnerInvestors()}}>Volver</Button>
					</div>
					<div className="center-container">
						Podio de inversores del proyecto: {this.props.project.name}
					</div>
					<Grid>
						<Row>
							{
								this.props.investors.map(
									(investor) =>
										<WinnerInvestorCard
											investor={investor}
										/>
									)
							}
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
}