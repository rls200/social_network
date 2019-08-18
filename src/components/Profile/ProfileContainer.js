import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import notAuthRedirect from "../../hoc/notAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId === undefined) {
            userId = this.props.idAuth;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return <Profile { ...this.props } status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    idAuth: state.auth.id

});

export default compose (
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter,
  notAuthRedirect
)(ProfileContainer)