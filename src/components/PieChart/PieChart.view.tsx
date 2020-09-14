import styles from "./PieChart.style.css";

import React from "react";
import { PieChartProps } from "./PieChart";
import { Label } from "../Label";

import { Chart } from "react-google-charts";

export const PieChartView: React.FC<PieChartProps> = (props) => {
    const {data} = props;
    return (
        <div className={styles.container}>
            <Chart
                width={"700px"}
                height={"300px"}
                chartType="PieChart"
                chartLanguage="ru"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    chart: {
                        title: "Состав портфеля",
                    },
                    is3D: true,
                }}
                rootProps={{ "data-testid": "2" }}
            />
        </div>
    );
};
