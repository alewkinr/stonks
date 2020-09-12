import styles from "./Workspace.style.css";

import React from "react";
import { WorkspaceProps } from "./Workspace";

export const WorkspaceView: React.FC<WorkspaceProps> = (props) => {
	return (
		<div className={styles.container}>{"Workspace"}</div>
	);
}
