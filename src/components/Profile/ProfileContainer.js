import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import * as axios from "axios";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId == undefined) {
            userId = 1379;
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
    status: state.profilePage.status
});

export default compose (
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)