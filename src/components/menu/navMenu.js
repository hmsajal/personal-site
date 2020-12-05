import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.navList}>{
      ['bio', 'career', 'blog']
        .map((item, index) =>
          <NavLink key={index} className={styles.link} to={`/${item}`}>
            {item}
          </NavLink>
        )}
    </nav>
  );
}
