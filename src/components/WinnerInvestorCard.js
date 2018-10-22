import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, } from 'react-bootstrap';

export default class WinnerInvestorContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
  
	render() {
		return(
      <div class="projectCard">
				<Grid>
					<Row>
						<Col xs={8} md={6}>
							<Row className="cellContainer">
								{this.props.investor.name}
							</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}