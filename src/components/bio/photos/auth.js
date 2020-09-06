import React from "react";
import firebase from "firebase/app";
import { StyledFirebaseAuth } from "react-firebaseui";

import styles from "./auth.module.css";
import AllPhotos from "./allPhotos";

export default function Auth() {
  let [signedIn, setSignedIn] = React.useState(false);

  firebase
    .auth()
    .onAuthStateChanged((user) =>
      user ? setSignedIn(true) : setSignedIn(false)
    );

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return signedIn ? (
    <AllPhotos />
  ) : (
    <div className={styles.main}>
      <div className={styles.header}>
        Choose any of the following sign in methods.{" "}
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
