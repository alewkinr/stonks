import styles from "./OriginalAmount.style.css";

import React from "react";
import { OriginalAmountProps } from "./OriginalAmount";
import { InfoTooltip } from "../../../../../../../../components/InfoTooltip"

// TODO: Избавиться от дублирования кода. Аналогичные компоненты: ForecastPeriod, DepositingFunds, Settings.
export const OriginalAmountView: React.FC<OriginalAmountProps> = (props) => {
	return (
		<div className={styles.container} style={{ height: "50px" }}>
			<div className={styles.title}>{"Капитал"}</div>
			<InfoTooltip text="Сумма, которую вы готовы вложить в момент открытия счета" />
			<div className={styles.value}>{"1 458 465"}</div>
		</div>
	);
}
