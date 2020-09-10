import styles from "./Button.style.css";

import React from "react";
import { ButtonProps } from "./Button";

export const ButtonView: React.FC<ButtonProps> = (props) => {
	const {name} = props;

	return (
		<div className={styles.container}>
			<button className={styles.button}>{name}</button>
		</div>
	);
}
