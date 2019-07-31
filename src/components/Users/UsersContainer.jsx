import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsLoading} from '../../redux/users-reduser';
import * as axios from "axios";
import Preloadedr from "../Common/Preloader/preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });


    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isLoading && <Preloadedr/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChenged={this.onPageChenged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount,setIsLoading})(UsersContainer);