import React from "react";
import styles from "./HeaderMessage.module.css";
import {useParams} from "react-router-dom";

function HeaderMessage({chat}) {
 

    return (
      <div className={styles['header-message']}>
          <div className={styles["chat-profile"]}>
            <img src={chat.icon} alt={chat.alt} />
            <div>
                <h4>{chat.name}</h4>
                <div className={styles["about-status"]}>
                  <img src={chat.statusIcon} />
                  {chat.status}
                </div>
            </div>   
          </div>
          <div className={styles["header-message-menu"]}>
            <button className={styles["icon-btn"]} type="button"><img src="/img/fix_file.svg"/></button>
            <button className={styles["icon-btn"]} type="button" ><img src="/img/more-vertical.svg"/></button>
          </div>
      </div>
    );
  }
  
  export default HeaderMessage;