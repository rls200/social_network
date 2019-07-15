import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

const App = (props) => {
	return (
			<div className='app-wrapper'>
				<Header />
				<Navbar state={props.state.sidebar} />
				<div className="app-wrapper__content">
					<Route path='/dialogs' render={
						() => <Dialogs 
						state={props.state.messagesPage} /> 
					} />
					<Route path='/profile' render={ 
						() => <Profile 
						profilePage={props.state.profilePage} 
						addPost={props.addPost}
						updateNewPostText={props.updateNewPostText}

					/> 
					} />
					<Route path='/news' render={ () => <News />} />
					<Route path='/music' render={ () => <Music /> } />
					<Route path='/settings' render={ () => <Settings /> } />
				</div>
			</div>
	)
}

export default App;