import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import {subscrite} from './redux/state';


let renderEntireTree = () => {
	ReactDOM.render (
		<BrowserRouter><App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/></BrowserRouter>,
		document.getElementById('root')
	);
}
renderEntireTree(state);
subscrite(renderEntireTree);