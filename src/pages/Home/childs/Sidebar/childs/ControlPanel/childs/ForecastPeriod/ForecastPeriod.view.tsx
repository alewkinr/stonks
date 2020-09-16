import styles from "./ForecastPeriod.style.css";

import React from "react";
import { ForecastPeriodProps } from "./ForecastPeriod";
import { Slider } from "../../../../../../../../components/Slider";

export const ForecastPeriodView: React.FC<ForecastPeriodProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{"Срок"}</div>
			<div className={styles.value}>{"1 год"}</div>
			<Slider step={10} />
		</div>
	);
}
