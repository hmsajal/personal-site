import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer, List, ButtonBase } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@material-ui/icons/Close";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode, faRss } from "@fortawesome/free-solid-svg-icons";

import styles from "./myDrawer.module.scss";

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

const MyDrawer = ({ state }) => {
  let [drawerState, setDrawerState] = React.useState(state);

  return (
    <Drawer
      open={drawerState}
      anchor="top"
      onClose={() => setDrawerState(false)}
    >
      <div className={styles.child}>
        <ButtonBase
          style={{ margin: "50px 0px" }}
          onClick={() => setDrawerState(false)}
        >
          <CloseIcon style={{ fontSize: 34 }} />
        </ButtonBase>
        <List className={styles.list}>
          {["bio", "career", "blog"].map((text, index) =>
            text === "blog" ? (
              <a href="https://blog.hmsajal.com">
                <LinkItem index={index} text={text} />
              </a>
            ) : (
              <NavLink
                key={index}
                to={`/${text}`}
                onClick={() => setDrawerState(false)}
              >
                <LinkItem index={index} text={text} />
              </NavLink>
            )
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default MyDrawer;
