import React from "react";
import HeaderMessage from "./HeaderMessage/index";
import ContentMessage from "./ContentMessage/ContentMessage";
import EnterMessage from "./EnterMessage/index";

import {useParams} from "react-router-dom";

import styles from "./WrapperMessage.module.css";
import { useState } from "react";

function WrapperMessage({chat}) {
  const params = useParams();
  let selectChat = chat.filter((chat) => chat.id == params.id);
  let icon = selectChat[0].icon;
  const mess = [
      {
          icon,
          who: "you",
          message: "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.",
          time: "4 days ago",
      },
      {
          icon,
          who: "you",
          message: "Can I send you files?",
          time: "4 days ago",
      },
      {
            icon,
            who: "i",
            message: "Hey! Okay, send out.",
            time: "4 days ago",
        },
  ]

  const [message, setMessage] = useState(mess)
  console.log("message > ", message)
  return (
    <section className={styles["wrapper-message"]}>
      <HeaderMessage chat={selectChat[0]} />
      <ContentMessage chat={selectChat[0]} mess={message} />
      <EnterMessage setMessage={setMessage} />
    </section>
  );
}

export default WrapperMessage;