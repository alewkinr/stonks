import styles from "./Bond.style.css"

import React from "react"
import { BondProps } from "./Bond"

export const BondView: React.FC<BondProps> = (props) => {
    return (
        <div className={styles.container}>
            <span>
                <div className={styles.bondLogo} style="background-image: url('"{this.props.issuerImg}"');"/>
            </span>
            <span className={styles.bondText + " " + styles.title}>
                {this.props.title}
            </span>
            <span className={styles.bondText}>{this.props.issuer} шт.</span>
            <span className={styles.bondText}>до {this.props.maturityDate}</span>
            <span className={styles.bondText + " " + styles.profit}>
                {this.props.couponPercentage}% годовых
            </span>
        </div>
    )
}
