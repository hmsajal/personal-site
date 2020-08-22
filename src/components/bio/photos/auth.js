import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

import AuthUI from "./authUI";

export default () => {
  let history = useHistory();

  const getSignInData = (name, pass) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(name, pass);
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      history.push("/bio/photos");
    }
  });

  return <AuthUI signInPressed={(name, pass) => getSignInData(name, pass)} />;
};
