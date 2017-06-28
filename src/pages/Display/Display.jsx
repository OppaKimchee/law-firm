import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../../components/Main/Main'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'

const Display = (props) => {
	return (
		<Switch>
			<Route exact path="/law-firm" render={(props) => <Main {...props} />} />
			<Route exact path="/law-firm/About" render={(props) => <About {...props} />} />
			<Route exact path="/law-firm/Contact" render={(props) => <Contact {...props} />} />
		</Switch>
	)
}

export default Display