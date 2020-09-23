import React from "react";
import { Link } from "react-router-dom";

import styles from "./homeInfo.module.scss";

function HomeInfo(props) {
  return (
    <div className={styles.main}>
      <p style={{ display: "inline" }}>
        An account of personal interests and information on{" "}
      </p>

      <Link to="/bio" className={styles.link} style={{ display: "inline" }}>
        Hasan Mahmud Sajal,
      </Link>

      <p style={{ display: "inline" }}> but it might interest you too.</p>
    </div>
  );
}

export default HomeInfo;
