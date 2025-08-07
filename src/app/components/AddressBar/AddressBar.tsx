"use client";

import React from "react";
import styles from "./AddressBar.module.css";

const AddressBar: React.FC = () => {
  return (
    <div className={styles["address-bar"]}>
      <input
        type="text"
        placeholder="https://example.com"
        className={styles["address-input"]}
        readOnly
      />
    </div>
  );
};

export default AddressBar;
