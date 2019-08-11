import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import * as axios from "axios";
import Profile from "./Profile";
import { getProfile } from '../../redux/profile-reducer';
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId == undefined) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }
    render() {
        return <Profile { ...this.props } profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose (
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)