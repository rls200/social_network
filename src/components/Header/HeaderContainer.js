import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import { logout } from '../../redux/auth-reduser';
import {compose} from 'redux';
import {withRouter} from 'react-router';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        isLoading:state.auth.isLoading
    }
}
export default compose(
  withRouter,
  connect(mapStateToProps, { logout }))(HeaderContainer);