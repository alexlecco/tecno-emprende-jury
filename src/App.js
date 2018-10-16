import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col, } from 'react-bootstrap';

import ProjectCard from './components/ProjectCard';

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <p>TecnoEmprende 2018</p>
        </header>

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