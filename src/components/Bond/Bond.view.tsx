import styles from "./Bond.style.css"

import React from "react"
import { BondProps } from "./Bond"

export const BondView: React.FC<BondProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.bondRow}>
                <img
                    src="./components/Bond/images/tinkoff-bond.png"
                    alt="Bond-title"
                />
                <span className={styles.bondText + " " + styles.title}>
                    {props.title}
                </span>
                <span className={styles.bondText}>{props.amount}</span>
                <span className={styles.bondText}>{props.expireDate}</span>
                <span className={styles.bondText + " " + styles.profit}>
                    {props.interest}
                </span>
            </div>
        </div>
    )
}
