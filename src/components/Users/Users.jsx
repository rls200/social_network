import React from 'react';
import UsersCss from './Users.module.css';
import avatarPhoto from '../../assets/images/personal-user-illustration-@2x.png';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    debugger
    return <div>
        <div className={UsersCss.pagination}>
            {pages.map(p =>
                p <= 10 && <span
                    onClick={() => props.onPageChenged(p)}
                    className={props.currentPage === p && UsersCss.pagination__active}>{p}
                    </span>
            )}
        </div>
        {
            props.users.map(u =>
                <div key={u.id} className={UsersCss.users}>
                    <div className={UsersCss.users__avatarFollow}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    className={UsersCss.Users__avatar}
                                    src={u.photos.small != null ? u.photos.small : avatarPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }} className={UsersCss.Users__button}>UNFOLLOW</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }} className={UsersCss.Users__button}>FOLLOW</button>}

                        </div>
                    </div>
                    <div className={UsersCss.users__info}>
                        <div className={UsersCss.users__info__nameStatus}>
                            <div><p><strong>{u.name}</strong></p></div>
                            <div><p>{u.status}</p></div>
                        </div>
                        <div className={UsersCss.users__info__locCountry}>
                            <div><p>{/*u.location.sity*/}</p></div>
                            <div><p>{/*u.location.country*/}</p></div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}
export default Users;