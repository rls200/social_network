import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import {initializApp} from "./redux/app-reducer";
import Preloadedr from './components/Common/Preloader/preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializApp();
	}
	render() {
		if(this.props.initialization) {
			return (
				<div className='app-wrapper'>
					<HeaderContainer/>
					<NavbarContainer/>
					<div className="app-wrapper__content">
						<Route path='/dialogs' render={() => <DialogsContainer/>}/>
						<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
						<Route path='/news' render={() => <News/>}/>
						<Route path='/music' render={() => <Music/>}/>
						<Route path='/users' render={() => <UsersContainer/>}/>
						<Route path='/settings' render={() => <Settings/>}/>
						<Route path='/login' render={() => <LoginContainer/>}/>
					</div>
				</div>
			)
		} else {
			return <Preloadedr />
		}
	}
}
const mapStateToProps = (state) => ({
	initialization: state.app.initialization
})
export default connect(mapStateToProps, {initializApp})(App);