import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import Gallery from "react-photo-gallery";
import styles from "./defaultPhotos.module.css";

export default function DefaultPhotos() {
  let { url } = useRouteMatch();

  let photos = [
    {
      src: "https://live.staticflickr.com/213/491726079_4f46636859_b.jpg",
      id: 1,
      width: 3,
      height: 2,
    },
    {
      src: "https://live.staticflickr.com/2274/2349286145_4cbfb492e2_b.jpg",
      id: 2,
      width: 3,
      height: 2,
    },
    {
      src: "https://live.staticflickr.com/203/491702818_d9fd62baed_b.jpg",
      id: 3,
      width: 2,
      height: 3,
    },
    {
      src: "https://live.staticflickr.com/3015/2812930259_e3c8f60464_b.jpg",
      id: 4,
      width: 3,
      height: 2,
    },
    {
      src: "https://live.staticflickr.com/8633/16427939818_16782d0310_b.jpg",
      id: 5,
      width: 3,
      height: 2,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.name}>My Photos</div>
      <div className={styles.text}>
        Wanna see more photos? <Link to={`${url}/auth`}>SIGN IN</Link> with
        proper credentials. Click on any photo to see in large size.
      </div>
      <Gallery photos={photos} />
    </div>
  );
}
