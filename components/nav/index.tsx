import styles from './nav.module.scss';
import NavLink from '../Link';
import React, { Children, useState, useEffect } from 'react';

import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';


export default function Nav() {

    const [menuIsExpanded, setMenuIsExpanded] = useState(false);


    return (
        <>
            <nav className={menuIsExpanded ? `${styles.container} ${styles.expanded}` : `${styles.container}`}>
                <h1 className={styles.logo}>Alan Siqueira</h1>

                <div onClick={() => setMenuIsExpanded(!menuIsExpanded)} className={styles.toggler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={styles.navlinks}>
                    <li>
                        <NavLink activeClassName={styles.active} href='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} href='/work'>
                            My Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} href='/blog'>
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles.social}>
                    <li><a href="#"><FaGithub /></a></li>
                    <li><a href="#"><FaLinkedin /></a></li>
                    <li><a href="#"><FaDribbble /></a></li>
                </ul>
            </nav>
        </>
    )
}