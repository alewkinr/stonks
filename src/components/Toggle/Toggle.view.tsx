import styles from "./Toggle.style.css";

import React from "react";
import { ToggleProps } from "./Toggle";

export const ToggleView: React.FC<ToggleProps> = (props) => {
	const {title} = props;

	return (
		<div className={styles.container}>
			<label className={styles.label}>
				<input type="checkbox" className={styles.input } />
				<div className={styles.toggle} />
				<div className={styles.title}>{title}</div>
			</label>
			<div className={styles.info} />
		</div>
	);
}
