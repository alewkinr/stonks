import React from "react";
import { HeaderView } from "./Header.view";

type HeaderState = { /* your states */ };

export type HeaderProps = HeaderState;

export const Header: React.FC<HeaderProps> = (props) => {
	return <HeaderView {...props} />
}
