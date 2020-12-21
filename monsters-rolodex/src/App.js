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
				<CardList name='Zahra'>
					{this.state.monsters.map((monster) => (
						<h1 key={monster.id}> {monster.name} </h1>
					))}
				</CardList>
			</>
		)
	}
}

export default App
