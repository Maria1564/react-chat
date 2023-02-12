import React, { createElement, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames"
import { useState } from "react";
import styles from "./ContentMessage.module.css"
import "./ContentBtn.css";


function ContentMessage({chat, mess}) {
    

const [arrBtns, setArrBtns] = useState([])
let arrButton = []
let arrBtn
    useEffect(()=>{
        let arrContentMes = document.querySelectorAll(".ContentMessage_dialog__PobWL")
        arrContentMes.forEach((mes)=>{
            if(mes.querySelector(".btn-delete") != null){
                mes.querySelector(".btn-delete").remove() 
            }
        })
        

        arrBtn = document.querySelectorAll(".ContentMessage_icon-btn__7MV1F")
        arrBtn.forEach((btn)=>(
        arrButton.push({
            button: btn,
            active: false
        })
       ))
    //    console.log(arrButton, arrBtns)
       setArrBtns(arrButton)
    }, [mess])
    let temp = false

    function deleteMes(event){
        
        let selectMes = event.target.closest(".ContentMessage_dialog__PobWL").querySelector("p").textContent
        mess.forEach((mes)=>{
            if(mes.message == selectMes){
                if(mes.who == "you"){
                    event.target.closest(".ContentMessage_content-message-you__m57CO").remove()
                }else{
                    event.target.closest(".ContentMessage_content-message-i__niJFD").remove()
                }
                
            }
        })

    }

    function selectedBtn (event) {
        
        let parentBtn = event.target.parentElement.parentElement
        let selected = event.target.parentElement
        let btnDelete = document.createElement("button")
        for(let i=0; i < arrBtns.length; i++){
            if(temp){
                arrBtns.map((btn)=>{
                    if(btn.active == temp && btn.button != selected){
                        btn.active = false
                        let btnDel = btn.button.parentElement.querySelector(".btn-delete")
                        btnDel.remove()
                    }
                })
            }
            if(selected == arrBtns[i].button){
                if(!arrBtns[i].active) {
                    arrBtns[i].active = true
                    btnDelete.textContent = "Удалить"
                    btnDelete.className = "btn-delete"
                    parentBtn.append(btnDelete)

                    //удаление сообщения
                    btnDelete.addEventListener("click", deleteMes)
                }else{
                    arrBtns[i].active = false
                    // console.log(parentBtn.querySelector(".btn-delete"))
                    parentBtn.querySelector(".btn-delete").remove()
                }
                temp = arrBtns[i].active
            }
        }    

    }

    return (
      <div className={styles["content-message"]} >
        {mess.map((mes, index)=>{
            if(mes.who === "you"){
                //если прошлое сообщение было тоже от другого пользователя то на этом сообщении иконка скрывается
                if(index != 0 && mess[index-1].who == mess[index].who){
                    return(
                        
                        <div key={index} className={styles["content-message-you"]}>
                            <div className={classNames(styles.dialog, styles.dialog2)} >
                                <div className={styles["dialog-wrapper"]}>
                                    <div className={styles["dialog-text"]}>
                                        <p>{mes.message}</p>
                                        
                                    </div>
                                    <div className={styles["dialog-time"]}>{mes.time}</div>
                                </div>
                                <button className={styles["icon-btn"]} type="button" onClick={selectedBtn}>
                                
                                    <img src="/img/more-horizontal.svg"></img>
                                </button>
                            </div>
                            
                        </div>
                    )
                }else{
                    return(
                        <div key={index} className={styles["content-message-you"]}>
                            <img width="36" height="36" src={chat.icon}/>
                            <div className={styles.dialog}>
                                <div className={styles["dialog-wrapper"]}>
                                    <div className={styles["dialog-text"]}>
                                        <p>{mes.message}</p>
                                        
                                    </div>
                                    <div className={styles["dialog-time"]}>{mes.time}</div>
                                </div>
                                <button className={styles["icon-btn"]} type="button" onClick={selectedBtn}>
                                    <img src="/img/more-horizontal.svg"></img>
                                </button>
                            </div>
                        </div>
                    )
                }
            }
            else{
                return(
                    <div key={index} className={styles["content-message-i"]}>
                        <div className={styles.dialog}>
                            <button onClick={selectedBtn} className={styles["icon-btn"]} type="button">
                                    <img src="/img/more-horizontal.svg"></img>
                            </button>
                            <div className={styles["dialog-wrapper"]}>
                                <div className={styles["dialog-text"]}>
                                    <p>{mes.message}</p>
                                </div>
                                <div className={styles["dialog-time"]}>{mes.time}</div>
                            </div>
                                
                        </div>
                    </div>
                )
            }
        })}

      </div>
    );
  }
  
  export default ContentMessage;