import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, Button, } from 'react-bootstrap';
import firebaseApp from '../firebase';

export default class LoginCard extends Component {
	render() {
		return (
			<div class="projectCard">
				<Grid>
					<Row>
						<Col xs={5} md={3}>
							<Row className="cellContainer"></Row>
						</Col>
						<Col xs={4} md={3}>
							<Row className="cellContainer">
								usuario
							</Row>
							<Row className="cellContainer">
								usuario
							</Row>
						</Col>
						<Col xs={4} md={3}>
							<Row className="cellContainer">
								contraseña
							</Row>
							<Row className="cellContainer">
								contraseña
							</Row>
						</Col>
						<Col xs={5} md={3}>
							<Row className="cellContainer"></Row>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}