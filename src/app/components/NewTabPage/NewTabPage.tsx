"use client";

import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6"; // Google Lens icon from Font Awesome
import styles from "./NewTabPage.module.css";

const NewTabPage = () => {
  return (
    <div className={styles["new-tab-page-container"]}>
      <div className={styles.logo}>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
          width="272"
          height="92"
        />
      </div>
      <div className={styles["search-bar-container"]}>
        <form className={styles["search-form"]}>
          <FaSearch className={styles["search-icon"]} />
          <input
            type="text"
            placeholder="Search Google or type a URL"
            className={styles["search-input"]}
          />
          <div className={styles["action-icons"]}>
            <FaMicrophone className={styles.icon} />
            <FaCamera className={styles.icon} />
          </div>
        </form>
      </div>
      <div className={styles.shortcuts}>
        <div className={styles.shortcut}>
          <div className={styles["shortcut-icon"]}>
            <div className={styles["chatgpt-icon"]}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
          <span>Chat Gpt</span>
        </div>
        <div className={styles.shortcut}>
          <div
            className={`${styles["shortcut-icon"]} ${styles["add-shortcut"]}`}
          >
            +
          </div>
          <span>Add shortcut</span>
        </div>
      </div>
    </div>
  );
};

export default NewTabPage;
