import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Display from '../Display/Display'
import './App.css'

class App extends Component {

	render() {
		return (
			<div>
					<Nav />
					<Display />
					{/*<Footer />*/}
			</div>
		)
	}
}

export default App