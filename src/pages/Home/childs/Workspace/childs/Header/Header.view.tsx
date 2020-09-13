import styles from "./Header.style.css";

import React from "react";
import { HeaderProps } from "./Header";

export const HeaderView: React.FC<HeaderProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.brand} />
		</div>
	);
}
