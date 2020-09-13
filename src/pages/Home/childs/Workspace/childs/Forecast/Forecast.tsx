import React from "react";
import { ForecastView } from "./Forecast.view";

type ForecastState = { /* your states */ };

export type ForecastProps = ForecastState;

export const Forecast: React.FC<ForecastProps> = (props) => {
	return <ForecastView {...props} />
}
