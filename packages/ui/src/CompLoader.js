import React from "react";
import { ClockLoader } from "react-spinners";

import styles from "./comp-loader.module.css";

const compLoader = () => {
  return (
    <div className={styles.loader}>
      <ClockLoader sizeUnit="px" size={250} color="#272d2d" />
    </div>
  );
};

export default compLoader;
