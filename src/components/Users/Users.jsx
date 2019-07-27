import React from 'react';
import UsersCss from './Users.module.css';

const Users = (props) => {
    return <div>
        {
            props.users.map( u =>
                <div key={u.id} className={UsersCss.users}>
                    <div className={UsersCss.users__avatarFollow}>
                        <div><img className={UsersCss.Users__avatar} src={u.avatar}/></div>
                        <div>
                            {u.followed ?
                                <button onClick={ () => {props.unFollow(u.id)} } className={UsersCss.Users__button}>UNFOLLOW</button> :
                                <button onClick={ () => {props.follow(u.id)} } className={UsersCss.Users__button}>FOLLOW</button>}

                        </div>
                    </div>
                    <div className={UsersCss.users__info}>
                        <div className={UsersCss.users__info__nameStatus}>
                            <div><p><strong>{u.fullName}</strong></p></div>
                            <div><p>{u.status}</p></div>
                        </div>
                        <div className={UsersCss.users__info__locCountry}>
                            <div><p>{u.location.sity}</p></div>
                            <div><p>{u.location.country}</p></div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}
export default Users;