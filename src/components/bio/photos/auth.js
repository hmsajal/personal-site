import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "reactstrap";
import firebase from "firebase/app";
import AuthUI from "./authUI";

import styles from "./auth.module.css";

export default () => {
  let history = useHistory();
  let [error, setError] = useState("");
  let [open, setOpen] = useState(false);

  const getSignInData = (name, pass) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(name, pass).catch((error) => {
      setOpen(true);
      setError(error.message);
    });
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      history.push("/bio/photos");
    }
  });

  return (
    <div className={styles.main}>
      <h3 className={styles.header}>My Photos</h3>
      <div className={styles.authIntro}>
        Some photos include my friends and family. So those are not open to all.
        <br />
        Just prove that I've let you go through.
      </div>
      <div className={styles.alert}>
        <Alert style={{ backgroundColor: "#ffb", fontSize: 15 }} isOpen={open}>
          {error}
        </Alert>
      </div>
      <AuthUI signInPressed={(name, pass) => getSignInData(name, pass)} />
    </div>
  );
};
