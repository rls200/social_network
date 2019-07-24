import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';


let renderEntireTree = (state) => {
	ReactDOM.render (
		<BrowserRouter>
			<Provider store={ store }>
				<App />
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	);
}
renderEntireTree(store.getState());
store.subscribe( () => {
	let state = store.getState();
	renderEntireTree(state);
});
