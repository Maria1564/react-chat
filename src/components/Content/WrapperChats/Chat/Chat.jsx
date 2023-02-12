import React from "react";
import ItemsChat from "./ItemsChat/index";

import styles from "./Chat.module.css";

// const chat = [
//   {
//     name: "Luy Robin",
//     status: "writes",
//     text: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ",
//     icon: "img/user1.png",
//     statusIcon: "img/writes.png",
//     time: "1 minute ago",
//     totalMes: "img/total-2.svg",
//     files: [],
//   },
//   {
//     name: "Jared Sunn",
//     status: "record voice",
//     text: "Voice message (01:15)",
//     icon: "img/user2.png",
//     statusIcon: "img/Rec_Icon.png",
//     time: "1 minute ago",
//     totalMes: "img/total-1.svg",
//     files: ["img/Files.png", "img/Photo.png"],
//   },
//   {
//     name: "Nika Jerrardo",
//     status: "last online 5 hours ago",
//     text: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
//     icon: "img/user3.png",
//     statusIcon: "",
//     time: "3 days ago",
//     totalMes: "",
//     files: [],
//   },
//   {
//     name: "David Amrosa",
//     status: "last online 5 hours ago",
//     text: "Hi)",
//     icon: "img/user4.png",
//     statusIcon: "",
//     time: "3 days ago",
//     totalMes: "",
//     files: [],
//   },
// ];

function Chat({chat}) {

  return (
      <ul className={styles["ul-chat"]}>
        {chat.map(({ name, status, icon, text, time, statusIcon, totalMes, files, id}, index) => (
          <ItemsChat key={index} name={name} status={status} icon={icon} text={text} alt={name} time={time}
          totalMes={totalMes} statusIcon={statusIcon} files={files} id={id}/>
        ))}
      </ul>
  );
}

export default Chat;
