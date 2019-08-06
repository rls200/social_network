import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsLoading, toggleFollowingProgress} from '../../redux/users-reduser';
import * as axios from "axios";
import Preloadedr from "../Common/Preloader/preloader";
import { userApi } from "../../api/userApi/userApi";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
	      userApi.getUsers(this.props.pageSize, this.props.currentPage).then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            });
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsLoading(true);
	      userApi.getUsers(this.props.pageSize, pageNumber).then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.items);
            });
    }

    unFollowChenged = (userId) => {
    	this.props.toggleFollowingProgress(true);
	    userApi.unfollow(userId).then(response => {
                if(response.resultCode == 0) {
                    this.props.unFollow(userId)
                }
		            this.props.toggleFollowingProgress(false);
            })
    }

    followChenged = (userId) => {
	    this.props.toggleFollowingProgress(true);
	    userApi.follow(userId).then(response => {
                if(response.resultCode == 0) {
                    this.props.follow(userId)
                }
		            this.props.toggleFollowingProgress(false);
            })
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
	      followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsLoading,
		toggleFollowingProgress
})(UsersContainer);