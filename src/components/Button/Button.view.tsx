import styles from "./Button.style.css";

import React from "react";
import { ButtonProps } from "./Button";

export const ButtonView: React.FC<ButtonProps> = (props) => {
	const {name, type, className} = props;

	return (
		<div className={styles.container}>
			<button className={`${styles.button} ${styles[type]} ${className}`}>{name}</button>
		</div>
	);
}
