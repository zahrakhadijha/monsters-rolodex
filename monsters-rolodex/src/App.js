import React, { Component } from 'react'
import { CardList } from './Components/CardList/CardList'
import './App.css'

class App extends Component {
	constructor() {
		super()

		this.state = {
			monsters: [],
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }))
	}

	render() {
		return (
			<>
                <CardList monsters={this.state.monsters} />
			</>
		)
	}
}

export default App
