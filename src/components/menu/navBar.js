import React from "react";

import { ButtonBase, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import DrawerInside from "./drawerInside";

export default function NavBar() {
  let [drawerState, setDrawerState] = React.useState(false);

  return (
    <React.Fragment>
      <ButtonBase onClick={() => setDrawerState(true)}>
        <MenuIcon style={{ fontSize: 28 }} />
      </ButtonBase>
      <Drawer
        open={drawerState}
        anchor="top"
        onClose={() => setDrawerState(false)}
      >
        <DrawerInside setDrawer={(state) => setDrawerState(state)} />
      </Drawer>
    </React.Fragment>
  );
}
