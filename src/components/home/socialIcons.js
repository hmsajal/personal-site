import React from "react";

import linkedin from "../../assets/icons/Social_Icons/linkedin.png";
import github from "../../assets/icons/Social_Icons/github.png";
import twitter from "../../assets/icons/Social_Icons/twitter.png";
import skype from "../../assets/icons/Social_Icons/skype.png";

import styles from "./socialIcons.module.scss";

const myProfile = {
  names: ["linkedin", "github", "twitter", "skype"],
  items: [linkedin, github, twitter, skype],
  urls: {
    linkedin: "https://linkedin.com/in/hmsajal",
    github: "https://github.com/hmsajal",
    twitter: "https://twitter.com/sajal_here",
    skype: "skype:sajal.hm_1?chat",
  },
};

const SocialIcons = () => {
  return (
    <div className={styles.main}>
      {myProfile.names.map((name, key) => {
        return (
          <a key={key} href={myProfile.urls[name]}>
            <img src={myProfile.items[key]} alt={name} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
