import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Users from './components/Users/Users';

const App = (props) => {
	return (
			<div className='app-wrapper'>
				<Header />
				<NavbarContainer />
				<div className="app-wrapper__content">
					<Route path='/dialogs' render={ () => <DialogsContainer /> } />
					<Route path='/profile' render={ () => <Profile /> } />
					<Route path='/news' render={ () => <News />} />
					<Route path='/music' render={ () => <Music /> } />
					<Route path='/users' render={ () => <Users /> } />
					<Route path='/settings' render={ () => <Settings /> } />
				</div>
			</div>
	)
}

export default App;