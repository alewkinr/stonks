import styles from "./Settings.style.css";

import React, { useState } from "react";
import { SettingsProps } from "./Settings";
import { Toggle } from "../../../../../../../../components/Toggle";

export const SettingsView: React.FC<SettingsProps> = (props) => {
	const [reinvestment, setReinvestment] = useState(false);
	const [additionalPurchase, setAdditionalPurchase] = useState(false);
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.title}>{"Реинвестиции"}</div>
				<div className={styles.control}>
					<Toggle checked={reinvestment} onChange={() => setReinvestment(!reinvestment)} />
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.title}>{"Докупка"}</div>
				<div className={styles.control}>
					<Toggle checked={additionalPurchase} onChange={() => setAdditionalPurchase(!additionalPurchase)} />
				</div>
			</div>
		</div>
	);
}
