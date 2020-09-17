import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../../../../../../store";
import { setForecastPeriod } from "../../../../../../../../store/Account/Account.actions";
import { ForecastPeriodView } from "./ForecastPeriod.view";

type ForecastPeriodState = {
	forecastPeriod: number;
};

type ForecastPeriodDispatch = {
	setForecastPeriod: typeof setForecastPeriod;
};

export type ForecastPeriodProps = ForecastPeriodState & ForecastPeriodDispatch;

const ForecastPeriod: React.FC<ForecastPeriodProps> = (props) => {
	return <ForecastPeriodView {...props} />
}

const mapStateToProps = (state: AppState): ForecastPeriodState => {
	const {forecastPeriod} = state.account;

	return {forecastPeriod};
}

const mapDispatchToProps: ForecastPeriodDispatch = {
	setForecastPeriod,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastPeriod);
