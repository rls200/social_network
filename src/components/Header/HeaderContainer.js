import React from 'react';
import {connect} from 'react-redux';
import * as axios from "axios";
import Header from "./Header";
import {setUserData,setIsAuth,setIsLoading} from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                this.props.setIsLoading(false);
                if (response.data.resultCode == 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setUserData(id, login, email);
                    this.props.setIsAuth(true);
                }
            })
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
export default connect(mapStateToProps, {setUserData, setIsAuth, setIsLoading})(HeaderContainer);