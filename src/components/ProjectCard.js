import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, } from 'react-bootstrap';

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="projectCard">
                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            <Row className="gridContainer">
                                {this.props.projectName}
                            </Row>
                            <Row className="gridContainer">
                                {this.props.projectAuthor}
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="gridContainer">
                                $ {this.props.totalInvestment}
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}