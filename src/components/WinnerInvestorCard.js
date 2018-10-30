import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, } from 'react-bootstrap';

export default class WinnerInvestorContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	calculateInvestments(investments) {
		let total = 0;
		
		investments.forEach(
			(investment) => {
				if(investment.investor === this.props.investor.id) {
					if(investment.project === this.props.project.id) {
						total += investment.money_assigned;									
					} 
				}
			}
		)
		return total;
	}

	render() {
		const { investments } = this.props;
		let investments_in_project = this.calculateInvestments(investments);

		if(investments_in_project != 0) {
			return(
				<div>
					<div class="projectCard">
						<Grid>
							<Row>
								<Col xs={2}>
									<Row className="cellContainer">
										{this.props.investor.name}
									</Row>
								</Col> 
								<Col xs={2}>
									<Row className="cellContainer">
										$ {investments_in_project}
									</Row>
								</Col>
							</Row>
						</Grid>
					</div>
				</div>
			);
		} else {
			return(
				<div />
			)
		}
	}
}