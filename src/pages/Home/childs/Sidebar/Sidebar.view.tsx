import styles from "./Sidebar.style.css";

import React from "react";
import { SidebarProps } from "./Sidebar";
import { Header } from "./childs/Header";
import { ControlPanel } from "./childs/ControlPanel";

export const SidebarView: React.FC<SidebarProps> = (props) => {
	return (
		<div className={styles.container}>
			<Header />
			<ControlPanel />
		</div>
	);
}
