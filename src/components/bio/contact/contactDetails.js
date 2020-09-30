import React from "react";

import styles from "./contactDetails.module.css";

export default function ContactDetails() {
  return (
    <div className={styles.detailsMain}>
      <div className={styles.contactInfoHeader}>
        <div>My contact Information</div>
      </div>

      <div className={styles.mainInfo}>
        <div className={styles.phnName}>Phone</div>
        <div className={styles.phone}>01672429529</div>
        <div className={styles.addrName}>Address</div>
        <div className={styles.addr}>Dhaka, Bangladesh</div>
        <div className={styles.msgName}>Skype</div>
        <div className={styles.msg}>live:sajal.hm_1</div>
        <div className={styles.emailName}>Email</div>
        <div className={styles.email}>sajal.hm@gmail.com</div>
        <div className={styles.socialName}>LinkedIn</div>
        <div className={styles.social}>
          <a href="https://linkedin.com/in/hmsajal" target="_blank">
            hmsajal
          </a>
        </div>
      </div>

      <div className={styles.contactIcons}></div>
    </div>
  );
}
