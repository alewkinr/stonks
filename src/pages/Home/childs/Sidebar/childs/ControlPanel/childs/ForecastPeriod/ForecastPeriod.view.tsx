import styles from "./ForecastPeriod.style.css";

import React from "react";
import { ForecastPeriodProps } from "./ForecastPeriod";
import { Slider } from "../../../../../../../../components/Slider";

export const ForecastPeriodView: React.FC<ForecastPeriodProps> = (props) => {
	const SLIDER_MAX = 7;
	const SLIDER_MIN = 1;
	const SLIDER_STEP = 1;
	
	const {forecastPeriod, setForecastPeriod} = props;

	return (
		<div className={styles.container}>
			<div className={styles.title}>{"Срок"}</div>
			<div className={styles.value}>{`${forecastPeriod} год`}</div>
			<Slider marks
				value={forecastPeriod}
				step={SLIDER_STEP}
				min={SLIDER_MIN}
				max={SLIDER_MAX}
				onChange={(_, value: number) => setForecastPeriod(value)} />
		</div>
	);
}
