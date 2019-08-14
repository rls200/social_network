import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import { authThunk } from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authThunk();
    }

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
export default connect(mapStateToProps, { authThunk })(HeaderContainer);