import { useEffect, useState } from "react";
import Chat from "./Chat";
import Header from "./Header";
import Search from "./Search";

import styles from "./WrapperChats.module.css";


function WrapperChats({searchChat}) {
const [chat, setChat] = useState(searchChat)
  return (
    <div className={styles["wrapper-chat"]}>
          <Header />
          <Search setChat={setChat} chat={chat}/>
          <Chat chat={chat}/>
    </div>
  );
}

export default WrapperChats;
