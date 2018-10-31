import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Button, } from 'react-bootstrap';
import WinnerInvestorCard from './WinnerInvestorCard';
import firebaseApp from '../firebase';

export default class WinnerInvestorsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
      investors: [],
		};
		this.investorsRef = firebaseApp.database().ref().child('investors');
	}

	componentWillMount() {
    this.listenForInvestors(this.investorsRef);
  }

	listenForInvestors(investorsRef) {
    investorsRef.on('value', (snap) => {
      let investors = [];
      snap.forEach((child) => {
        investors.push({
          id: child.val().id,
          invested_funds: child.val().invested_funds,
          investments_inProjects: {
            proj1: {
              partial_investment: child.val().investments_inProjects.proj1.partial_investment,
              last_timestamp: child.val().investments_inProjects.proj1.last_timestamp,
            },
            proj2: {
              partial_investment: child.val().investments_inProjects.proj2.partial_investment,
              last_timestamp: child.val().investments_inProjects.proj2.last_timestamp,
            },
            proj3: {
              partial_investment: child.val().investments_inProjects.proj3.partial_investment,
              last_timestamp: child.val().investments_inProjects.proj3.last_timestamp,
            }
          },
          name: child.val().name,
          remaining_funds: child.val().remaining_funds,
          _key: child.key,
        });
			});
			
			investors.sort(
				(a,b) => {
					const project = this.props.project.id;
					switch(project) {
						case 'proj1':
							return a.investments_inProjects.proj1.partial_investment < b.investments_inProjects.proj1.partial_investment;
						case 'proj2':
							return a.investments_inProjects.proj2.partial_investment < b.investments_inProjects.proj2.partial_investment;
						case 'proj3':
							return a.investments_inProjects.proj3.partial_investment < b.investments_inProjects.proj3.partial_investment;
						default:
					}
				}
			)

      this.setState({
        investors: investors
      })
    });
  }

	render() {
		return (
			<div>
				<div bsStyle="container">
					<div className="center-container">
						<Button bsStyle="primary" onClick={() => {this.props.showWinnerInvestors()}}>Volver</Button>
					</div>
					<div className="center-container">
						Inversiones: $ {this.props.project.total_investment}
					</div>
					<div className="center-container">
						Estrellas: {this.props.project.total_stars}
					</div>
					<div className="center-container">
						Inversiones recibidas en el proyecto: {this.props.project.name}
					</div>
					<Grid>
						<Row>
							{
								this.state.investors.map(
									(investor) => {
										return (
											<WinnerInvestorCard
												project={this.props.project}
												investor={investor}
												investments={this.props.investments}
											/>
										)
									}
								)
							}
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
}