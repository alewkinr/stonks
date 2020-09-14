import styles from "./BarChart.style.css";

import React from "react";
import { BarChartProps } from "./BarChart";
import { Label } from "../Label";

import { Chart } from "react-google-charts";

export const BarChartView: React.FC<BarChartProps> = (props) => {
    const { data } = props;
    return (
        <div className={styles.container}>
            <Chart
                width={"800px"}
                height={"300px"}
                chartType="ColumnChart"
                chartLanguage="ru"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    chart: {
                        title: "Company Performance",
                        subtitle: "Sales, Expenses, and Profit: 2014-2017",
                        bar: { groupWidth: "95%" },
                    },
                    chartArea: { width: "80%" },
                    isStacked: true,
                    legend: { position: "top", maxLines: 5 },
                    colors: ["#7A7285", "#00CC00"],
                }}
                rootProps={{ "data-testid": "2" }}
            />
        </div>
    );
};
