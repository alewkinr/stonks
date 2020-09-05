import styles from "./Calculator.style.css";

import React from "react";
import { CalculatorProps } from "./Calculator";

export const CalculatorView: React.FC<CalculatorProps> = (props) => {
	return (
		<div className={styles.container}>{"Calculator"}</div>
	);
}
