import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./socialIcons";

import styles from "./home.module.scss";

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
          Hi, I am Hasan Mahmud Sajal. I am a front-end web developer and
          JavaScript is my de facto programming language for developing
          applications. This page is a gateway to all of my online portfolios.
          You'll get to know different aspects of me by clicking on different
          links in this page. Please{" "}
          <a href="mailto:sajal.hm@gmail.com">mail me</a>, if you want to
          contact directly.
        </div>
        <div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Home;
