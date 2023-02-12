import React from "react";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Buttons from "../Buttons";

import styles from "./AsideBar.module.css";
 

function AsideBar() {
  return (
    <aside className={styles.aside_bar}>
      <Profile label="Henry Jabbawockiez" img="/img/avatar.png"/>
      <Navigation />
      <Buttons label="LOG OUT" icon="/img/power.svg"/>
    </aside>
  );
}

export default AsideBar;
