import React from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

function Profile({ label, img }) {
  return (
    <div className={styles.profile}>
      <img src={img} className={styles.avatar}/>
        <p className={styles.profile_text}>{label}</p>
    </div>
  );
}

export default Profile;
