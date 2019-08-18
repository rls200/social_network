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
    return <div>
        <div className={UsersCss.pagination}>
            {pages.map((p, index) =>
                p <= 10 && <span
                    key={index}
                    onClick={() => props.onPageChenged(p)}
                    className={props.currentPage === p ? UsersCss.pagination__active : undefined}>{p}
                    </span>
            )}
        </div>
        {
            props.users.map((u, index) =>
                <div key={index} className={UsersCss.users}>
                    <div className={UsersCss.users__avatarFollow}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    className={UsersCss.Users__avatar}
                                    src={u.photos.small != null ? u.photos.small : avatarPhoto}
                                    alt={'user-avatar'}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollowChenged(u.id)
                                }} className={UsersCss.Users__button} disabled={props.followingProgress}>UNFOLLOW</button> :
                                <button onClick={() => {
                                    props.followChenged(u.id)
                                }} className={UsersCss.Users__button} disabled={props.followingProgress}>FOLLOW</button>}

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