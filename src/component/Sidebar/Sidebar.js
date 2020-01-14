import React from "react";
import styles from "./Sidebar.module.scss";
import Icon from "../../assets/img/sprite.svg";
function Sidebar() {
  return (
    <React.Fragment>
      <ul className={styles["side-nav"]}>
        <li
          className={[
            styles["side-nav__item"],
            styles["side-nav__item--active"]
          ].join(" ")}
        >
          <a href="#hello" className={styles["side-nav__link"]}>
            <svg className={styles["side-nav__icon"]}>
              <use xlinkHref={`${Icon}#icon-home`} />
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className={styles["side-nav__item"]}>
          <a href="#hello" className={styles["side-nav__link"]}>
            <svg className={styles["side-nav__icon"]}>
              <use xlinkHref={`${Icon}#icon-aircraft-take-off`} />
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className={styles["side-nav__item"]}>
          <a href="#hello" className={styles["side-nav__link"]}>
            <svg className={styles["side-nav__icon"]}>
              <use xlinkHref={`${Icon}#icon-key`} />
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className={styles["side-nav__item"]}>
          <a href="#hello" className={styles["side-nav__link"]}>
            <svg className={styles["side-nav__icon"]}>
              <use xlinkHref={`${Icon}#icon-map`} />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className={styles["legal"]}>
        &copy; 2017 by trillo. All rights reserved.
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
