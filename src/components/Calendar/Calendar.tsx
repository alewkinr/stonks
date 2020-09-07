import React from "react";
import { CalendarView } from "./Calendar.view";
import { ExtendedAPIPlugin } from "webpack";

type CalendarState = {
  endDate?: Date;
};

export type CalendarProps = CalendarState;

export const Calendar: React.FC<CalendarProps> = (props) => {
  return <CalendarView {...props} />;
};

Calendar.defaultProps = {
  endDate: new Date(),
};

Calendar.defaultProps.endDate.setFullYear(
  Calendar.defaultProps.endDate.getFullYear() + 5
);
