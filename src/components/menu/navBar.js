import React from "react";
import { NavLink } from "react-router-dom";

import { Drawer, List, ButtonBase } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode, faRss } from "@fortawesome/free-solid-svg-icons";

import styles from "./navBar.module.css";

export default function NavBar() {
  let [drawerState, setState] = React.useState(false);

  return (
    <React.Fragment>
      <ButtonBase onClick={() => setState(true)}>
        <MenuIcon style={{ fontSize: 28 }} />
      </ButtonBase>
      <Drawer open={drawerState} anchor="top" onClose={() => setState(false)}>
        <DrawerChild toggleDrawer={() => setState(false)} />
      </Drawer>
    </React.Fragment>
  );
}

const DrawerChild = (props) => (
  <div className={styles.child}>
    <ButtonBase
      style={{ margin: "50px 0px" }}
      onClick={() => props.toggleDrawer()}
    >
      <CloseIcon style={{ fontSize: 34 }} />
    </ButtonBase>
    <List className={styles.list}>
      {["bio", "career", "blog"].map((text, index) => (
        <NavLink
          key={index}
          to={`/${text}`}
          onClick={() => props.toggleDrawer()}
        >
          <div className={styles.iconText}>
            <span>
              <FontAwesomeIcon
                icon={index === 0 ? faUser : index === 1 ? faCode : faRss}
                style={{ fontSize: "22px", color: "#c42" }}
              />
            </span>
            <span>{text}</span>
          </div>
        </NavLink>
      ))}
    </List>
  </div>
);
