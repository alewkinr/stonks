import styles from "./BarChart.style.css";

import React from "react";
import { BarChartProps } from "./BarChart";
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
                        title: "Сумма портфеля",
                    },
                    hAxis: {
                        gridlines: {
                            interval: 5,
                        },
                    },

                    isStacked: true,
                    legend: { position: "top", maxLines: 5 },
                    colors: ["#3498db", "#34495e"],
                }}
                rootProps={{ "data-testid": "2" }}
            />
        </div>
    );
};
