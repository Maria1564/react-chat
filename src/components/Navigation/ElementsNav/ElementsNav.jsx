import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames"
import style from "./ElementNav.module.css";

function ElementsNav({ href, label, icon }) {
  return (
    <li className={style['nav-item']} key={href}>
      <NavLink
        className={({ isActive }) =>
          classNames(style.item, {[style['active-item']] : isActive })
        }
        to={href}
      >
        <img className={style["item-icon"]} src={icon} />
        {label}
      </NavLink>
    </li>
  );
}

export default ElementsNav;
