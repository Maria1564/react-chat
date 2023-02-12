import React from "react";
import WrapperChats from "./WrapperChats/index";
import WrapperMessage from "./WrapperMessage/index";
import {Route, Routes} from  "react-router-dom"

import styles from "./Content.module.css"

const chat = [
  {
    id: 1,
    name: "Luy Robin",
    status: "writes",
    text: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ",
    icon: "/img/user1.png",
    statusIcon: "/img/writes.png",
    time: "1 minute ago",
    totalMes: "/img/total-2.svg",
    files: [],
  },
  {
    id: 2,
    name: "Jared Sunn",
    status: "record voice",
    text: "Voice message (01:15)",
    icon: "/img/user2.png",
    statusIcon: "/img/Rec_Icon.png",
    time: "1 minute ago",
    totalMes: "/img/total-1.svg",
    files: ["/img/Files.png", "/img/Photo.png"],
  },
  {
    id: 3,
    name: "Nika Jerrardo",
    status: "last online 5 hours ago",
    text: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    icon: "/img/user3.png",
    statusIcon: "",
    time: "3 days ago",
    totalMes: "",
    files: [],
  },
  {
    id: 4,
    name: "David Amrosa",
    status: "last online 5 hours ago",
    text: "Hi)",
    icon: "/img/user4.png",
    statusIcon: "",
    time: "3 days ago",
    totalMes: "",
    files: [],
  },
];

let searchChat = [...chat]


function Content() {
  return (
    <div className={styles.content}>
      <WrapperChats searchChat={searchChat}/>
      <Routes>
        <Route path="/chat/:id/*"  element={<WrapperMessage chat={chat}/>}/>
      </Routes>
      {/* <WrapperMessage /> */}
    </div>
  );
}

export default Content;
