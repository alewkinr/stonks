import styles from "./Forecast.style.css";

import React from "react";
import { ForecastProps } from "./Forecast";
import { Button } from "../../../../../../components/Button";

export const ForecastView: React.FC<ForecastProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.cover}>
				<div className={styles.label}>{"Прогноз"}</div>
				<div className={styles.forecast}>
					<div className={styles.totalAmount}>
						<div className={styles.money}>{"1 783 967"}</div>
						<div className={styles.label}>{"Итоговая сумма"}</div>
					</div>
					<div className={styles.profit}>
						<div className={styles.money}>{"+ 383 967"}</div>
						<div className={styles.label}>{"Итоговая сумма"}</div>
					</div>
					<div className={styles.profitPercentage}>
						<div className={styles.percent}>{"5,08"}</div>
						<div className={styles.label}>{"Итоговая сумма"}</div>
					</div>
				</div>
				<Button name="Консультация" type="negative" />
			</div>
		</div>
	);
}
