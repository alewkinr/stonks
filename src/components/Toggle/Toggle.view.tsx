import styles from "./Toggle.style.css";

import React from "react";
import { ToggleProps } from "./Toggle";

export const ToggleView: React.FC<ToggleProps> = (props) => {
	const {checked} = props;

	const {onChange} = props;

	return (
		<div className={styles.container}>
			<label className={styles.label}>
				<input type="checkbox"
					className={styles.input}
					checked={checked}
					onChange={onChange} />
				<div className={styles.toggle} />
			</label>
		</div>
	);
}
