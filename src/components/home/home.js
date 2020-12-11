import React from 'react';
import { Link } from 'react-router-dom'

import styles from './home.module.scss'

const Home = () => {
    return (
        <div className={styles.outerDiv}>
            <div className={styles.main}>
                <h2 className={styles.title}>Hasan Mahmud Sajal</h2>
                <div className={styles.menu}>
                    <Link to="/bio">Bio</Link>
                    <Link to="/career">Career</Link>
                    <a href="https://blog.hmsajal.com">Blog</a>
                </div>
                <div className={styles.social}></div>
                <div className={styles.para}>
                    Hi, I am Hasan Mahmud Sajal. I am a front-end software engineer and love to
                    code in JavaScript. This page is the gateway to all my online portfolios,
                    profiles and my other online activities. The links I have provided in this page
                    are important because you'll get to know different aspects of me by clicking on
                    different links in this page. If you want to contact me directly please
                    <a href="mailto:sajal.hm@gmail.com"> email</a> me.
                </div>
            </div>
        </div>
    )
};

export default Home
