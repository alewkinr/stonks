import React from "react";
import { WorkspaceView } from "./Workspace.view";

type WorkspaceState = { /* your states */ };

export type WorkspaceProps = WorkspaceState;

export const Workspace: React.FC<WorkspaceProps> = (props) => {
	return <WorkspaceView {...props} />
}
