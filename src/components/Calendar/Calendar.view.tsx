import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.style.css";

import React from "react";
import { CalendarProps } from "./Calendar";

import DatePicker from "react-datepicker";
import calendarIcon from "./images/calendar.png";

export const CalendarView: React.FC<CalendarProps> = (props) => {
  var [endDate, setEndDate] = React.useState(props.endDate);
  var endDateString = endDate.toLocaleString().substr(0, 10);

  const { onChange } = props;
  return (
    <div className={styles.container}>
      <DatePicker
        customInput={
          <div className={styles.container}>
            <img className={styles.icon} src={calendarIcon} alt="" />
            <div className={styles.text} id="calendarText">
              {"по "}
              {endDateString}
            </div>
          </div>
        }
        selected={endDate}
        onChange={(date) => {
          onChange;
          setEndDate(date);
          document.getElementById("calendarText").innerHTML =
            "по " + date.toLocaleDateString();
        }}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
};
