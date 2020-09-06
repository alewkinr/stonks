import styles from "./Label.style.css";

import React from "react";
import { LabelProps } from "./Label";

export const LabelView: React.FC<LabelProps> = (props) => {
	const {name, description} = props;

	return (
		<div className={styles.container}>
			<span className={styles.name}>{name}</span>
			<div className={styles.info} title={description}></div>
		</div>
	);
}
