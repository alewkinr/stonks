import React from "react";
import { connect } from "react-redux";
import { solvingForecastSumsCalendarAndChartData } from "../../../../../../common/compute";
import { AccountType } from "../../../../../../enums/AccountType";
import { AppState } from "../../../../../../store";
import { convertToFormat } from "../../../Sidebar/childs/ControlPanel/childs/OriginalAmount/handlers/ConvertToFormat";
import { ForecastView } from "./Forecast.view";

type ForecastState = {
	summery: string;
	profit: string;
	percent: number;
};

export type ForecastProps = ForecastState;

const Forecast: React.FC<ForecastProps> = (props) => {
	return <ForecastView {...props} />
}

const mapStateToProps = (state: AppState): ForecastState => {
	const {
        sum,
        profit: profitNumber,
        percent,
    } = solvingForecastSumsCalendarAndChartData(
        state.portfolio.bonds,
        state.portfolio,
        Number(state.account.originalAmount),
        Number(state.account.depositingFunds),
        Number(state.account.forecastPeriod),
        state.account.accountType === AccountType.INDIVIDUAL_INVESTMENT,
        state.account.reinvestment,
    );

	return {summery: convertToFormat(sum.toString()), profit: convertToFormat(profitNumber.toString()), percent};
}

export default connect(mapStateToProps)(Forecast);
