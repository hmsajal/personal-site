import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.navList}>
      <NavLink className={styles.link} to="/bio">
        Bio
      </NavLink>

      <NavLink className={styles.link} to="/career">
        Career
      </NavLink>
      <a className={styles.link} href="https://blog.hmsajal.com">
        Blog
      </a>
    </nav>
  );
}
