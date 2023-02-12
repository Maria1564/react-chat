import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ItemsChat.module.css"
import classNames from "classnames"


function ItemsChat({ status, text, icon, name, alt, time, statusIcon, files, totalMes, id }) {
  // (files.map((item)=>(
    // console.log(id)
  // )));
  // styles["chat-link"]
  return (
    <li className={styles["li-chat"]}>
      <NavLink  className={({ isActive }) =>
          classNames(styles["chat-link"], {[styles['active-chat']] : isActive })} 
      to={`/chat/${id}`}>
        <div className={styles["chat-mess"]}>
          <div className={styles["chat-profile"]}>
            <img src={icon} alt={alt} />
            <div className={styles.about}>
              <h4 >{name}</h4>
              <div className={styles["about-status"]}>
                <img src={statusIcon} />
                {status}
              </div>
            </div>
          </div>

          <div className={styles.time}>{time}</div>
        </div>
        <div className={styles["about-wrapper"]}>
        <div className={styles["about-text"]}>
          {text}
        </div>
        <img src={totalMes} />
        </div>
        
        <div className={styles["chat-files"]}>
        {files.map((item)=>(
          <div> <img src={item} /></div>
            ))}
        </div>
      </NavLink>
    </li>
  );

  // <img src={require('/images/image-name.png')} />
}

export default ItemsChat;
