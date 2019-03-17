import React, { Component } from 'react';
import { connect }  from 'react-redux'
import './styles/App.scss';
import { handleInitialData } from './redux/actions'
import VoucherEditor from './components/VoucherEditor'
import VoucherTable from './components/VoucherTable'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		return (
			<div className="App">
				<VoucherTable />
			</div>
		);
	}
}

export default connect()(App)
