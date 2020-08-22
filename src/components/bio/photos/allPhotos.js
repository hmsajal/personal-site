import React from "react";
import firebase from "firebase/app";

import MyCarousel from "./myCarousel";

export default function AllPhotos() {
  const signOutPressed = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <div>
        Click on any photo to see it and other ones in larger size through
        carousel.
      </div>
      <input type="submit" value="Sign out" onClick={signOutPressed} />
      <div>{/* <MyCarousel/> */}</div>
    </div>
  );
}
