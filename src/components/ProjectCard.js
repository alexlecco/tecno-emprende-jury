import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, Button, } from 'react-bootstrap';

export default class ProjectCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="projectCard">
				<Grid>
					<Row>
						<Col xs={8} md={6}>
							<Row className="cellContainer">
								{this.props.projectName}
							</Row>
							<Row className="cellContainer">
								{this.props.projectAuthor}
							</Row>
						</Col>
						<Col xs={5} md={3}>
							<Row className="cellContainer">
								Total de inversiones recibidas
							</Row>
							<Row className="cellContainer">
								$ {this.props.totalInvestment}
							</Row>
						</Col>
						<Col xs={5} md={3}>
							<Row className="cellContainer">
								<Button bsStyle="primary">Votar</Button>
							</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}