import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Slider from './components/slider-v1';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';

export let renderEntireTree = (state) => {
	ReactDOM.render (
		<BrowserRouter><App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/></BrowserRouter>,
		document.getElementById('root')
	);
}