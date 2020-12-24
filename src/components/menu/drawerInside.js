import React from "react";
import { NavLink } from "react-router-dom";
import { List, ButtonBase } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@material-ui/icons/Close";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode, faRss } from "@fortawesome/free-solid-svg-icons";

import styles from "./drawerInside.module.scss";

const LinkItem = ({ index, text }) => {
  return (
    <div className={styles.iconText}>
      <span>
        <FontAwesomeIcon
          icon={index === 0 ? faUser : index === 1 ? faCode : faRss}
          style={{ fontSize: "22px", color: "#c42" }}
        />
      </span>
      <span>{text}</span>
    </div>
  );
};

const DrawerInside = ({ setDrawer }) => {
  // const toggleDrawer = () => {
  //   setDrawerState();
  // };

  return (
    <div className={styles.child}>
      <ButtonBase
        style={{ margin: "50px 0px" }}
        onClick={() => setDrawer(false)}
      >
        <CloseIcon style={{ fontSize: 34 }} />
      </ButtonBase>
      <List className={styles.list}>
        {["bio", "career", "blog"].map((text, index) =>
          text === "blog" ? (
            <a href="https://blog.hmsajal.com" key={index}>
              <LinkItem index={index} text={text} />
            </a>
          ) : (
            <NavLink
              key={index}
              to={`/${text}`}
              onClick={() => setDrawer(false)}
            >
              <LinkItem index={index} text={text} />
            </NavLink>
          )
        )}
      </List>
    </div>
  );
};

export default DrawerInside;
