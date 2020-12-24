import React from "react";

import styles from "./bioContact.module.scss";

const BioContact = () => {
  return (
    <form className={styles.form}>
      <h2>CONTACT ME</h2>
      <p type="Your Name:">
        <input required placeholder="Write your name here.."></input>
      </p>
      <p type="Your Email:">
        <input
          required
          placeholder="Let me know how to contact you back.."
        ></input>
      </p>
      <p type="Message:">
        <input placeholder="What would you like to tell me.."></input>
      </p>
      <button>Send Message</button>
      <div className={styles.email}>MY EMAIL: sajal.hm@gmail.com</div>
    </form>
  );
};

export default BioContact;
