import styles from "./Portfolio.style.css";

import React from "react";
import { PortfolioProps } from "./Portfolio";
import { InformationOnFunds } from "./childs/InformationOnFunds";

export const PortfolioView: React.FC<PortfolioProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{"Портфель"}</div>
			<InformationOnFunds />
		</div>
	);
}
