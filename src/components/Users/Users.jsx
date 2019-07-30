import React from 'react';
import UsersCss from './Users.module.css';
import * as axios from 'axios';
import avatarPhoto from '../../assets/images/personal-user-illustration-@2x.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div>
            {
                this.props.users.map( u =>
                    <div key={u.id} className={UsersCss.users}>
                        <div className={UsersCss.users__avatarFollow}>
                            <div><img className={UsersCss.Users__avatar} src={ u.avatar != null ? u.avatar : avatarPhoto }/></div>
                            <div>
                                {u.followed ?
                                    <button onClick={ () => {this.props.unFollow(u.id)} } className={UsersCss.Users__button}>UNFOLLOW</button> :
                                    <button onClick={ () => {this.props.follow(u.id)} } className={UsersCss.Users__button}>FOLLOW</button>}

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
}
export default Users;