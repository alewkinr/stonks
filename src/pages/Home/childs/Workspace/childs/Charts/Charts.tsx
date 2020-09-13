import React from "react";
import { ChartsView } from "./Charts.view";

type ChartsState = { /* your states */ };

export type ChartsProps = ChartsState;

export const Charts: React.FC<ChartsProps> = (props) => {
	return <ChartsView {...props} />
}
