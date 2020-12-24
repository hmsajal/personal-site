import React from "react";

import { ButtonBase } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import MyDrawer from "./myDrawer";

export default function NavBar() {
  let [state, setState] = React.useState(false);

  return (
    <React.Fragment>
      <ButtonBase onClick={() => setState(true)}>
        <MenuIcon style={{ fontSize: 28 }} />
      </ButtonBase>
      <MyDrawer drawerState={state} />
    </React.Fragment>
  );
}
