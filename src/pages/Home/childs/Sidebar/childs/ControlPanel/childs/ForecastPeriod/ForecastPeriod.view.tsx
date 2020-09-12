import styles from "./ForecastPeriod.style.css";

import React from "react";
import { ForecastPeriodProps } from "./ForecastPeriod";

export const ForecastPeriodView: React.FC<ForecastPeriodProps> = (props) => {
	return (
		<div className={styles.container} style={{height: "50px"}}>
			<div className={styles.title}>{"Срок"}</div>
			<div className={styles.info} />
			<div className={styles.value}>{"1 год"}</div>
		</div>
	);
}
