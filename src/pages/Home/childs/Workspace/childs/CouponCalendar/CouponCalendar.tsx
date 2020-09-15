import React from "react";
import { CouponCalendarView } from "./CouponCalendar.view";

type CouponCalendarState = {
    calendarData?: Array<[string, string, string]>;
};

export type CouponCalendarProps = CouponCalendarState;

export const CouponCalendar: React.FC<CouponCalendarProps> = (props) => {
    return <CouponCalendarView {...props} />;
};

CouponCalendar.defaultProps = {
    calendarData: [
        ["22.10.2020", "Тинькофф3R", "1 543"],
        ["22.05.2021", "Тинькофф3R", "1 543"],
        ["22.10.2021", "Тинькофф3R", "1 543"],
    ],
};
