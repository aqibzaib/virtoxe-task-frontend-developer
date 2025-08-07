"use client";

import React from "react";
import styles from "./Tab.module.css";

interface TabProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, isActive, onClick }) => {
  return (
    <div
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles["tab-title"]}>{title}</div>
      <div className={styles["tab-close"]}>×</div>
    </div>
  );
};

export default Tab;
