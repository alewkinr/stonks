import styles from "./CouponCalendar.style.css";

import React from "react";
import { CouponCalendarProps } from "./CouponCalendar";

import { Header } from "./childs/Header";
import { Row } from "./childs/Row";

export const CouponCalendarView: React.FC<CouponCalendarProps> = (props) => {
    const { calendarData } = props;
    console.log(calendarData);
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.containerRow}>
                <div className={styles.label}>{"Облигация"}</div>
                <div className={styles.label}>{"Дата выплаты"}</div>
                <div className={styles.label}>{"Сумма"}</div>
            </div>
            <div className={styles.bonds}>
                {Object.values(calendarData).map((calendarRow, i) => {
                    return (
                        <Row
                            key={i}
                            date={calendarRow[0]}
                            bondName={calendarRow[1]}
                            sum={calendarRow[2]}
                        />
                    );
                })}
            </div>
        </div>
    );
};
