import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import MyCarousel from "./myCarousel";
import styles from "./photos.module.css";

export default function DefaultPhotos() {
  let { url } = useRouteMatch();

  function fetching() {
    fetch("https://photoslibrary.googleapis.com/v1/albums", {
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className={styles.main}>
      <div className={styles.name}>My Photos</div>
      <div className={styles.text}>
        {`*Wanna see more photos? `}
        <Link
          to={`${url}/auth`}
          style={{ textDecoration: "underline", color: "green" }}
        >
          SIGN IN
        </Link>
        {` with proper credentials. Click on any photo to see in large size.`}
      </div>
      <MyCarousel />
    </div>
  );
}
