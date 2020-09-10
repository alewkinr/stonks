import React from "react";
import { ChartView } from "./Chart.view";

type ChartState = { /* your states */ };

export type ChartProps = ChartState;

export const Chart: React.FC<ChartProps> = (props) => {
	return <ChartView {...props} />
}
