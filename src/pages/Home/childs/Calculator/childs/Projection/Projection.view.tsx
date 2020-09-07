import styles from "./Projection.style.css";

import React from "react";
import { ProjectionProps } from "./Projection";

import { Cash } from "../../../../../../components/Cash";
import { Profit } from "../../../../../../components/Profit";
import { Label } from "../../../../../../components/Label";
import { Calendar } from "../../../../../../components/Calendar";

export const ProjectionView: React.FC<ProjectionProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerRow}>
        <div className={styles.title}> {"Прогноз"} </div>
        <Calendar />
      </div>
      <div className={styles.containerRow}>
        <div className={styles.item}>
          <Cash value="1 783 967" currency="ruble" />
          <Label
            name="Итоговая сумма"
            description="Сумма вложенных средств со всеми пополнениями"
          />
        </div>
        <div className={styles.item + " " + styles.profit}>
          <Profit value="567 000" currency="ruble" percent="5.08" />
          <Label
            name="Прибыль"
            description="Чистая прибыль при данных вложениях"
          />
        </div>
      </div>
    </div>
  );
};
