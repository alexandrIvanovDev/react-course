import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                <div className={styles.links}>
                    <Link className={styles.link} to="/posts">Посты</Link>
                    <Link className={styles.link} to="/about">О нас</Link>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};