import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, Button, } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

export default class ProjectCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
      rating: 0
    };
	}

	onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
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
							<div className="totalInvestment">
								<Row className="cellContainer">
									${this.props.totalInvestment}
								</Row>
							</div>
						</Col>
						<Col xs={5} md={3}>
							<Row className="cellContainer">
									<Button bsStyle="primary">Votar</Button>
							</Row>
							<Row className="cellContainer">
								<StarRatingComponent 
									name="rate1" 
									starCount={5}
									value={this.state.rating}
									onStarClick={this.onStarClick.bind(this)}
								/>
							</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}