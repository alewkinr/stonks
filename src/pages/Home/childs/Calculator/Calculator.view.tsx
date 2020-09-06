import styles from "./Calculator.style.css";

import React from "react";
import { CalculatorProps } from "./Calculator";
import { Account } from "./childs/Account";

export const CalculatorView: React.FC<CalculatorProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.account}>
				<Account />
			</div>
			<div className={styles.forecast}></div>
		</div>
	);
}
