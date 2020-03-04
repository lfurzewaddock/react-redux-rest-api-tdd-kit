import React from "react";

import ContChart from "./ContChart";
import ContBarChart from "./ContBarChart";

import styles from "./comp-app.module.css";

const CompApp = () => {
  return (
    <section className={styles.sectionContainer}>
      <article className={styles.articleContainer}>
        <ContChart />
        <ContBarChart />
      </article>
    </section>
  );
};

export default CompApp;
