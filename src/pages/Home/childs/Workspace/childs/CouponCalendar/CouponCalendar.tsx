import React from "react";
import { connect } from "react-redux";

import { AppState } from "../../../../../../store"
import { CouponCalendarView } from "./CouponCalendar.view";
import { Bond } from "../../../../../../common/types";

import { CombineCouponCalendar } from "./utils/CouponCalendar.utils";

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
    calendarData: Map<string, Array<CouponCalendarPayment>>;
};

export type CouponCalendarProps = CouponCalendarState;

const CouponCalendar: React.FC<CouponCalendarProps> = (props) => {
    return <CouponCalendarView {...props} />;
};

const mapStateToProps = (state: AppState): CouponCalendarState => {
    const { bonds, portfolio } = state.portfolio;
    const calendarData = CombineCouponCalendar(bonds, portfolio);

    return { bonds, portfolio, calendarData }
}

export default connect(mapStateToProps)(CouponCalendar)