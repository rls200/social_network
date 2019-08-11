import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
	isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {

	class RedirectComponent extends React.Component {

		render() {
			if (!this.props.isAuth) return <Redirect to={'/login'}/>
			return <Component {...this.props} />
		}
	}
	let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
	return ConnectAuthRedirectComponent;

}

export default withAuthRedirect;