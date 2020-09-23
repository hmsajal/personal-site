import React from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.scss";
import Nav from "../menu/navBar";
import HomeInfo from "./homeInfo";
import ProfileLinks from "../common/profileLinks";
import SButton from "../common/sbutton";

function Home() {
  return (
    <div className={styles.homeDiv}>
      <div className={styles.nameNavDiv}>
        <div className={styles.name}>hmsajal</div>
        <Nav />
      </div>
      <div className={styles.infoDiv}>
        <HomeInfo />
      </div>
      <div className={styles.buttons}>
        <SButton
          url="https://drive.google.com/file/d/1EVu-E7OASiWEqWnnZegXnB0zMpJHcPUj/view?usp=sharing"
          text="Resume"
          buttonClass={styles.resumeButton}
        />
        <Link to="/bio/contact">
          <button className={styles.contactButton}>Contact</button>
        </Link>
      </div>
      <div className={styles.prolinkDiv}>
        <ProfileLinks icolor="gray" iconSize={22} width="320px" />
      </div>
    </div>
  );
}

export default Home;
