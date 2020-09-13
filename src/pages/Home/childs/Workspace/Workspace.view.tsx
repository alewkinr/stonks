import styles from "./Workspace.style.css";

import React from "react";
import { WorkspaceProps } from "./Workspace";
import { Header } from "./childs/Header";
import { Forecast } from "./childs/Forecast";
import { Charts } from "./childs/Charts";
import { Bonds } from "./childs/Bonds";

export const WorkspaceView: React.FC<WorkspaceProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.gradient} />
			<Header />
			<Forecast />
			<Charts />
			<Bonds />
		</div>
	);
}
