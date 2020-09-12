import React from "react";
import { SettingsView } from "./Settings.view";

type SettingsState = { /* your states */ };

export type SettingsProps = SettingsState;

export const Settings: React.FC<SettingsProps> = (props) => {
	return <SettingsView {...props} />
}
