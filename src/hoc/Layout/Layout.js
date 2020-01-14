import React from "react";
import styles from "./Layout.module.scss";
import Header from "../../component/Header/Header";
import Sidebar from "../../component/Sidebar/Sidebar";
function Layout(props) {
  return (
    <div className={styles["layout"]}>
      <div className={styles["header"]}>
        <Header />
      </div>
      <div className={styles["content"]}>
        <nav className={styles["sidebar"]}>
          <Sidebar />
        </nav>
        <main className={styles["hotel-view"]}>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
