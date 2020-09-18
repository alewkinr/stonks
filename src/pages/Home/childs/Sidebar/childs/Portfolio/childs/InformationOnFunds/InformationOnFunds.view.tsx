import styles from "./InformationOnFunds.style.css";

import React from "react";
import { InformationOnFundsProps } from "./InformationOnFunds";
import { convertToFormat } from "../../../ControlPanel/childs/OriginalAmount/handlers/ConvertToFormat";

export const InformationOnFundsView: React.FC<InformationOnFundsProps> = (
    props
) => {
    const { bondSum, freeMoney } = props;

    console.log(bondSum);
    return (
        <div className={styles.container}>
            <div className={styles.available}>
                <div className={styles.money}>
                    {convertToFormat(bondSum.toString())}
                </div>
                <div className={styles.label}>{"cумма портфеля"}</div>
            </div>
            <div className={styles.used}>
                <div className={styles.money}>
                    {convertToFormat(freeMoney.toString())}
                </div>
                <div className={styles.label}>{"свободные средства"}</div>
            </div>
        </div>
    );
};
