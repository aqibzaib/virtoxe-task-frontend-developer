"use client";

import React, { useState } from "react";
import Tab from "../Tab/Tab";
import AddressBar from "../AddressBar/AddressBar";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSyncAlt,
  FaLock,
  FaStar,
  FaEllipsisV,
} from "react-icons/fa";
import styles from "./TopBar.module.css";

interface TabType {
  id: string;
  title: string;
}

const TopBar = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-1");

  const tabs: TabType[] = [
    { id: "tab-1", title: "New Tab" },
    { id: "tab-2", title: "Example.com" },
  ];

  return (
    <div className={styles["top-bar-container"]}>
      <div className={styles["tabs-section"]}>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      <div className={styles["address-bar-area"]}>
        <div className={styles["nav-icons"]}>
          <FaChevronLeft className={styles.icon} />
          <FaChevronRight className={`${styles.icon} ${styles.disabled}`} />
          <FaSyncAlt className={styles.icon} />
        </div>
        <AddressBar />
        <div className={styles["nav-icons"]}>
          <FaLock className={styles.icon} />
          <FaStar className={styles.icon} />
          <FaEllipsisV className={styles.icon} />
        </div>
      </div>

      <div className={styles["window-controls"]}>
        <div className={styles["control-button"]}>_</div>
        <div className={styles["control-button"]}>□</div>
        <div className={`${styles["control-button"]} ${styles.close}`}>×</div>
      </div>
    </div>
  );
};

export default TopBar;
