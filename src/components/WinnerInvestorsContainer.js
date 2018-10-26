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
						Inversiones: $ {this.props.project.total_investment}
					</div>
					<div className="center-container">
						Estrellas: {this.props.project.total_stars}
					</div>
					<div className="center-container">
						Inversiones recibidas en el proyecto: {this.props.project.name}
					</div>
					<Grid>
						<Row>
							{
								this.props.investors.map(
									(investor) => {
										return (
											<WinnerInvestorCard
												project={this.props.project}
												investor={investor}
												investments={this.props.investments}
											/>
										)
									}
								)
							}
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
}