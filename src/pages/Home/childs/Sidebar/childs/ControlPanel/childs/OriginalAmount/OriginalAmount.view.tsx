import styles from "./OriginalAmount.style.css";

import React from "react";
import { OriginalAmountProps } from "./OriginalAmount";

// TODO: Избавиться от дублирования кода. Аналогичные компоненты: ForecastPeriod, DepositingFunds, Settings.
export const OriginalAmountView: React.FC<OriginalAmountProps> = (props) => {
	return (
		<div className={styles.container} style={{height: "50px"}}>
			<div className={styles.title}>{"Сумма"}</div>
			<div className={styles.info} />
			<div className={styles.value}>{"1 458 465"}</div>	
		</div>
	);
}
