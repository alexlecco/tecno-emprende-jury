import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, } from 'react-bootstrap';

export default class WinnerInvestorContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const { investments } = this.props;

		return(
			<div>
				{
					investments.map(
						(investment) => {
							if(investment.investor === this.props.investor.id) {
								if(investment.project === this.props.project.id) {
									return(
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
															$ {this.props.investor.inverted_funds}
														</Row>
													</Col>
												</Row>
											</Grid>
										</div>
									);
								} else {
									return (<div />);								
								}
							} else {
								return (<div />);
							}
						}
					)
				}
			</div>
		);
	}
}