import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";

export const HomeView: React.FC<HomeProps> = (props) => {
	return (
		<div className={styles.container}>{"Home"}</div>
	);
}
