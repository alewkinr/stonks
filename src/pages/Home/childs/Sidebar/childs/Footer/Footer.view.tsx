import styles from "./Footer.style.css";

import React from "react";
import { FooterProps } from "./Footer";

export const FooterView: React.FC<FooterProps> = (props) => {
	return (
		<div className={styles.container}>
			<a href="#" className={styles.link}>БКС 3 : Developer Team</a>
		</div>
	);
}
