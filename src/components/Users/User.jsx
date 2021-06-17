import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/User image.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
         <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {unfollow(user.id) }}>
                            Unfollow</button>
                        : <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {follow(user.id) }}>
                            Follow</button>}
                </div>
            </span>
                <span>
                <spa>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </spa> 
                <spa>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </spa>
            </span>
            </div>)
}

export default User;