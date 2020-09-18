import React from "react";
import { BarChartView } from "./BarChart.view";

type BarChartState = {
    data?: (string | Date | number)[][];
};

export type BarChartProps = BarChartState;

export const BarChart: React.FC<BarChartProps> = (props) => {
    return <BarChartView {...props} />;
};

BarChart.defaultProps = {
    data: [
        ["Дата", "Облигации", "Свободные средства"],
        [new Date(2020, 5, 1), 1000, 400],
        [new Date(2020, 7, 1), 1170, 460],
        [new Date(2020, 9, 1), 1300, 520],
        [new Date(2020, 12, 1), 1730, 800],
    ],
};
