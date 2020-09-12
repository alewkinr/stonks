import React from "react";
import { ControlPanelView } from "./ControlPanel.view";

type ControlPanelState = { /* your states */ };

export type ControlPanelProps = ControlPanelState;

export const ControlPanel: React.FC<ControlPanelProps> = (props) => {
	return <ControlPanelView {...props} />
}
