import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";
import { Header } from "./childs/Header";
import { Calculator } from "./childs/Calculator";

export const HomeView: React.FC<HomeProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Header />
			</div>
			<div className={styles.body}>
				<Calculator />
			</div>
		</div>
	);
}
