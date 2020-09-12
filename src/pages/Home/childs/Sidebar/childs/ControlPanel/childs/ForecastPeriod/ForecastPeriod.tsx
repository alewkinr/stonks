import React from "react";
import { ForecastPeriodView } from "./ForecastPeriod.view";

type ForecastPeriodState = { /* your states */ };

export type ForecastPeriodProps = ForecastPeriodState;

export const ForecastPeriod: React.FC<ForecastPeriodProps> = (props) => {
	return <ForecastPeriodView {...props} />
}
