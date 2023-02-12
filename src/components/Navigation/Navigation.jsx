import React from "react";
import ElementsNav from "./ElementsNav";


import styles from "./Navigation.module.css"

const navigation = [
  {
    href: "/home",
    label: "HOME",
    icon: "/img/home.svg",
  },

  {
    href: "/chat",
    label: "CHAT",
    icon: "/img/message-circle.svg",
  },

  {
    href: "/contact",
    label: "CONTACT",
    icon: "/img/contact.svg",
  },
  {
    href: "/notifications",
    label: "NOTIFICATIONS",
    icon: "/img/bell.svg",
  },
  {
    href: "/calendar",
    label: "CALENDAR",
    icon: "/img/calendar.svg",
  },
  {
    href: "/settings",
    label: "SETTINGS",
    icon: "/img/settings.svg",
  },
];




function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles['nav-list']}>
        {navigation.map(({ href, label, icon }) => (
       
            <ElementsNav href={href} icon={icon} label={label} />
        ))}
        
      </ul>
    </nav>
  );
}

export default Navigation;
