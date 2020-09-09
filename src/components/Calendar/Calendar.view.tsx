import styles from "./Calendar.style.css";
import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import ru from 'date-fns/locale/ru';
import { CalendarProps } from "./Calendar";
import DatePicker from "react-datepicker";
import calendarIcon from "./contents/calendar.svg";

export const CalendarView: React.FC<CalendarProps> = (props) => {
	var [endDate, setEndDate] = React.useState(props.endDate);
	var endDateString = endDate.toLocaleString().substr(0, 10);

	const { onChange } = props;

	return (
		<div className={styles.container}>
			<DatePicker locale={ru}
				customInput={
					<div className={styles.container}>
						<img className={styles.icon} src={calendarIcon} alt="" />
						<div className={styles.text} id="calendarText">{`по ${endDateString}`}</div>
					</div>
				}
				selected={endDate}
				onChange={(date) => {
					setEndDate(date);
				}}
				dateFormat="dd.mm.yyyy"
			/>
		</div>
	);
};
