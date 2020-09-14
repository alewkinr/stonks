import styles from "./Portfolio.style.css";

import React from "react";
import { PortfolioProps } from "./Portfolio";
import { InformationOnFunds } from "./childs/InformationOnFunds";
import { Bond } from "./childs/Bond";
import { Scrollbars } from "react-custom-scrollbars";

export const PortfolioView: React.FC<PortfolioProps> = (props) => {
    const value = "a".repeat(30);
    const array = [...value];

    return (
        <div className={styles.container}>
            <div className={styles.containerRow}>
                <div className={styles.label}>{"Портфель"}</div>
                <div className={`${styles.control} ${styles.plus}`} />
            </div>
            <InformationOnFunds />
            <Scrollbars autoHide style={{ width: "100%", height: "420px" }}>
                <div className={styles.bonds}>
                    {array.map((it) => (
                        <Bond />
                    ))}
                </div>
            </Scrollbars>
        </div>
    );
};
