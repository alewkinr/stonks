import styles from "./Charts.style.css";

import React from "react";
import { ChartsProps } from "./Charts";
import { BarChart } from "./childs/BarChart";
import { PieChart } from "./childs/PieChart";

export const ChartsView: React.FC<ChartsProps> = (props) => {
    const [onProfit, setonProfit] = React.useState(props.onProfit);

    function changeChart(barChart: boolean) {}

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div
                    className={`${styles.item} ${onProfit ? styles.active : ""}`}
                    onClick={() => {
                        setonProfit(true);
                        changeChart(true);
                    }}
                >
                    {"Доходность"}
                </div>
                <div
                    className={`${styles.item} ${onProfit ? "" : styles.active}`}
                    onClick={() => {
                        setonProfit(false);
                        changeChart(false);
                    }}
                >
                    {"Состав"}
                </div>
            </div>
            <div className={styles.charts}>
                {onProfit ? <BarChart /> : <PieChart />}
            </div>
        </div>
    );
};
