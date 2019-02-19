import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchCriteria: ''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchCriteria: event.target.value });
	}

	render(){
		const { robots, searchCriteria } = this.state;
		const filteredRobots = robots.filter( robot =>
				robot.name.toLowerCase().includes(searchCriteria.toLowerCase())
				|| robot.email.toLowerCase().includes(searchCriteria.toLowerCase())
			);

		if(robots.length === 0){
			return <h1>Loading Robots!</h1>
		}
		else{

			return (
				<div className='tc'>
					<h1 className='f1'>Robo Friends</h1>
					<SearchBox 
						onSearchChange={ this.onSearchChange } />
					<Scroll>
						<CardList robots={ filteredRobots }/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;