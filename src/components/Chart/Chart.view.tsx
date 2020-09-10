import styles from "./Chart.style.css";

import React from "react";
import { ChartProps } from "./Chart";
import { Label } from "../Label";

export const ChartView: React.FC<ChartProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}></div>
      <Label name="Для активации графиков необходимо добавить облицию в портфель" />
    </div>
  );
};
