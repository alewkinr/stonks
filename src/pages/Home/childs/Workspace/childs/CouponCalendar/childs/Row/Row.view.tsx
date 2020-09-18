import styles from "./Row.style.css";

import React from "react";
import { RowProps } from "./Row";

export const RowView: React.FC<RowProps> = (props) => {
    const { date, bondName, sum, issuerLogoUrl } = props;
    return (
        <tr>
            <td className={styles.iconAndTitle}>
                <img src={issuerLogoUrl} alt="row-icon" className={styles.image} />
                <div className={styles.name}>{bondName}</div>
            </td>
            <td>{date}</td>
            <td ><div className={styles.price}>{sum}</div></td>
        </tr>
    );
};
