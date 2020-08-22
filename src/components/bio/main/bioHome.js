import React, { Fragment, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import firebase from "firebase/app";

import styles from "./bioHome.module.css";

import BioBasicInfo from "../basic/bioBasicInfo";
import AllPhotos from "../photos/allPhotos";
import DefaultPhotos from "../photos/defaultPhotos";
import Auth from "../photos/auth";
import BioContact from "../contact/bioContact";
import BioAnchor from "./bioAnchor";

export default function BioHome(props) {
  let [user, setUser] = useState();
  firebase
    .auth()
    .onAuthStateChanged((user) => (user ? setUser(true) : setUser(false)));
  return (
    <Fragment>
      <div className={styles.anchorDiv}>
        <BioAnchor />
      </div>
      <div className={styles.internalDivs}>
        <Switch>
          <Redirect exact from={`/bio`} to="/bio/info" />
          <Route path={`/bio/info`} component={BioBasicInfo} />
          <Route path={`/bio/photos`}>
            <Route path={`/bio/photos`} exact>
              {user ? <AllPhotos /> : <DefaultPhotos />}
            </Route>
            <Route path={`/bio/photos/auth`} exact component={Auth} />
          </Route>
          <Route path={`/bio/contact`} component={BioContact} />
        </Switch>
      </div>
    </Fragment>
  );
}
