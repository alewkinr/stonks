import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";
import { Sidebar } from "./childs/Sidebar";
import { Workspace } from "./childs/Workspace";

export const HomeView: React.FC<HomeProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
			<div className={styles.workspace}>
				<Workspace />
			</div>
		</div>
	);
}
