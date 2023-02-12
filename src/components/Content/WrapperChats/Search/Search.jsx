import React from "react";
import { useState } from "react";
import styles from "./Search.module.css"

function Search({setChat, chat}) {
  const [copyChat, setCopyChat] = useState(chat)
  function searchPerson(event){
    let name = event.target.value
    
    let newArr = []
    // chat.forEach(elem => {
    //     arrName.push(elem.name)
    // });
    console.log(name)
    for(let i = 0; i < chat.length; i++){
      if(chat[i].name.includes(name)){
        newArr.push(chat[i])
      }
    }
    if(name == ""){
      console.log("ff")
      setChat(copyChat)
    }else{
      setChat(newArr)
    }
    console.log("newArr >", newArr)
    
  }
  return (
    <div>
      <input className={styles.search} type="text" placeholder="Search" onChange={searchPerson}/>
    </div>
  );
}

export default Search;
