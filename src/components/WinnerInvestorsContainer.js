import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, Button, } from 'react-bootstrap';

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
					<Button bsStyle="primary" onClick={(project) => {this.props.showWinnerInvestors(project)}}>Volver</Button>
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