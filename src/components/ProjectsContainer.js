import React, { Component } from 'react';
import '../App.css';

import { Grid, Row, } from 'react-bootstrap';

import ProjectCard from './ProjectCard';
import firebaseApp from '../firebase';

export default class ProjectsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
		}
		this.projectsRef = firebaseApp.database().ref().child('projects');
	}
	
	componentDidMount() {
		this.listenForProjects(this.projectsRef);
	}

	listenForProjects(projectsRef) {
		projectsRef.on('value', snap => {
			let projects = [];
			snap.forEach((child) => {
				projects.push({
					author: child.val().author,
					description: child.val().description,
					id: child.val().id,
					name: child.val().name,
					_key: child.key
				});
			});
			this.setState({
				projects: projects
			});
		});
	}

	render() {
		return(
			<div>
				<div bsStyle="container">
					<Grid>
						<Row>
							{
								this.state.projects.map(
									(project) => 
										<ProjectCard
											projectName={project.name}
											projectAuthor={project.author}
											totalInvestment={10000} />
								)
							}
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}