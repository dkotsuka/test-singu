import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'
import middleware from './redux/middleware'
import './styles/index.scss';
import App from './App';

const store = createStore(reducer, middleware)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'))
