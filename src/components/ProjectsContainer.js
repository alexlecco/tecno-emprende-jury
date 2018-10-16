import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, Col, } from 'react-bootstrap';

import ProjectCard from './ProjectCard';

export default class ProjectsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                
                <div bsStyle="container">
                    <Grid>
                        <Row>
                        <Col xs={18} md={12}>
                            <ProjectCard projectName={"proyecto 1"}
                                        projectAuthor={"Gonzalo Gonzalez"}
                                        totalInvestment={155000} />
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={18} md={12}>
                            <ProjectCard projectName={"proyecto 1"}
                                        projectAuthor={"Gonzalo Gonzalez"}
                                        totalInvestment={155000} />
                        </Col>
                        </Row>
                    </Grid>
                </div>

            </div>
        );
    }
}