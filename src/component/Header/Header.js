import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/img/logo.png";
import Icon from "../../assets/img/sprite.svg";
import User from "../../assets/img/user.jpg";
function Header() {
  return (
    <React.Fragment>
      <img src={Logo} alt="trillo" className={styles["logo"]} />

      <form action="#" className={styles["search"]}>
        <input
          type="text"
          className={styles["search__input"]}
          placeholder="Search hotels"
        />
        <button className={styles["search__button"]}>
          <svg className={styles["search__icon"]}>
            <use xlinkHref={`${Icon}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className={styles["user-nav"]}>
        <div className={styles["user-nav__icon-box"]}>
          <svg className={styles["user-nav__icon"]}>
            <use xlinkHref={`${Icon}#icon-bookmark`}></use>
          </svg>
          <span className={styles["user-nav__notification"]}>7</span>
        </div>
        <div className={styles["user-nav__icon-box"]}>
          <svg className={styles["user-nav__icon"]}>
            <use xlinkHref={`${Icon}#icon-chat`}></use>
          </svg>
          <span className={styles["user-nav__notification"]}>13</span>
        </div>
        <div className={styles["user-nav__user"]}>
          <img
            src={User}
            alt="User"
            className={styles["user-nav__user-photo"]}
          />
          <span className={styles["user-nav__user-name"]}>Leo</span>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
