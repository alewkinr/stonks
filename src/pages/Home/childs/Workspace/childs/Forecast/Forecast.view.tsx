import styles from "./Forecast.style.css";

import React from "react";
import { ForecastProps } from "./Forecast";
import { Button } from "../../../../../../components/Button";

export const ForecastView: React.FC<ForecastProps> = (props) => {
    const {summery, profit, percent} = props;

    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <div className={styles.label}>{"прогноз"}</div>
                <div className={styles.forecast}>
                    <div className={styles.totalAmount}>
                        <div className={styles.money}>{summery}</div>
                        <div className={styles.label}>{"Итоговая сумма"}</div>
                    </div>
                    <div className={styles.profit}>
                        <div className={styles.money}>{`+ ${profit}`}</div>
                        <div className={styles.label}>{"Итоговая сумма"}</div>
                    </div>
                    <div className={styles.profitPercentage}>
                        <div className={styles.percent}>{percent}</div>
                        <div className={styles.label}>{"Итоговая сумма"}</div>
                    </div>
                </div>
                <Button name="Консультация" type="negative" className={styles.button} />
            </div>
        </div>
    );
};
