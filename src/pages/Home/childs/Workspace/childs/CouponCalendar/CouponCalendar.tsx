import React from "react";
import { CouponCalendarView } from "./CouponCalendar.view";

type CouponCalendarState = { /* your states */ };

export type CouponCalendarProps = CouponCalendarState;

export const CouponCalendar: React.FC<CouponCalendarProps> = (props) => {
	return <CouponCalendarView {...props} />
}
