import React from "react";
import { connect } from "react-redux";

import { ChartsView } from "./Charts.view";
import { AppState } from "../../../../../../store";
import { solvingForecastSumsCalendarAndChartData } from "../../../../../../common/compute";
import { AccountType } from "../../../../../../enums/AccountType";

type ChartsState = {
    onProfit?: boolean;
    barChartData?: (string | Date | number)[][];
    pieChartData?: (string | number)[][];
};

export type ChartsProps = ChartsState;

const Charts: React.FC<ChartsProps> = (props) => {
    return <ChartsView {...props} />;
};

Charts.defaultProps = {
    onProfit: true,
};

const mapStateToProps = (state: AppState): ChartsState => {
    const { bonds, portfolio } = state.portfolio;
    const {
        accountType,
        originalAmount,
        depositingFunds,
        forecastPeriod,
    } = state.account;

    const reinvestment = false;
    const {
        sum,
        porfit,
        percent,
        calendar,
        barChartData,
        pieChartData,
    } = solvingForecastSumsCalendarAndChartData(
        bonds,
        portfolio,
        Number(originalAmount),
        Number(depositingFunds),
        Number(forecastPeriod),
        accountType === AccountType.INDIVIDUAL_INVESTMENT,
        reinvestment
    );

    if (barChartData.length === 1) delete barChartData[0];
    return { barChartData, pieChartData };
};

export default connect(mapStateToProps)(Charts);
