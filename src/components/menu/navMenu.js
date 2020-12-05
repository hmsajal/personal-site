import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.navList}>{
      ['bio', 'career', 'blog']
        .map((item, index) => (
          item === 'blog'
            ?
            <a href="https://blog.hmsajal.com" className={styles.link}>{item}</a>
            :
            <NavLink key={index} className={styles.link} to={`/${item}`}>
              {item}
            </NavLink>
        ))}
    </nav>
  );
}
