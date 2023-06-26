import React, {useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';
import styles from './Navbar.module.css'
import {AuthContext} from '../../../context/authContext';

export const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                <div className={styles.links}>
                    {isAuth && <>
                        <Link className={styles.link} to="/posts">Посты</Link>
                        <Link className={styles.link} to="/about">О нас</Link>
                        <span className={styles.link} onClick={logout}>Выйти</span>
                    </>}
                </div>
            </div>
            <Outlet/>
        </div>
    );
};