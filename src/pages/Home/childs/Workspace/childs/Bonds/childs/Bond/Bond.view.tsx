import styles from "./Bond.style.css";

import React from "react";
import { BondProps } from "./Bond";
import tinkoff from "./contents/tinkoff.png";

export const BondView: React.FC<BondProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.iconAndTitle}>
				<img src={tinkoff} alt="bond-icon" className={styles.image} />
				<div className={styles.name}>{"Тинькофф1R"}</div>
			</div>
			<div className={styles.maturityDate}>{"до 22.07.2021"}</div>
			<div className={styles.percent}>
				<span>{"11,55"}</span><span>{"годовых"}</span>
			</div>
			<div className={styles.price}>{"1 103"}</div>
		</div>
	);
}
