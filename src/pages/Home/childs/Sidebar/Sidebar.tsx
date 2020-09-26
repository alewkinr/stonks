import React from "react";
import { SidebarView } from "./Sidebar.view";

type SidebarState = { /* your states */ };

export type SidebarProps = SidebarState;

export const Sidebar: React.FC<SidebarProps> = (props) => {
	return <SidebarView {...props} />
}
