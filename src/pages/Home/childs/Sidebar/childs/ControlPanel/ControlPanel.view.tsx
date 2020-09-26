import styles from "./ControlPanel.style.css";

import React from "react";
import { ControlPanelProps } from "./ControlPanel";
import { OriginalAmount } from "./childs/OriginalAmount";
import { ForecastPeriod } from "./childs/ForecastPeriod";
import { DepositingFunds } from "./childs/DepositingFunds";
import { Settings } from "./childs/Settings";

export const ControlPanelView: React.FC<ControlPanelProps> = (props) => {
	return (
		<div className={styles.container}>
			<OriginalAmount />
			<ForecastPeriod />
			<DepositingFunds />
			<Settings />
		</div>
	);
}
