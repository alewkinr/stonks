import styles from "./Bonds.style.css";

import React from "react";
import { BondsProps } from "./Bonds";
import { Header } from "./childs/Header";
import { Bond } from "./childs/Bond";

export const BondsView: React.FC<BondsProps> = (props) => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.bonds}>
				<Bond />
				<Bond />
			</div>
		</div>
	);
}
