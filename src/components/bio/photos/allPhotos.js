import React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import MyCarousel from "./myCarousel";
import styles from "./allPhotos.module.css";

export default function AllPhotos() {
  let history = useHistory();

  const signOutPressed = () => {
    firebase
      .auth()
      .signOut()
      .then(() => history.push("/bio/photos"))
      .catch((error) => console.log(error));
  };
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        Click on any photo to see photos in a larger view.
      </div>
      <div className={styles.items}>
        You are successfully signed in. But no photos uploaded yet.
        <br />
        <br />
        Photos will be uploaded soon.
      </div>
      <div className={styles.button}>
        <button onClick={() => signOutPressed()}>Sign out</button>
      </div>
    </div>
  );
}
