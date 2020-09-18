import React from "react";
import { connect } from "react-redux";

import { AppState } from "../../../../../../store";
import { CouponCalendarView } from "./CouponCalendar.view";
import { Bond } from "../../../../../../common/types";

import { solvingForecastSumsCalendarAndChartData } from "../../../../../../common/compute";
import { AccountType } from "../../../../../../enums/AccountType";

export type CouponCalendarPayment = {
    instrumentId: string;
    issuerLogoUrl: string;
    paymentDate: string;
    issuerName: string;
    couponPaymentAmount: number;
};

type CouponCalendarState = {
    bonds: { [instrumentId: string]: Bond };
    portfolio: { [instrumentId: number]: number };
    calendarData: Array<CouponCalendarPayment>; // Map<string, Array<CouponCalendarPayment>>;
};

export type CouponCalendarProps = CouponCalendarState;

const CouponCalendar: React.FC<CouponCalendarProps> = (props) => {
    return <CouponCalendarView {...props} />;
};

const mapStateToProps = (state: AppState): CouponCalendarState => {
    const { bonds, portfolio } = state.portfolio;
    const {
        accountType,
        originalAmount,
        depositingFunds,
        forecastPeriod,
        reinvestment,
    } = state.account;
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

    const calendarData = calendar;
    return { bonds, portfolio, calendarData };
};

export default connect(mapStateToProps)(CouponCalendar);
