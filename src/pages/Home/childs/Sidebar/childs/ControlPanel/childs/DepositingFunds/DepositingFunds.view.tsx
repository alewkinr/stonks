import styles from "./DepositingFunds.style.css";

import React from "react";
import { DepositingFundsProps } from "./DepositingFunds";

export const DepositingFundsView: React.FC<DepositingFundsProps> = (props) => {
	return (
		<div className={styles.container} style={{height: "50px"}}>
			<div className={styles.title}>{"Внесения"}</div>
			<div className={styles.info} />
			<div className={styles.value}>{"30 000"}</div>
		</div>
	);
}
