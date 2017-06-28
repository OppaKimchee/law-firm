import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../../components/Main/Main'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'

const Display = (props) => {
	return (
		<Switch>
			<Route exact path="/law-office" render={(props) => <Main {...props} />} />
			<Route exact path="/law-office/About" render={(props) => <About {...props} />} />
			<Route exact path="/law-office/Contact" render={(props) => <Contact {...props} />} />
		</Switch>
	)
}

export default Display