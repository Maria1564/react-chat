import React from "react";
// import Buttons from "../../../Buttons";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles['header-title']}>Chats</h2>
      <button className={styles["chat-btn"]} type="button" >
      <img src="/img/plus.svg" />
       Creat New Chat</button>
    </header>
  );
}

export default Header;
