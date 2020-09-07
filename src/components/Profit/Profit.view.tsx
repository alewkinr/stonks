import styles from "./Profit.style.css";

import React from "react";
import { ProfitProps } from "./Profit";

export const ProfitView: React.FC<ProfitProps> = (props) => {
  const { value, currency, percent } = props;

  return (
    <div className={styles.container}>
      <div className={styles.value}>{value}</div>
      <div className={`${styles.currency} ${styles[currency]}`}></div>
      <div className={styles.value}>| {percent} %</div>
    </div>
  );
};
