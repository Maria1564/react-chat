import React from "react";
import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";


 function Buttons({ label, icon }) {
   return (
     <div className={styles.logout}>
       <img src={icon} />
       <button className={styles.btn}>{label}</button>
     </div>
    // <Link className={styles.link_logout} to="/logout" >
    //   <img className={styles.img_logout} src={icon} />
    //   {label}
    // </Link>

   );
 }


export default Buttons;
