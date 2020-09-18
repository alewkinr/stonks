import React from "react";
import { PieChartView } from "./PieChart.view";

type PieChartState = {
    data? : (string|number)[][]};

export type PieChartProps = PieChartState;

export const PieChart: React.FC<PieChartProps> = (props) => {
    return <PieChartView {...props} />;
};

PieChart.defaultProps = {
    data: [
        ["Облигация", "Сумма"],
        ["Тинькофф", 10000],
        ["Сбербанк", 100000],
        ["ХомеКредит", 30000],
    ]
}