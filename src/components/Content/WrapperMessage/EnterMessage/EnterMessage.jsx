import { useEffect } from "react";
import { useState } from "react";
import styles from "./EnterMessage.module.css";
import Picker, {SKIN_TONE_MEDIUM_DARK} from 'emoji-picker-react';

function EnterMessage({ setMessage }) {
  const [input, setInput] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)
  // useEffect(() => {
  //    setMessage((message) => {
  //      return [
  //        ...message,
  //        {
  //          who: "you",
  //          message: "Okay, send out.",
  //          time: "3 days ago",
  //        },
  //      ];
  //    });
  //  }, []);

  function text(event) {
    setInput(event.target.value)
  }

  function Em(){
    setShowEmoji(val=> !val)
  }

  function sendText() {
    // console.log(input)
    if(input.trim().length == 0) {
      alert("Введите соощение")
    }else {
      setMessage((message)=>{
        return [
          ...message,
          {
            who: "i",
            message: input,
            time: "1 sec ago"
          }
        ]
      })
    }
    let inp = document.querySelector(".EnterMessage_enter-message-input__jM96G")
    inp.value = ""
    
  }

  function onEmojiClick(event, emojiData){
    console.log(emojiData)
    // setInput((inp)=> inp+emojiData)
  }

  console.log(showEmoji)
  return (
   
    <>
     <div className={styles["enter-message"]}>
      <div className={styles["enter-message-wrapper"]}>
        <button className={styles["enter-icon"]} type="button">
          <img src="/img/plus.svg" />
        </button>
      </div>
      <input
        type="text"
        className={styles["enter-message-input"]}
        placeholder="Type a message here"
        onChange={text}
      ></input>
      <div className={styles["enter-message-wrapper"]}>
        <img src="/img/smile_icon.png" onClick={Em}/>

        <button className={styles["enter-icon"]} type="button" onClick={sendText}>
          <img src="/img/navigation-2.svg" />
        </button>
        
      </div>
    </div>
   
    </>
  );
}

export default EnterMessage;
