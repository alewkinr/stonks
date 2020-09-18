import React from "react";
import { connect } from "react-redux";

import { AppState } from "../../../../../../store";
import { CouponCalendarView } from "./CouponCalendar.view";
import { Bond } from "../../../../../../common/types";

import {
    CombineCouponCalendar,
    CombineCouponCalendarWithSolveFunc,
} from "./utils/CouponCalendar.utils";

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
    } = state.account;
    const calendarData = CombineCouponCalendarWithSolveFunc(
        bonds,
        portfolio,
        accountType,
        Number(originalAmount),
        Number(depositingFunds),
        forecastPeriod,
        false
    );

    return { bonds, portfolio, calendarData };
};

export default connect(mapStateToProps)(CouponCalendar);
