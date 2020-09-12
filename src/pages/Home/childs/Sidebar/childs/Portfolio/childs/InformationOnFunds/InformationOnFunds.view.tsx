import styles from "./InformationOnFunds.style.css";

import React from "react";
import { InformationOnFundsProps } from "./InformationOnFunds";

export const InformationOnFundsView: React.FC<InformationOnFundsProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.available}>
				<div className={styles.money}>{"783 459"}</div>
				<div className={styles.label}>{"доступная сумма"}</div>
			</div>
			<div className={styles.used}>
				<div className={styles.money}>{"675 006"}</div>
				<div className={styles.label}>{"используемая сумма"}</div>
			</div>
			<div className={styles.info} />
		</div>
	);
}
