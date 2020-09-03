import React, { useState } from "react";

import styles from "./authUI.module.css";

export default function AuthUI(props) {
  let [nameValue, setNameValue] = useState("");
  let [codeValue, setCodeValue] = useState("");

  function handleSignIn(event) {
    event.preventDefault();
    props.signInPressed(nameValue, codeValue);
  }

  return (
    <form className={styles.form} onSubmit={(event) => handleSignIn(event)}>
      <label>
        <div>Write down your email</div>
        <input
          type="text"
          value={nameValue}
          onChange={(event) => setNameValue(event.target.value)}
        />
      </label>

      <label>
        <div>Short Code</div>
        <input
          type="text"
          value={codeValue}
          onChange={(event) => setCodeValue(event.target.value)}
        />
      </label>

      <input type="submit" value="Sign in" />
    </form>
  );
}
