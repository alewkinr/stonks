import styles from "./Sidebar.style.css";

import React from "react";
import { SidebarProps } from "./Sidebar";
import { Header } from "./childs/Header";
import { ControlPanel } from "./childs/ControlPanel";
import { Portfolio } from "./childs/Portfolio";
import { Footer } from "./childs/Footer";

export const SidebarView: React.FC<SidebarProps> = (props) => {
	return (
		<div className={styles.container}>
			<Header />
			<ControlPanel />
			<Portfolio />
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
}
