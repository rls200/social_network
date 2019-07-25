import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const UsersContainer = () => {

}