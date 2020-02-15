import React from "react";

import ContChart from "./ContChart";

import styles from "./comp-app.module.css";

const CompApp = () => {
  return (
    <section className={styles.sectionContainer}>
      <article className={styles.articleContainer}>
        <ContChart />
      </article>
    </section>
  );
};

export default CompApp;
