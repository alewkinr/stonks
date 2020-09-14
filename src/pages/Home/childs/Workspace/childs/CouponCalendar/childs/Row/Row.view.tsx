import styles from "./Row.style.css";

import React from "react";
import { RowProps } from "./Row";

import tinkoff from "./contents/tinkoff.png";

export const RowView: React.FC<RowProps> = (props) => {
    return (
        <div className={styles.container}>
            <div>{"22.07.2021"}</div>
            <div className={styles.iconAndTitle}>
                <img src={tinkoff} alt="row-icon" className={styles.image} />
                <div className={styles.name}>{"Тинькофф1R"}</div>
            </div>
            <div className={styles.percent}>
                <span>{"11,55"}</span>
            </div>
            <div className={styles.price}>{"1 103"}</div>
        </div>
    );
};
