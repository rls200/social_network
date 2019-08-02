import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsLoading} from '../../redux/users-reduser';
import * as axios from "axios";
import Preloadedr from "../Common/Preloader/preloader";
import MockAdapter from "axios-mock-adapter";
import UserData from '../../assets/MockJson/UserData.js';


class UsersContainer extends React.Component {
    componentDidMount() {
        console.log(UserData);
        var mock = new MockAdapter(axios);

        mock.onGet(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .reply(200, UserData);

        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
            withCredentials: true
        })
            .then(response => {
                console.log("response-", response);
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
            });
    }

    unFollowChenged = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{
            withCredentials: true,
            headers: {
                'API-KEY' : '74b17300-dcf4-42a1-bf62-68b312250a1c'
            }
        })
            .then(response => {
                if(response.resultCode == 0) {
                    this.props.unFollow(userId)
                }
            })
    }

    followChenged = (userId) => {
    debugger
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY' : '74b17300-dcf4-42a1-bf62-68b312250a1c'
            }
        })
            .then(response => {

                if(response.resultCode == 0) {
                    this.props.follow(userId)
                }
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
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsLoading
})(UsersContainer);