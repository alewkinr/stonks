import styles from "./CouponCalendar.style.css";

import React from "react";
import { CouponCalendarProps } from "./CouponCalendar";

import { Header } from "./childs/Header";
import { Row } from "./childs/Row";

export const CouponCalendarView: React.FC<CouponCalendarProps> = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.bonds}>
                <Row />
                <Row />
            </div>
        </div>
    );
};
