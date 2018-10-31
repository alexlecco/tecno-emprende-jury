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
		
		let timestamp_inMS = this.props.investor.investments_inProjects.proj1.last_timestamp;
		let timestamp_inDATE = new Date(timestamp_inMS);
		let hours = timestamp_inDATE.getHours();
		let minutes = "0" + timestamp_inDATE.getMinutes();
		let seconds = "0" + timestamp_inDATE.getSeconds();
		let miliseconds = timestamp_inDATE.getMilliseconds()
		let timestamp_inTIME = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ':' + miliseconds;

		if(investments_in_project !== 0) {
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
										$ {this.props.investor.investments_inProjects.proj1.partial_investment}
									</Row>
								</Col>
								<Col xs={2}>
									<Row className="cellContainer">
										{timestamp_inTIME}
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