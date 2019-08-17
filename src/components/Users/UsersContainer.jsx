import React from 'react';
import {compose} from 'redux';
import Users from './Users';
import {connect} from 'react-redux';
import { getUsers, getPage, followingThunk, unFollowingThunk} from '../../redux/users-reduser';
import Preloadedr from "../Common/Preloader/preloader";
import notAuthRedirect from '../../hoc/notAuthRedirect';
import {getTheUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsLoading, getFollowingProgress} from '../../redux/user-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
      this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChenged = (pageNumber) => {
      this.props.getPage(this.props.pageSize, pageNumber);
    }

    unFollowChenged = (userId) => {
    	this.props.unFollowingThunk(userId);
    }

    followChenged = (userId) => {
      this.props.followingThunk(userId);
    }

    render() {
        return <>
            {this.props.isLoading && <Preloadedr/>}
            <Users {...this.props} onPageChenged={this.onPageChenged} unFollowChenged={this.unFollowChenged} followChenged={this.followChenged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getTheUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
	      followingProgress: getFollowingProgress(state)
    }
}

export default compose (
  connect(mapStateToProps, {getUsers, getPage, followingThunk, unFollowingThunk}),
  notAuthRedirect
) (UsersContainer);