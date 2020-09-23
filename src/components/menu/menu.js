import React from "react";
import { Link } from "react-router-dom";

import NavMenu from "./navMenu";
import NavBar from "./navBar";
import styles from "./menu.module.scss";

export default function Menu(props) {
  return (
    <div className={styles.mainDiv} id="menu">
      <Link className={styles.myName} to="/">
        HASAN MAHMUD
      </Link>
      <div className={styles.navMenu}>
        <NavMenu />
      </div>
      <div className={styles.navBar}>
        <NavBar />
      </div>
    </div>
  );
}
