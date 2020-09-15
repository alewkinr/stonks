import styles from "./Row.style.css";

import React from "react";
import { RowProps } from "./Row";

import tinkoff from "./contents/tinkoff.png";

export const RowView: React.FC<RowProps> = (props) => {
    const { date, bondName, sum } = props;
    return (
        <div className={styles.container}>
            <div className={styles.iconAndTitle}>
                <img src={tinkoff} alt="row-icon" className={styles.image} />
                <div className={styles.name}>{bondName}</div>
            </div>
            <div>{date}</div>
            <div className={styles.price}>{sum}</div>
        </div>
    );
};
