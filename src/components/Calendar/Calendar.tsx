import React from "react";
import { CalendarView } from "./Calendar.view";

type CalendarState = {
	endDate: Date;
};

type CalendarDispatch = {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CalendarProps = CalendarState & CalendarDispatch;

export const Calendar: React.FC<CalendarProps> = (props) => {
	return <CalendarView {...props} />;
};
