import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect }  from 'react-redux'
import './styles/App.scss';
import { handleInitialData } from './redux/actions'
import VoucherEditor from './components/VoucherEditor'
import VoucherTable from './components/VoucherTable'
import TopBar from './components/TopBar'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		return (
			<Router>
				<div className="App">
					<TopBar />
					<Route path='/' exact component={VoucherTable} />
                  	<Route path='/new' exact component={VoucherEditor} />
				</div>
			</Router>
		);
	}
}

export default connect()(App)
