import styles from "./CouponCalendar.style.css";
import React from "react";
import { CouponCalendarProps } from "./CouponCalendar";
import { Row } from "./childs/Row";
import { convertToFormat } from "../../../../../../common/utils/ConvertToFormat";
import { JoinCouponPayments } from "./utils/CouponCalendar.utils";

const _renderTableRow = (key, date, bondName, issuerLogoUrl, sum) => {
    return (
        <Row
            key={key}
            date={new Date(date).toLocaleString().substr(0, 10)}
            bondName={bondName}
            sum={convertToFormat(sum, -1)}
            issuerLogoUrl={issuerLogoUrl}
        />
    );
};

export const CouponCalendarView: React.FC<CouponCalendarProps> = (props) => {
    const { calendarData } = props;

    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.title}>{"Календарь выплат"}</div>
                <table>
                    <thead>
                        <tr>
                            <td className={styles.label}>{"Облигация"}</td>
                            <td className={styles.label}>{"Дата выплаты"}</td>
                            <td className={styles.label}>{"Сумма"}</td>
                        </tr>
                    </thead>
                    <tbody>
                        {calendarData.map((payment, i) => {
                            return _renderTableRow(
                                i,
                                payment.paymentDate,
                                payment.issuerName,
                                payment.issuerLogoUrl,
                                payment.couponPaymentAmount
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};
