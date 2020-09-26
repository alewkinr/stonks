import React from "react";
import { FooterView } from "./Footer.view";

type FooterState = { /* your states */ };

export type FooterProps = FooterState;

export const Footer: React.FC<FooterProps> = (props) => {
	return <FooterView {...props} />
}
