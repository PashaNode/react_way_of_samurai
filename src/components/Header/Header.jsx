import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqW9VP2Iwog0iifrLBBO--RMdGP132i_z6w&usqp=CAU' />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
              : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;