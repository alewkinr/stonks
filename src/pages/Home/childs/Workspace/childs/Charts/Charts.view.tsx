import styles from "./Charts.style.css";

import React from "react";
import { ChartsProps } from "./Charts";

import { BarChart } from "../../../.././../../components/BarChart";

export const ChartsView: React.FC<ChartsProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={`${styles.item} ${styles.active}`}>
                    {"Доходность"}
                </div>
                <div className={styles.item}>{"Состав"}</div>
            </div>
            <BarChart />
        </div>
    );
};
