"use client";

import React from "react";

import styles from "./BrowserWindow.module.css";
import TopBar from "../ TopBar/TopBar";
import NewTabPage from "../NewTabPage/NewTabPage";

const BrowserWindow = () => {
  return (
    <div className={styles["browser-window-container"]}>
      <TopBar />
      <div className={styles["content-area"]}>
        <NewTabPage />
      </div>
    </div>
  );
};

export default BrowserWindow;
