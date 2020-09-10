import styles from "./Cash.style.css";

import React from "react";
import { CashProps } from "./Cash";

export const CashView: React.FC<CashProps> = (props) => {
	const {value, currency} = props;

	return (
		<div className={styles.container}>
			<div className={styles.value}>{value}</div>
			<div className={`${styles.currency} ${styles[currency]}`}></div>
		</div>
	);
}
