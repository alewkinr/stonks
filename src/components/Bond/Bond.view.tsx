import styles from "./Bond.style.css";

import React from "react";
import { BondProps } from "./Bond";

export const BondView: React.FC<BondProps> = (props) => {
    return (
        <div className={styles.container}>
            <span>
                <div className={styles.bondLogo} />
            </span>
            <span className={styles.bondText + " " + styles.title}>
                {/* {props.title} */}
            </span>
            <span className={styles.bondText}>{" шт."}</span>
            <span className={styles.bondText}>{"до "}</span>
            <span className={styles.bondText + " " + styles.profit}>
                {/* {props.couponPercentage}% годовых */}
            </span>
        </div>
    )
}
